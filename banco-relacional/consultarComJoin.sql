-- selecione todas as colunas das tabelas estados e cidades
select * from estados e, cidades c
where e.id = c.estado_id;

select 
    e.nome as Estados, 
    c.nome as Cidade,
    regiao as Região 
from 
    estados e, cidades c 
where 
    e.id = c.estado_id;


select
    c.nome as Cidade,
    e.nome as Estados,
    regiao as Região
from `estados` e
inner join cidades c on e.id = c.estado_id
