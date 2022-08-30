const db = require('../config/db')
 
async function salvarUsuario(nome, email, senha) {
  //verificação
  const dadosNovoUsuario = { nome, email, senha }
  const usuario = await db('usuarios')
    .where({ email }).first()
 
  if (!usuario) {
    let [id] = await db('usuarios').insert(dadosNovoUsuario)
  } else {
    await db('usuarios')
      .where({ id: usuario.id })
      .update(dadosNovoUsuario)
  }
 
  return db('usuarios')
    .where({ email }).first()
}
 
async function salvarPerfil(nome, rotulo) {
  const dadosNovoPerfil = { nome, rotulo }
 
  const perfil = await db('perfis')
    .where({ nome })
    .first()
  if (!perfil) {
    //cria
    await db('perfis')
      .insert(dadosNovoPerfil)
  } else {
    //atualiza
    await db('perfis')
      .where({ nome })
      .update(dadosNovoPerfil)
  }
 
  return db('perfis').where({ nome }).first()
}
 
async function adicionarPerfis(usuario, ...perfis) {
  for (perfil of perfis) {
    const { qt } = await db('usuarios_perfis')
      .where({ usuario_id: usuario.id })
      .where({ perfil_id: perfil.id })
      .count('* as qt')
      .first()
    if (qt === 0) {
      await db('usuarios_perfis')
        .insert({ usuario_id: usuario.id, perfil_id: perfil.id })
    }
  }
}
 
async function executar() {
  const usuario = await salvarUsuario('Ana Silva Só', 'anaq@esmpraaaesa.com.br', '123456')
  const perfilB = await salvarPerfil('r', 'Pessoala')
  const perfilA = await salvarPerfil('f', 'Financeiroa')
 
  console.log(usuario)
  console.log(perfilA)
  console.log(perfilB)
 
  await adicionarPerfis(usuario, perfilA, perfilB)
}
 
executar()
  .catch(err => console.log(err.sqlMessage))
  .finally(() => db.destroy())