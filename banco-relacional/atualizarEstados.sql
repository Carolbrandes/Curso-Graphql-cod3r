update estados 
set nome = 'Maranhão'
where sigla = 'MA'

select nome from estados where sigla = 'MA'

update `estados`
set nome = 'Paraná', populacao=11.32
where sigla = 'PR'

-- o est e apelido da tabela
select nome from estados est where sigla = 'PR'


-- insercao de estado para excluir depois
-- podemos inserir o id se quisermos
insert into estados (id, nome, sigla, regiao, populacao) values (1000, 'Novo', 'NV', 'Sul', 2.54)