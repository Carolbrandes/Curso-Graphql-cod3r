const db = require('../config/db')

// db('perfis')
// .then(res => console.log(res))

//depois do limit podemos colocar tb .offset(numero) q ele pode comecar a trazer a partir de um determinado indice, o primeiro indice comeca com 0

// db('perfis').select('nome', 'id').limit(4)
// .then(res => console.log(res))
// .finally(() => db.destroy())


// esse exemplo nao deu certo
// db.select('nome', 'id').from('perfis')
// .then(res => console.log(res))
// .finally(() => db.destroy())


// filtrar linhas no knex
// usando o .first() ele vai retorna o objeto e nao o array com o objeto

db('perfis').where({id: 2}).first().then(res => console.log(res)).finally(() => db.destroy())

// usando o like, os registro que contem a sequencia 'ad'
db('perfis').where('nome', 'like', '%ad%').first().then(res => console.log(res)).finally(() => db.destroy())

db('perfis').whereNot({id: 2}).then(res => console.log(res)).finally(() => db.destroy())


db('perfis').whereIn('id', [1,2,3]).then(res => console.log(res)).finally(() => db.destroy())

