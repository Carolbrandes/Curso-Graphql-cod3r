/**
 o up evolui banco de dados
 */
exports.up = function(knex) {
  return knex.schema.createTable('perfis', table => {
    table.increments('id').primary()
    table.string('nome').notNull().unique()
    table.string('rotulo').notNull()
  }).then(function(){
    return knex('perfis').insert([
        {nome: 'comum', rotulo: 'Comum'},
        {nome: 'admin', rotulo: 'Administrador'},
        {nome: 'master', rotulo: 'Master'}
    ])
  })
};

/**
 ocorre o inverso do que ocorre no up
 */
exports.down = function(knex) {
  return knex.schema.dropTable('perfis')
};
