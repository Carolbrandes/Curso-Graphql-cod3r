const db = require('../../config/db')

module.exports = {
    async novoUsuario(_, { dados }) {
        const {nome, email, senha, perfis} = dados
        const [id] = await db('usuarios').insert({nome, email, senha})
        console.log(id)

       // TODO: verificar se o perfil existe antes de inserir em usuarios_perfis
        perfis.forEach(async (perfil) => {
            await db('usuarios_perfis').insert({usuario_id: id, perfil_id: perfil.id})
        })

        return {nome, email, senha, perfis}
        
    },
    
    async excluirUsuario(_, { filtro }) {
        const excluir =  async (prop) => {
            const user = await db('usuarios').where(prop).first()
            await db('usuarios_perfis').where({usuario_id: user.id}).delete()
            await db('usuarios').where(prop).delete()
            return user
        }
        const {id, email} = filtro
          
        return id ? excluir({id}) : excluir({email})
         
    },
    async alterarUsuario(_, { filtro, dados }) {
        console.log("filtro =>", filtro)
        console.log("dados =>", dados)
        const {id, email} = filtro

        const novosDados = {
           nome: dados.nome,
           email: dados.email,
           senha: dados.senha 
        }

        if(dados.perfis){
         
            dados.perfis.forEach(async p => {
                await db('usuarios_perfis').where({usuario_id: id}).delete()
                await db('usuarios_perfis').insert({usuario_id: id, perfil_id: p.id})
              })    
         
        }

       
        const alterar = async (prop) => {
            console.log("dados =>", novosDados)
            await db('usuarios').where(prop).update(novosDados)
            return await db('usuarios').where(prop).first()
        }
            
        return id ? alterar({id}) : alterar({email})
        
    }
}