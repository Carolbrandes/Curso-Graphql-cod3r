const db = require("../config/db")

// INSERT 1
// const novoPerfil = {
//     nome: 'visitante',
//     rotulo: 'Visitante'
// }

// db('perfis').insert(novoPerfil)
// .then(res => console.log(res))
// .catch(err => console.log(err.sqlMessage))
// .finally(() => db.destroy())

//INSERT 2
const perfilSU = {
    nome: 'root' + Math.random(),
    rotulo: 'Super Usuário'
}

const insertPerfil = async () => {
    try{
        const perfilInserido = await db.insert(perfilSU).into('perfis')
        console.log(perfilInserido)
    } catch(e){
        console.log(e)
    } finally{
        db.destroy()
    }
}

insertPerfil()
