/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/Listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma inofrmação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de Parâmetros:
   * 
   * Query Params: parâmetros nomeados enviados na rota após '?' (filtros, paginação).
   * Route  Params: parâmetros utilizasos para identificar recursos.
   * Request Body: corpo da requisição utilizado para criar/alterar recursos.
   */

   /**
    * Banco de Dados:
    * 
    * SQL: MySQL, SQlite, PostgreSQL, Oracle, Microsoft SQL Server, etc.
    * NoSQL: MongoDB, CouchDB, etc.
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     * Knexjs
     */

const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create);

module.exports = routes;
