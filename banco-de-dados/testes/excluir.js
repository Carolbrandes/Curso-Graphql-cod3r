const db = require("../config/db")

// ele vai retornar qts registros foram excluidos do bd
db("usuarios").where({id: 1}).delete().then(res => console.log(res)).finally(() => db.detroy())