drop policy if exists "portfolio admin select" on public.portfolio_sections;
drop policy if exists "portfolio admin insert" on public.portfolio_sections;
drop policy if exists "portfolio admin update" on public.portfolio_sections;
drop policy if exists "portfolio admin delete" on public.portfolio_sections;
drop policy if exists "portfolio admin published insert" on public.portfolio_published;
drop policy if exists "portfolio admin published update" on public.portfolio_published;
drop policy if exists "portfolio admin published delete" on public.portfolio_published;
drop policy if exists "portfolio admin media insert" on storage.objects;
drop policy if exists "portfolio admin media update" on storage.objects;
drop policy if exists "portfolio admin media delete" on storage.objects;

create policy "portfolio admin select" on public.portfolio_sections for select to authenticated
using (((select auth.jwt()) ->> 'email') = 'info.keyno@gmail.com');
create policy "portfolio admin insert" on public.portfolio_sections for insert to authenticated
with check (((select auth.jwt()) ->> 'email') = 'info.keyno@gmail.com');
create policy "portfolio admin update" on public.portfolio_sections for update to authenticated
using (((select auth.jwt()) ->> 'email') = 'info.keyno@gmail.com')
with check (((select auth.jwt()) ->> 'email') = 'info.keyno@gmail.com');
create policy "portfolio admin delete" on public.portfolio_sections for delete to authenticated
using (((select auth.jwt()) ->> 'email') = 'info.keyno@gmail.com');

create policy "portfolio admin published insert" on public.portfolio_published for insert to authenticated
with check (((select auth.jwt()) ->> 'email') = 'info.keyno@gmail.com');
create policy "portfolio admin published update" on public.portfolio_published for update to authenticated
using (((select auth.jwt()) ->> 'email') = 'info.keyno@gmail.com')
with check (((select auth.jwt()) ->> 'email') = 'info.keyno@gmail.com');
create policy "portfolio admin published delete" on public.portfolio_published for delete to authenticated
using (((select auth.jwt()) ->> 'email') = 'info.keyno@gmail.com');

create policy "portfolio admin media insert" on storage.objects for insert to authenticated
with check (bucket_id = 'portfolio-media' and ((select auth.jwt()) ->> 'email') = 'info.keyno@gmail.com');
create policy "portfolio admin media update" on storage.objects for update to authenticated
using (bucket_id = 'portfolio-media' and ((select auth.jwt()) ->> 'email') = 'info.keyno@gmail.com')
with check (bucket_id = 'portfolio-media' and ((select auth.jwt()) ->> 'email') = 'info.keyno@gmail.com');
create policy "portfolio admin media delete" on storage.objects for delete to authenticated
using (bucket_id = 'portfolio-media' and ((select auth.jwt()) ->> 'email') = 'info.keyno@gmail.com');

