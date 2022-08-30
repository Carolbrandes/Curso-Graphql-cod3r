-- vai agrupar por regiao, vai me dar o total da populacao de cada regiao
select 
    regiao as 'Região',
    sum(populacao) as 'Total'
from `estados`
group by regiao
order by Total desc

-- para ter a populacao total
select sum(populacao) as Total
from estados


-- avg: funcao media