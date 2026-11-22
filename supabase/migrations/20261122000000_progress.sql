-- Grammar Maps: synced progress for signed-in users (see lib/sync.ts).
-- One row per user and localStorage key, e.g. key "frmap-done-v1", value ["V1","N1"].
-- Run once in the Supabase dashboard (SQL Editor) or with the Supabase CLI.

create table if not exists public.progress (
  user_id    uuid        not null default auth.uid() references auth.users (id) on delete cascade,
  key        text        not null check (key ~ '^(fr|en|uk)map-(done|score|time|mistakes|settings)-v1$'),
  value      jsonb       not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, key)
);

-- Row level security: every user can read and write only their own rows.
alter table public.progress enable row level security;

create policy "progress: read own rows" on public.progress
  for select to authenticated using ((select auth.uid()) = user_id);

create policy "progress: insert own rows" on public.progress
  for insert to authenticated with check ((select auth.uid()) = user_id);

create policy "progress: update own rows" on public.progress
  for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

create policy "progress: delete own rows" on public.progress
  for delete to authenticated using ((select auth.uid()) = user_id);
