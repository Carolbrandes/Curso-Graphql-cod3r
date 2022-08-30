const db = require('../../config/db')

module.exports = {
    async perfis() {
        return await db('perfis')
    },
    async perfil(_, { filtro }) {
        const {id, nome} = filtro
        return id ? await db('perfis').where({id}).first() : await db('perfis').where({nome}).first()
    }
}