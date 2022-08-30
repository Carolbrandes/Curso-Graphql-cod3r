const db = require('../config/db')

const novoUsuario = {
    nome: "Pedro",
    email: "pedro@empresa.com.br",
    senha: "12345678"
}

async function exercicio(){
   try{
    const {email} = novoUsuario
    // await db('usuarios').insert(novoUsuario)
    await db('usuarios').where({email}).update({nome: 'Pedro Garcia'})
    const usuario = await db('usuarios').where({email})
    console.log(usuario)
   }catch(e){
    console.log(e)
   }finally{
    db.destroy()
   }
}

exercicio()