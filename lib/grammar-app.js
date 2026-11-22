/* eslint-disable */
// App logic, ported unchanged from grammaire_francaise.html.
let started = false;
export function initApp(S, C) {
  // S: interface strings for the current native language (see lib/i18n/ui.ts, Dict["app"]).
  // C: map content for the current language pair (see content/, MapContent).
  if (started) return;
  started = true;
/* ---------- Data storage ----------
   Everything currently lives in the browser (localStorage). To sync progress across devices,
   just replace get / set with backend requests (e.g. Supabase: a "progress" table
   with user_id, key, value jsonb columns). The rest of the code only goes through Store. */
const Store = {
  prefix: C.STORE || "frmap-",   /* per-map prefix, so each target language keeps its own progress */
  get(k, def){ try{ const v=localStorage.getItem(this.prefix+k); return v==null?def:JSON.parse(v); }catch(e){ return def; } },
  set(k, v){ try{ localStorage.setItem(this.prefix+k, JSON.stringify(v)); }catch(e){} },
};
// Map content (topics, explanations, exercises) for the current language pair; see content/.
// Cloned because the app adds derived fields (q/c merge, next, n) to topics.
// ROUTE: recommended order of all topics; STRICT: topic ids whose fix-the-mistake answers also check spacing.
const { DOM, PHASES, T, EX, LONG, WHY, SOURCES = {}, ROUTE, STRICT = [] } = structuredClone(C);
const COLS = Object.keys(DOM);   /* map columns, left to right */

T.forEach(t=>{ t.q=t.q.concat(EX[t.id].q); t.c=EX[t.id].c; });

function md(src){
  const out=[]; let tbl=null, ul=null;
  const flush=()=>{ if(tbl){ out.push(`<div class="tw"><table>${tbl.map((r,i)=>`<tr>${r.map(c=>i?`<td>${c}</td>`:`<th>${c}</th>`).join("")}</tr>`).join("")}</table></div>`); tbl=null; } if(ul){ out.push(`<ul>${ul.map(l=>`<li>${l}</li>`).join("")}</ul>`); ul=null; } };
  src.split("\n").forEach(line=>{
    const l=line.trim(); if(!l){ flush(); return; }
    if(l.startsWith("|")){ if(ul) flush(); (tbl=tbl||[]).push(l.replace(/^\||\|$/g,"").split("|").map(c=>c.trim())); return; }
    if(l.startsWith("- ")){ if(tbl) flush(); (ul=ul||[]).push(l.slice(2)); return; }
    flush();
    if(l.startsWith("## ")) out.push(`<h4>${l.slice(3)}</h4>`);
    else if(l.startsWith("! ")) out.push(`<p class="note">${l.slice(2)}</p>`);
    else out.push(`<p>${l}</p>`);
  });
  flush(); return out.join("");
}

const why=(to,from)=>WHY[`${to}<${from}`]||"";

const byId = Object.fromEntries(T.map(t=>[t.id,t]));
T.forEach(t=>t.next=[]);
T.forEach(t=>t.pre.forEach(p=>byId[p].next.push(t.id)));
/* ROUTE (from content): stage by stage; within a stage, ordered so all prerequisites are already done */
const ORDER = ROUTE.map(id=>byId[id]);
ORDER.forEach((t,i)=>t.n=i+1);

let done=new Set();
done=new Set(Store.get("done-v1",[]));
function save(){ Store.set("done-v1",[...done]); }
/* ---------- personal settings ---------- */
const DEF_SET={hours:4,daily:30,start:1,deadline:""};
let settings=Object.assign({},DEF_SET,Store.get("settings-v1",{})||{});
function saveSettings(){ Store.set("settings-v1",settings); }
const H_TOPIC=2.5, H_TASK=3;                     /* estimate: hours per topic and per stage writing task */
const phaseHours=()=>COLS.length*H_TOPIC+H_TASK;
const wk=h=>Math.max(1,Math.round(h/Math.max(.5,settings.hours)));
const phDur=ph=>S.weeks(wk(phaseHours()));
const skipped=t=>t.p<settings.start;
/* route respecting the start stage: topics from the chosen stage first, skipped ones at the end */
function routeOrder(){ return [...ORDER.filter(t=>!skipped(t)),...ORDER.filter(skipped)]; }
function nextTopic(){ return routeOrder().find(t=>!done.has(t.id)) || null; }
function afterTopic(t){ const R=routeOrder(), i=R.indexOf(t); return R.slice(i+1).find(x=>!done.has(x.id)) || R.find(x=>!done.has(x.id) && x.id!==t.id) || null; }
function remainingHours(){
  const left=T.filter(t=>!done.has(t.id)&&!skipped(t)).length;
  const tasks=PHASES.filter(ph=>ph.n>=settings.start && T.some(t=>t.p===ph.n&&!done.has(t.id))).length;
  return {left, hours:left*H_TOPIC+tasks*H_TASK};
}
const col = d => `var(${DOM[d].c})`;

/* ---------- SVG map ---------- */
const NS="http://www.w3.org/2000/svg";
const LW=118, CW=136, HH=74, RH=112, W=LW+CW*COLS.length+10, H=HH+RH*PHASES.length+8;
const pos = t => ({x: LW + CW*COLS.indexOf(t.d) + CW/2, y: HH + RH*(t.p-1) + 38});
function el(tag,attrs={},parent){ const e=document.createElementNS(NS,tag); for(const k in attrs) e.setAttribute(k,attrs[k]); if(parent) parent.appendChild(e); return e; }
const svg=document.getElementById("map");
svg.setAttribute("viewBox",`0 0 ${W} ${H}`);
function buildMap(){
  const defs=el("defs",{},svg);
  const pat=el("pattern",{id:"seyes",width:32,height:32,patternUnits:"userSpaceOnUse"},defs);
  [8,16,24].forEach(y=>el("line",{x1:0,x2:32,y1:y,y2:y,class:"seyes-thin","stroke-width":.6},pat));
  el("line",{x1:0,x2:32,y1:0,y2:0,class:"seyes-strong","stroke-width":.9},pat);
  el("line",{x1:0,x2:0,y1:0,y2:32,class:"seyes-strong","stroke-width":.9},pat);
  el("rect",{x:0,y:0,width:W,height:H,fill:"url(#seyes)"},svg);
  PHASES.forEach((ph,i)=>{ if(i%2===0) el("rect",{x:0,y:HH+RH*i,width:W,height:RH,class:"band"},svg); });
  el("line",{x1:LW-8,x2:LW-8,y1:0,y2:H,class:"seyes-margin","stroke-width":1.6},svg);
  PHASES.forEach((ph,i)=>{
    const y=HH+RH*i;
    const a=el("text",{x:16,y:y+40,class:"ph-num"},svg); a.textContent=ph.n;
    const b=el("text",{x:16,y:y+60,class:"ph-name"},svg); b.textContent=ph.name;
    const c=el("text",{x:16,y:y+76,class:"ph-name"},svg); c.dataset.phdur=ph.n; c.setAttribute("opacity",".7");
  });
  COLS.forEach((d,i)=>{
    const cx=LW+CW*i+CW/2;
    el("circle",{cx:cx,cy:22,r:5,fill:col(d)},svg);
    const a=el("text",{x:cx,y:44,"text-anchor":"middle",class:"col-fr"},svg); a.textContent=DOM[d].fr;
    const b=el("text",{x:cx,y:60,"text-anchor":"middle",class:"col-uk"},svg); b.textContent=DOM[d].gloss;
    const ts=T.filter(t=>t.d===d).sort((a,b)=>a.p-b.p);
    const p1=pos(ts[0]), p2=pos(ts[ts.length-1]);
    el("line",{x1:cx,x2:cx,y1:p1.y,y2:p2.y,class:"dline",stroke:col(d)},svg);
  });
  const lg=el("g",{},svg);
  T.forEach(t=>t.pre.forEach(pid=>{
    const p=byId[pid]; if(p.d===t.d) return;
    const a=pos(p), b=pos(t), my=(a.y+b.y)/2;
    const path=el("path",{d:`M${a.x} ${a.y+12} C${a.x} ${my+10}, ${b.x} ${my-10}, ${b.x} ${b.y-12}`,class:"link"},lg);
    path.dataset.from=pid; path.dataset.to=t.id;
    el("title",{},path).textContent=`${S.dependsOn(t.fr,p.fr)}: ${why(t.id,pid)}`;
  }));
  T.forEach(t=>{
    const {x,y}=pos(t);
    const g=el("g",{class:"st",tabindex:0,role:"button","aria-label":S.stepAria(t.n,t.fr,t.gloss,t.p)},svg);
    g.dataset.id=t.id;
    el("circle",{cx:x,cy:y,r:19,class:"ready-ring"},g);
    el("circle",{cx:x,cy:y,r:17,class:"halo"},g);
    el("circle",{cx:x,cy:y,r:11,class:"dot",stroke:col(t.d)},g);
    el("path",{d:`M${x-5} ${y} l3.5 3.5 l6.5 -7`,class:"chk"},g);
    const bg=el("g",{class:"stepb"},g);
    el("circle",{cx:x-24,cy:y-11,r:9},bg);
    const bn=el("text",{x:x-24,y:y-7.5,"text-anchor":"middle"},bg); bn.textContent=t.n;
    const nowL=el("text",{x:x+22,y:y+4,class:"nowlbl"},g); nowL.textContent=S.nowLbl;
    const a=el("text",{x:x,y:y+34,"text-anchor":"middle",class:"t1"},g); a.textContent=t.fr;
    const b=el("text",{x:x,y:y+49,"text-anchor":"middle",class:"t2"},g); b.textContent=t.gloss;
    el("rect",{x:x-CW/2+4,y:y-22,width:CW-8,height:78,fill:"transparent"},g);
    g.addEventListener("click",()=>select(t.id,true));
    g.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); select(t.id,true);} });
  });
}

