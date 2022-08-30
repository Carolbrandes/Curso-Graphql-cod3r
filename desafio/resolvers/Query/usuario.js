const db = require('../../config/db')

module.exports = {
    async usuarios() {
        return await db('usuarios')
    },
    async usuario(_, { filtro }) {
        const {id, email} = filtro
        return id ? await db('usuarios').where({id}).first() : await db('usuarios').where({email}).first()
    },
}