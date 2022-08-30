-- seleciona todas as colunas da tabela estado
select * from estados;

select nome, sigla from estados;

-- podemos usar um label
select sigla, nome as 'Nome do Estado' from estados;

select sigla, nome as 'Nome do Estado' from estados where regiao='Sul';

select nome, regiao, populacao from estados where populacao >= 10 order by populacao;

select nome, regiao, populacao from estados where populacao >= 10 order by populacao desc;