/* ---------- state rendering ---------- */
let current=null;
function refreshMap(){
  const sel=current?byId[current]:null;
  const rec=nextTopic();
  svg.querySelectorAll(".st").forEach(g=>{
    const t=byId[g.dataset.id];
    g.classList.toggle("done",done.has(t.id));
    g.classList.toggle("ready",!!rec && rec.id===t.id);
    g.classList.toggle("skip",skipped(t));
    g.classList.toggle("sel",t.id===current);
    g.querySelector(".dot").style.fill = done.has(t.id) ? col(t.d) : "";
  });
  svg.querySelectorAll("[data-phdur]").forEach(c=>{ c.textContent=phDur(PHASES[c.dataset.phdur-1]); });
  svg.querySelectorAll(".link").forEach(p=>{
    p.classList.toggle("hot", !!sel && (p.dataset.to===sel.id || p.dataset.from===sel.id));
  });
}
function renderStrip(){
  const s=document.getElementById("strip"); s.innerHTML="";
  ORDER.forEach(t=>{
    const i=document.createElement("i");
    i.style.setProperty("--c",col(t.d));
    if(done.has(t.id)) i.className="done";
    i.title=S.stepTitle(t.n,t.fr);
    i.addEventListener("click",()=>select(t.id,true));
    s.appendChild(i);
  });
  document.getElementById("progNum").textContent=`${done.size} / ${T.length}`;
}
function chip(id){
  const t=byId[id];
  return `<button type="button" class="chip${done.has(id)?" done":""}" style="--c:${col(t.d)}" data-go="${id}"><span class="cn">${t.n}</span><span class="fr">${t.fr}</span></button>`;
}
function esc(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;");}
/* readable site name shown next to each source link */
const SITE_NAMES={"leconjugueur.lefigaro.fr":"Le Conjugueur","dictionnaire.lerobert.com":"Le Robert","projet-voltaire.fr":"Projet Voltaire","podcastfrancaisfacile.com":"Podcast Français Facile","lepointdufle.net":"Le Point du FLE","fr.wikipedia.org":"Wikipédia","dictionary.cambridge.org":"Cambridge Dictionary","perfect-english-grammar.com":"Perfect English Grammar"};
function srcSite(url){ const h=new URL(url).hostname.replace(/^www\./,""); return SITE_NAMES[h]||h; }
function escAttr(s){return esc(s).replace(/"/g,"&quot;");}
function norm(s,strict){
  let x=s.replace(/[  ]/g," ").replace(/[’ʼ`]/g,"'").replace(/\s+/g," ").trim();
  if(!strict) x=x.replace(/\s+([?!:;»,.])/g,"$1").replace(/«\s+/g,"«");
  return x.replace(/\.$/,"");
}
const A={};
const getA=id=>A[id]||(A[id]={q:{},c:{}});
let scores={};
scores=Store.get("score-v1",{})||{};
function updScore(t){
  const a=getA(t.id), total=t.q.length+t.c.length;
  let right=0, answered=0;
  t.q.forEach((q,i)=>{ if(a.q[i]!==undefined){ answered++; if(a.q[i]===q[2]) right++; } });
  t.c.forEach((c,i)=>{ const s=a.c[i]; if(s&&(s.tried)){ answered++; if(s.ok) right++; } });
  const el=document.getElementById("score");
  if(el) el.textContent=answered?S.score(right,total,answered):S.tasks(total);
  if(answered===total){ scores[t.id]=`${right}/${total}`; Store.set("score-v1",scores); }
}
function renderPanel(){
  const t=byId[current], c=col(t.d), P=document.getElementById("panel");
  P.style.setProperty("--c",c);
  const a=getA(t.id);
  const qs=t.q.map((q,qi)=>`<div class="q" data-q="${qi}"><div class="qq">${esc(q[0])}</div><div class="opts">${q[1].map((o,oi)=>`<button type="button" class="opt" data-o="${oi}">${esc(o)}</button>`).join("")}</div><div class="why" hidden></div></div>`).join("");
  const fx=t.c.map((c,ci)=>`<div class="fix" data-c="${ci}"><div class="wrongtxt"><s>${esc(c[0])}</s></div><input type="text" id="fix-${t.id}-${ci}" lang="fr" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="${S.fixAria}" value="${escAttr(a.c[ci]?a.c[ci].v:c[0])}"><div class="fix-actions"><button type="button" class="btn sm" data-act="check">${S.check}</button><button type="button" class="btn sm" data-act="show">${S.show}</button></div><div class="why" hidden></div></div>`).join("");
  P.innerHTML=`
    <div class="pn-meta"><span class="pill" style="--c:${c}">${DOM[t.d].fr} · ${DOM[t.d].gloss}</span><span class="tag">${S.stepOf(t.n,t.p)}</span>${done.has(t.id)?`<span class="tag ok">${S.learned}</span>`:(nextTopic()&&nextTopic().id===t.id?`<span class="tag now-tag">${S.learnNow}</span>`:"")}${scores[t.id]?`<span class="tag">${S.result(scores[t.id])}</span>`:""}<span class="tag" id="topicTime"></span></div>
    <div class="pn-title"><h2>${t.t}</h2><p>${t.s}</p></div>
    ${SOURCES[t.id]&&SOURCES[t.id].length?`<section class="sources"><h3>${S.sources}</h3><ul>${SOURCES[t.id].map(([title,url])=>`<li><a href="${escAttr(url)}" target="_blank" rel="noopener noreferrer">${esc(title)}</a><span class="src-host">${esc(srcSite(url))}</span></li>`).join("")}</ul></section>`:""}
    ${!done.has(t.id)&&t.pre.some(p=>!done.has(p)&&!skipped(byId[p]))?`<p class="why">${S.laterOnRoute(t.pre.filter(p=>!done.has(p)&&!skipped(byId[p])).map(p=>`${byId[p].n}. ${byId[p].fr}`).join(", "))}</p>`:""}
    <section class="long"><h3>${S.explanation}</h3>${md(LONG[t.id])}</section>
    <section><h3>${S.examples}</h3><div class="ex">${t.e.map(e=>`<div><div class="f">${esc(e[0])}</div><div class="u">${esc(e[1])}</div></div>`).join("")}</div></section>
    <section><h3>${S.trap}</h3><div class="trap"><div class="b"><span>✗</span><s>${esc(t.x[0])}</s></div><div class="g"><span>✓</span><span>${esc(t.x[1])}</span></div><p>${esc(t.x[2])}</p></div></section>
    <section class="cheat"><h3>${S.cheat}</h3><ul>${t.r.map(r=>`<li>${r}</li>`).join("")}</ul></section>
    <section><div class="ex-head"><h3>${S.exChoose}</h3><span class="score" id="score"></span></div>${qs}</section>
    <section><h3>${S.fixTitle}</h3><p class="why">${S.fixHint}${STRICT.includes(t.id)?S.fixHintSpaces:""}</p>${fx}
      <button type="button" class="btn sm" id="resetEx" style="align-self:flex-start">${S.redo}</button></section>
    <section><h3>${S.links}</h3>
      <p class="why">${S.linksText}</p>
      <div class="rel"><span class="label">${S.dependsLabel}</span>
        ${t.pre.length?t.pre.map(id=>`<div class="rel-row">${chip(id)}${done.has(id)?`<span class="tag ok">${S.learned}</span>`:`<span class="tag">${S.notYet}</span>`}<p>${why(t.id,id)}</p></div>`).join(""):`<p class="why">${S.nothingBefore}</p>`}
      </div>
      <div class="rel"><span class="label">${S.usedIn}</span>
        ${t.next.length?t.next.map(id=>`<div class="rel-row">${chip(id)}<p>${why(id,t.id)}</p></div>`).join(""):`<p class="why">${S.lastInBranch}</p>`}
      </div>
    </section>
    <div class="pn-actions">
      <button type="button" class="btn ${done.has(t.id)?"done-on":"primary"}" id="toggleDone">${done.has(t.id)?S.doneOn:S.markDone}</button>
      ${afterTopic(t)?`<button type="button" class="btn" id="goNext">${S.nextOnRoute(afterTopic(t).n,afterTopic(t).fr)}</button>`:""}
      <button type="button" class="btn" id="openGloss">${S.glossary}</button>
    </div>`;
  P.querySelectorAll(".q").forEach(qd=>{
    const qi=+qd.dataset.q, q=t.q[qi];
    const apply=oi=>{
      qd.querySelectorAll(".opt").forEach(x=>{ x.disabled=true; if(+x.dataset.o===q[2]) x.classList.add("right"); if(+x.dataset.o===oi && oi!==q[2]) x.classList.add("wrong"); });
      const w=qd.querySelector(".why"); w.hidden=false; w.textContent=(oi===q[2]?S.yes:S.no)+q[3];
    };
    if(a.q[qi]!==undefined) apply(a.q[qi]);
    qd.querySelectorAll(".opt").forEach(b=>b.addEventListener("click",()=>{
      if(a.q[qi]!==undefined) return;
      a.q[qi]=+b.dataset.o; apply(a.q[qi]); updScore(t);
    }));
  });
  P.querySelectorAll(".fix").forEach(fd=>{
    const ci=+fd.dataset.c, c=t.c[ci], inp=fd.querySelector("input"), w=fd.querySelector(".why");
    const strict=STRICT.includes(t.id);
    const mark=()=>{
      const s=a.c[ci]; if(!s) return;
      inp.classList.toggle("ok",s.ok); inp.classList.toggle("no",!s.ok && !s.shown);
      w.hidden=false;
      if(s.shown){ w.innerHTML=`${S.answer} <span class="fr">${esc(c[1])}</span>. ${esc(c[2])}`; }
      else if(s.ok){ w.textContent=S.correct+c[2]; }
      else { w.textContent=S.hint+c[2]; }
    };
    mark();
    const check=()=>{
      const prev=a.c[ci]||{};
      const ok=norm(inp.value,strict)===norm(c[1],strict);
      a.c[ci]={v:inp.value, ok:ok && !prev.shown, shown:!!prev.shown && !ok, tried:true};
      if(ok && prev.shown) a.c[ci].shown=false, a.c[ci].late=true;
      mark(); updScore(t);
    };
    fd.querySelector('[data-act="check"]').addEventListener("click",check);
    inp.addEventListener("keydown",e=>{ if(e.key==="Enter"){ e.preventDefault(); check(); } });
    inp.addEventListener("input",()=>{ if(a.c[ci]) a.c[ci].v=inp.value; });
    fd.querySelector('[data-act="show"]').addEventListener("click",()=>{
      a.c[ci]={v:inp.value, ok:false, shown:true, tried:true}; mark(); updScore(t);
    });
  });
  document.getElementById("openGloss").addEventListener("click",()=>{ closeDrawer(); const g=document.getElementById("gloss"); g.open=true; g.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"}); });
  document.getElementById("resetEx").addEventListener("click",()=>{ delete A[t.id]; renderPanel(); updateTimerUI(); });
  updScore(t);
  P.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>select(b.dataset.go,true)));
  document.getElementById("toggleDone").addEventListener("click",()=>{
    done.has(t.id)?done.delete(t.id):done.add(t.id); save(); renderAll();
  });
  const gn=document.getElementById("goNext");
  if(gn) gn.addEventListener("click",()=>{ const n=afterTopic(t); if(n) select(n.id,true); });
}
function renderRoad(){
  const ol=document.getElementById("phases"); ol.innerHTML="";
  PHASES.forEach(ph=>{
    const ts=ORDER.filter(t=>t.p===ph.n), n=ts.filter(t=>done.has(t.id)).length;
    const li=document.createElement("li");
    li.className="phase"+(n===ts.length?" complete":"");
    li.innerHTML=`<div class="ph-rail"><div class="ph-badge">${ph.n}</div></div>
      <div class="ph-body">
        <div class="ph-head"><h3>${ph.name}</h3>${ph.n<settings.start?`<span class="ph-skip">${S.skippedInPlan}</span>`:""}<span class="dur">${phDur(ph)} · ${n}/${ts.length} · ${S.spent} <span data-ph="${ph.n}">0 ${S.min}</span></span></div>
        <p class="ph-goal">${ph.goal}</p>
        <div class="ph-bar"><i style="width:${n/ts.length*100}%"></i></div>
        <div class="chips">${ts.map(t=>chip(t.id)).join("")}</div>
        <div class="task"><span class="label">${S.phaseTask}</span>${ph.task}</div>
      </div>`;
    li.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>select(b.dataset.go,true)));
    ol.appendChild(li);
  });
}
function renderNow(){
  const box=document.getElementById("now"), rec=nextTopic();
  const how=`<div class="how">${S.howHtml.map(([b,t])=>`<div><b>${b}</b>${t}</div>`).join("")}</div>`;
  if(!rec){ box.innerHTML=`<div class="now-main"><span class="label">${S.routeDoneLabel}</span><h2>${S.routeDoneTitle}</h2><p>${S.routeDoneText}</p></div>${how}`; return; }
  const ph=PHASES[rec.p-1];
  const pre=rec.pre.map(id=>byId[id].fr), opens=rec.next.map(id=>byId[id].fr);
  const nexts=[]; let x=rec;
  { const R=routeOrder(); let i=R.indexOf(rec); while(nexts.length<3){ i++; if(i>=R.length) break; if(!done.has(R[i].id)) nexts.push(R[i]); } }
  box.innerHTML=`<div class="now-main">
      <span class="label">${S.nowLabel(rec.n,rec.p,ph.name)}</span>
      <h2>${rec.t}<small>${DOM[rec.d].gloss}</small></h2>
      <p>${rec.s}</p>
      <p>${rec.pre.length?`${S.whyNow}${rec.pre.map(id=>S.whyItem(byId[id].fr,why(rec.id,id))).join(" ")}`:S.firstTopic}</p>
      <div class="row"><button type="button" class="btn primary" data-go="${rec.id}">${S.openTopic}</button></div>
      <p>${S.pace(settings.hours,wk(remainingHours().hours))} <button type="button" class="linkbtn" data-open-plan>${S.changePlan}</button></p>
    </div>
    <div class="now-side"><span class="label">${S.thenOnRoute}</span>
      <ol class="now-next">${nexts.map(n=>`<li><button type="button" data-go="${n.id}" style="--c:${col(n.d)}"><span class="k">${n.n}</span><span class="f">${n.fr}<small>${n.gloss}</small></span><span class="d"></span></button></li>`).join("")||`<li class="why">${S.lastTopic}</li>`}</ol>
    </div>${how}`;
  box.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>select(b.dataset.go,true)));
  box.querySelectorAll("[data-open-plan]").forEach(b=>b.addEventListener("click",openPlan));
}
function openPlan(){ const p=document.getElementById("plan"); p.open=true; p.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"}); }
const fmtDate=d=>d.toLocaleDateString(S.locale,{day:"numeric",month:"long",year:"numeric"});
function renderPlan(){
  const {left,hours}=remainingHours(), w=wk(hours);
  const end=new Date(); end.setDate(end.getDate()+w*7);
  const total=T.length*H_TOPIC+PHASES.length*H_TASK;
  let html=`<span class="label">${S.calc}</span><div class="big">${S.weeks(w)}</div>
    <p>${S.calcLeft(`${left} ${S.topics(left)}`,Math.round(hours),settings.hours,fmtDate(end))}</p>
    <p>${S.calcEstimate(H_TOPIC,H_TASK)}</p>`;
  if(settings.deadline){
    const dl=new Date(settings.deadline+"T23:59:59"), days=(dl-new Date())/864e5;
    if(days<=0) html+=`<p class="warn">${S.deadlinePassed}</p>`;
    else { const need=hours/(days/7); html+=`<p class="${need>settings.hours?"warn":""}">${S.deadlineNeed(fmtDate(dl),String(need<1?need.toFixed(1):Math.ceil(need)),need>settings.hours)}</p>`; }
  }
  document.getElementById("planCalc").innerHTML=html;
  document.getElementById("planSum").textContent=S.planSum(settings.hours,settings.daily,settings.start,w);
  const rd=document.getElementById("roadDur");
  if(rd) rd.textContent=S.roadDur(total,settings.hours,wk(total));
}
function initPlan(){
  const h=document.getElementById("setHours"), d=document.getElementById("setDaily"), st=document.getElementById("setStart"), dl=document.getElementById("setDeadline");
  st.innerHTML=PHASES.map(ph=>`<option value="${ph.n}">${ph.n} — ${ph.name}${ph.n===1?S.fromStart:""}</option>`).join("");
  h.value=settings.hours; d.value=settings.daily; st.value=settings.start; dl.value=settings.deadline||"";
  const num=(v,min,max,def)=>{ const x=parseFloat(String(v).replace(",",".")); return isFinite(x)?Math.min(max,Math.max(min,x)):def; };
  h.addEventListener("change",()=>{ settings.hours=num(h.value,1,40,DEF_SET.hours); h.value=settings.hours; saveSettings(); renderAll(); });
  d.addEventListener("change",()=>{ settings.daily=Math.round(num(d.value,5,480,DEF_SET.daily)); d.value=settings.daily; saveSettings(); updateStats(); renderPlan(); });
  st.addEventListener("change",()=>{ settings.start=+st.value||1; saveSettings(); const n=nextTopic(); if(n) current=n.id; renderAll(); });
  dl.addEventListener("change",()=>{ settings.deadline=dl.value||""; saveSettings(); renderPlan(); });
  const p=document.getElementById("plan");
  if(Store.get("plan-open",0)) p.open=true;
  p.addEventListener("toggle",()=>Store.set("plan-open",p.open?1:0));
}
function renderAll(){ refreshMap(); renderNow(); renderPlan(); renderStrip(); renderPanel(); renderRoad(); updateStats(); updateTimerUI(); }

/* ---------- timer ---------- */
const IDLE=30*60;
let tm={topics:{},days:{}};
{ const r=Store.get("time-v1",null); if(r&&r.topics&&r.days) tm=r; }
function saveT(){ Store.set("time-v1",tm); }
let sinceAct=0, running=false, lastTick=0, session=0, tickN=0, tickId=null, lastAct=Date.now(), autoPaused=false;
const dk=(d=new Date())=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
function fmtClock(s){ s=Math.floor(s); const h=Math.floor(s/3600), m=Math.floor(s%3600/60), x=s%60; return h?`${h}:${String(m).padStart(2,"0")}:${String(x).padStart(2,"0")}`:`${m}:${String(x).padStart(2,"0")}`; }
function fmtDur(s){ const m=Math.floor(s/60); if(m<1) return s>=1?S.lt1:`0 ${S.min}`; const h=Math.floor(m/60); return h?`${h} ${S.hour} ${String(m%60).padStart(2,"0")} ${S.min}`:`${m} ${S.min}`; }
function addTime(dt){
  tm.topics[current]=Math.max(0,(tm.topics[current]||0)+dt);
  const k=dk(); tm.days[k]=Math.max(0,(tm.days[k]||0)+dt);
  session=Math.max(0,session+dt);
}
function tick(){
  if(!running) return;
  const now=Date.now(); let dt=(now-lastTick)/1000; lastTick=now;
  if(dt<0||dt>90) dt=0;
  addTime(dt); sinceAct+=dt;
  if((now-lastAct)/1000>IDLE){ addTime(-Math.min(sinceAct, session)); sinceAct=0; pauseT(true); return; }
  if(++tickN%10===0){ saveT(); updateStats(); }
  updateTimerUI();
}
function startT(){ running=true; autoPaused=false; lastTick=Date.now(); lastAct=Date.now(); clearInterval(tickId); tickId=setInterval(tick,1000); updateTimerUI(); }
function pauseT(idle){ if(!running) return; if(!idle) tick(); running=false; clearInterval(tickId); autoPaused=!!idle; saveT(); updateStats(); updateTimerUI(); }
const ICON_PLAY='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg>';
const ICON_PAUSE='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h4.5v16H6zM13.5 4H18v16h-4.5z"/></svg>';
function updateTimerUI(){
  const box=document.getElementById("tmr"), btn=document.getElementById("tmrBtn");
  box.classList.toggle("on",running);
  btn.innerHTML=running?ICON_PAUSE:ICON_PLAY;
  btn.setAttribute("aria-label",running?S.pause:S.startTimer);
  document.getElementById("tmrTime").textContent=fmtClock(session);
  const t=byId[current];
  const sub = running ? S.topicLabel(t.fr) : autoPaused ? S.autoPaused : session>0 ? S.paused : S.tapToStart;
  document.getElementById("tmrSub").textContent = sub; box.title = sub;
  const tt=document.getElementById("topicTime"); if(tt) tt.textContent=S.perTopic(fmtDur(tm.topics[current]||0));
  document.getElementById("stToday").textContent=fmtDur(tm.days[dk()]||0);
  { const g=document.getElementById("stGoal"), td=(tm.days[dk()]||0)/60; g.textContent=td>=settings.daily?S.goalDone(settings.daily):S.goalOf(settings.daily); }
}
const WD=S.weekdays;
function updateStats(){
  const today=new Date(); let week=0; const rows=[];
  for(let i=6;i>=0;i--){ const d=new Date(today); d.setDate(d.getDate()-i); const v=tm.days[dk(d)]||0; week+=v; rows.push([d,v,i===0]); }
  const total=Object.values(tm.days).reduce((s,v)=>s+v,0);
  document.getElementById("stToday").textContent=fmtDur(tm.days[dk()]||0);
  { const g=document.getElementById("stGoal"), td=(tm.days[dk()]||0)/60; g.textContent=td>=settings.daily?S.goalDone(settings.daily):S.goalOf(settings.daily); }
  document.getElementById("stWeek").textContent=fmtDur(week);
  document.getElementById("stTotal").textContent=fmtDur(total);
  const mx=Math.max(60*30,...rows.map(r=>r[1]));
  document.getElementById("days").innerHTML=rows.map(([d,v,td])=>`<span class="${td?"td":""}">${WD[d.getDay()]}</span><span class="bar"><i style="width:${v/mx*100}%"></i></span><span class="v${td?" td":""}">${fmtDur(v)}</span>`).join("");
  document.querySelectorAll("[data-ph]").forEach(s=>{ const n=+s.dataset.ph; s.textContent=fmtDur(T.filter(t=>t.p===n).reduce((a,t)=>a+(tm.topics[t.id]||0),0)); });
}
document.getElementById("tmrBtn").addEventListener("click",()=>running?pauseT(false):startT());
["pointerdown","keydown","input","wheel","touchstart"].forEach(ev=>window.addEventListener(ev,()=>{ lastAct=Date.now(); sinceAct=0; },{passive:true}));
window.addEventListener("scroll",()=>{ lastAct=Date.now(); sinceAct=0; },{passive:true});
document.addEventListener("visibilitychange",()=>{ if(running) tick(); saveT(); });
window.addEventListener("pagehide",()=>{ if(running) tick(); saveT(); });

/* ---------- topic drawer ----------
   The topic panel opens in a side drawer over the page, so the map can use the full width. */
const drawer=document.getElementById("drawer"), sheet=document.getElementById("drawerSheet");
let lastFocus=null, hideTimer=null;
const reduceMotion=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;
function openDrawer(){
  clearTimeout(hideTimer);
  if(!drawer.classList.contains("open")){
    lastFocus=document.activeElement;
    drawer.hidden=false;
    document.documentElement.classList.add("drawer-lock");
    requestAnimationFrame(()=>drawer.classList.add("open"));
    drawer.querySelector(".drawer-close").focus({preventScroll:true});
  }
  sheet.scrollTop=0;
}
function closeDrawer(){
  if(drawer.hidden) return;
  drawer.classList.remove("open");
  document.documentElement.classList.remove("drawer-lock");
  hideTimer=setTimeout(()=>{ drawer.hidden=true; }, reduceMotion()?0:260);
  try{ if(location.hash) history.replaceState(null,"",location.pathname+location.search); }catch(e){}
  if(lastFocus && document.contains(lastFocus)) lastFocus.focus({preventScroll:true});
}
drawer.querySelectorAll("[data-close]").forEach(b=>b.addEventListener("click",closeDrawer));
document.addEventListener("keydown",e=>{
  if(drawer.hidden) return;
  if(e.key==="Escape"){ e.preventDefault(); closeDrawer(); return; }
  if(e.key==="Tab"){ /* keep focus inside the open drawer */
    const f=[...sheet.querySelectorAll('button:not([disabled]),input:not([disabled]),a[href],[tabindex]:not([tabindex="-1"])')].filter(x=>x.offsetParent!==null);
    if(!f.length) return;
    const first=f[0], last=f[f.length-1];
    if(e.shiftKey && document.activeElement===first){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey && document.activeElement===last){ e.preventDefault(); first.focus(); }
  }
});

/* Selects a topic; with open=true also shows it in the drawer. */
function select(id,open){
  if(!byId[id]) return;
  if(running) tick();
  current=id;
  if(open){ try{ if(location.hash!=="#t-"+id.toLowerCase()) history.replaceState(null,"","#t-"+id.toLowerCase()); }catch(e){} }
  renderAll();
  if(open) openDrawer();
}
function fromHash(){ const m=location.hash.match(/^#t-([a-z]\d)$/i); return m?m[1].toUpperCase():null; }
window.addEventListener("hashchange",()=>{ const h=fromHash(); if(h) select(h,true); });
(()=>{ const g=document.getElementById("gloss");
  if(Store.get("gloss",0)) g.open=true;
  g.addEventListener("toggle",()=>Store.set("gloss",g.open?1:0)); })();
document.getElementById("nextBtn").addEventListener("click",()=>{ const n=nextTopic(); if(n) select(n.id,true); });
buildMap();
initPlan();
current = fromHash() || (nextTopic()||ORDER[0]).id;
renderAll();
if(fromHash()) openDrawer();
}
