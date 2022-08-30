select * from cidades c inner join prefeitos p on c.id=p.cidade_id

select * from cidades c right join prefeitos p on c.id=p.cidade_id

-- o full join nao e suportado pelo mysql mas podemos resolver dessa maneira 
select * from cidades c right join prefeitos p on c.id=p.cidade_id
union
select * from cidades c left join prefeitos p on c.id=p.cidade_id