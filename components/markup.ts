// Static page markup for a grammar map, built from the interface dictionary.
// Dynamic parts (map SVG, panel, route, plan calculations, timer) are filled in by lib/grammar-app.js.

import type { Dict } from "@/lib/i18n/ui";

export function buildMarkup(m: Dict["map"], glossaryHtml: string): string {
  return `<div class="wrap">
  <header class="hero">
    <div class="title">
      <span class="badge"><i></i>${m.badge}</span>
      <h1>${m.titleHtml}</h1>
      <p>${m.lead}</p>
    </div>
    <div class="prog card">
      <div class="prog-top"><span class="label">${m.progDone}</span><span class="prog-num" id="progNum">0 / 30</span><button class="btn primary" id="nextBtn" type="button">${m.nextBtn}</button></div>
      <div class="strip" id="strip" aria-label="${m.stripAria}"></div>
      <div class="stats"><span>${m.statToday} <b id="stToday">0</b> <span id="stGoal"></span></span><span>${m.statWeek} <b id="stWeek">0</b></span><span>${m.statTotal} <b id="stTotal">0</b></span></div>
    </div>
  </header>
  <details class="gloss" id="gloss">
    <summary><b>${m.glossTitle}</b><span>${m.glossSub}</span></summary>
    ${glossaryHtml}
  </details>

  <details class="gloss" id="plan">
    <summary><b>${m.planTitle}</b><span id="planSum"></span></summary>
    <div class="plan-body">
      <div class="plan-form">
        <label for="setHours"><span>${m.planHours}</span><input type="number" id="setHours" min="1" max="40" step="0.5" inputmode="decimal"></label>
        <label for="setDaily"><span>${m.planDaily}</span><input type="number" id="setDaily" min="5" max="480" step="5" inputmode="numeric"></label>
        <label for="setStart"><span>${m.planStart}</span><select id="setStart"></select></label>
        <label for="setDeadline"><span>${m.planDeadline}</span><input type="date" id="setDeadline"></label>
      </div>
      <div class="plan-calc" id="planCalc"></div>
      <div class="plan-data">
        <h3>${m.dataTitle}</h3>
        <p>${m.dataText}</p>
        <div class="fix-actions">
          <button type="button" class="btn sm" id="ioCopy">${m.dataCopy}</button>
          <button type="button" class="btn sm" id="ioLoad">${m.dataLoad}</button>
          <button type="button" class="btn sm" id="ioReset">${m.dataReset}</button>
          <span class="io-confirm" id="ioConfirm" hidden>${m.dataConfirm} <button type="button" class="btn sm danger" id="ioResetYes">${m.dataYes}</button><button type="button" class="btn sm" id="ioResetNo">${m.dataNo}</button></span>
        </div>
        <textarea id="ioText" rows="3" spellcheck="false" placeholder="${m.dataPlaceholder}" aria-label="${m.dataAria}"></textarea>
        <p class="io-msg" id="ioMsg" aria-live="polite"></p>
      </div>
    </div>
  </details>

  <section class="now" id="now" aria-label="${m.nowAria}"></section>

  <div class="sec-head" id="map-section">
    <span class="eyebrow">${m.mapEyebrow}</span>
    <h2>${m.mapTitleHtml}</h2>
    <p>${m.mapLead}</p>
  </div>

  <div class="main">
    <div class="mapcard">
      <div class="maphead">
        <span class="label">${m.mapLabel}</span>
        <div class="legend">
          <span><i class="lg-dot"></i>${m.legendTopic}</span>
          <span><i class="lg-dot done"></i>${m.legendDone}</span>
          <span><i class="lg-dot ready"></i>${m.legendNext}</span><span><b style="font-family:var(--f-mono);font-size:11px">1–30</b> ${m.legendOrder}</span>
          <span><i class="lg-dash"></i>${m.legendDash}</span>
        </div>
      </div>
      <div class="mapscroll"><svg id="map" role="group" aria-label="${m.mapAria}"></svg></div>
      <div class="maphint">${m.mapHint}</div>
    </div>
    <aside class="panel" id="panel" aria-live="polite"></aside>
  </div>

  <section class="road" id="road">
    <div class="road-intro">
      <div>
        <span class="eyebrow">${m.roadEyebrow}</span>
        <h2>${m.roadTitleHtml}</h2>
        <p><span id="roadDur"></span> ${m.roadLead}</p>
      </div>
    </div>
    <ol class="phases" id="phases"></ol>
  </section>

  <div class="sec-head" id="practice">
    <span class="eyebrow">${m.practiceEyebrow}</span>
    <h2>${m.practiceTitleHtml}</h2>
  </div>

  <div class="extra">
    <div class="box">
      <h3>${m.howTitle}</h3>
      <ol>
        ${m.howSteps.map((s) => `<li>${s}</li>`).join("\n        ")}
      </ol>
    </div>
    <div class="box">
      <h3>${m.weekTitle}</h3>
      <ul>
        ${m.weekItemsHtml.map((s) => `<li>${s}</li>`).join("\n        ")}
      </ul>
      <p>${m.weekNote}</p>
    </div>
    <div class="box">
      <h3>${m.timeTitle}</h3>
      <div class="days" id="days"></div>
      <p>${m.timeNote}</p>
    </div>
    <div class="box">
      <h3>${m.sourcesTitle}</h3>
      <ul>
        <li><a href="https://apprendre.tv5monde.com/fr" target="_blank" rel="noopener">TV5Monde Apprendre</a> — ${m.sources.tv5}</li>
        <li><a href="https://www.projet-voltaire.fr/" target="_blank" rel="noopener">Projet Voltaire</a> — ${m.sources.voltaire}</li>
        <li><a href="https://bescherelle.com/" target="_blank" rel="noopener">Bescherelle</a> — ${m.sources.bescherelle}</li>
        <li><a href="https://www.lepointdufle.net/" target="_blank" rel="noopener">Le point du FLE</a> — ${m.sources.fle}</li>
      </ul>
    </div>
  </div>
</div>

<div class="tmr" id="tmr" role="region" aria-label="${m.timerAria}">
  <div class="tmr-txt">
    <div class="tmr-time"><i></i><span id="tmrTime">0:00</span></div>
    <div class="tmr-sub" id="tmrSub"></div>
  </div>
  <button type="button" class="tmr-btn" id="tmrBtn"></button>
</div>
`;
}
