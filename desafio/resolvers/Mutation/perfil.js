const db = require("../../config/db");

// eu posso pegar a funcao da querie para fazer as buscas no bd

module.exports = {
  async novoPerfil(_, { dados }) {
    const { nome, rotulo } = dados;
    await db("perfis").insert({ nome, rotulo });
    return await db("perfis").where({ nome }).first();
  },
  async excluirPerfil(_, { filtro }) {
    const { id, nome } = filtro;
    const perfilDeletado = await db('perfis').where({id}).first()

   await db('usuarios_perfis').where({perfil_id: id}).delete()

   id ? await db("perfis").where({id}).delete() : await db("perfis").where({nome}).delete();

    return perfilDeletado
  },
  async alterarPerfil(_, { filtro, dados }) {
    const { id, nome } = filtro;
    
    id ? await db("perfis").where({id}).update(dados) : await db("perfis").where({nome}).update(dados)
   
    return await db('perfis').where({id}).first()
  },
};
