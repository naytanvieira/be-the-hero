const express = require('express');
const cors = require('cors');
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
* Rotas / Recursos
*/

/*
* Métodos HTTP:
*
* GET: Buscar um Informação do Backend
* POST: Criar um Informação do Backend
* PUT: ALTERAR um Informação do Backend
* DELETE: EXCLUIR um Informação do Backend
*
*/

/*
*Tipos de Query
*
*Query: PAãmetros  nomeados enviados na rota após a "?"(Filtros, Paginação)
*Route Params: Parãmetros utilizados para identificar recursos
Reuest Body: 
*/



app.listen(3333);