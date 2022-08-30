insert into cidades (nome, area, estado_id)
values ('Campinas', 795, 31)

insert into cidades (nome, area, estado_id)
values ('Niterói', 133.9, 25)

insert into cidades (nome, area, estado_id)
values ('Caruaru', 920.6, (select id from estados where sigla = 'PE'))