// temos assim uma instancia do knex pronta para entao fazermos nossas inserções no banco
const config = require('../knexfile')
module.exports = require('knex')(config)