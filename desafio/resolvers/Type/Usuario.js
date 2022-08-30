const db = require('../../config/db')

module.exports = {
     perfis(usuario) {
       // consulta no sql -> select p.* from perfis p, usuarios_perfis up where up.perfil_id = p.id and up.usuario_id = 3

       return db('perfis').join('usuarios_perfis', 'perfis.id', 'usuarios_perfis.perfil_id').where({usuario_id: usuario.id})
    }
}