const jwt = require('jwt-simple')

module.exports = async ({req}) => {

   // em desenvolvimento, em producao comentar a linha abaixo
   // await require('./simularUsuarioLigado')(req) 
   const auth = req.headers.authorization // vai pegar token
   const token = auth && auth.substring(7)

   let usuario = null
   let admin = false

   if(token){
      try{
         let conteudoToken = jwt.decode(token, process.env.APP_AUTH_SECRET)

         // para gerar uma data precisamos informar os milensegundos, por isso multiplicamos por 1000
         if(new Date(conteudoToken.exp * 1000) > new Date()){
            usuario = conteudoToken
         }
      }catch(e){
         // token invalido
      }
   }

   if(usuario && usuario.perfis){
      admin = usuario.perfis.includes('admin')
   }

   const err = new Error('Acesso negado')

   return {
      usuario,
      admin,
      validarUsuario(){
         if(!usuario) throw err
      },
      validarAdmin(){
         if(!admin) throw err
      },
      validarUsuarioFiltro(filtro){
         if(admin) return

         if(!usuario) throw err

         if(!filtro) throw err

         const {id, email} = filtro

         if(!id && !email) throw err

         if(id && id !== usuario.id) throw err

         if(email && email !== usuario.email) throw err

      }
   }
   

}