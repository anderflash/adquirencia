import * as Koa from 'koa';
var pg  = require('pg');
var app = new Koa();
var config = {
  user: process.env.POSTGRESDB_USERNAME,
  database: process.env.POSTGRESDB_DATABASE,
  password: process.env.POSTGRESDB_PASSWORD,
  host: process.env.POSTGRESDB_URL,
  max: 10,
  idleTimeoutMillis: 30000,
};
var pool = new pg.Pool(config);
var port = process.env.PORT || 8080;
app.use(async (ctx) => {
    ctx.body = 'Hello world';
});

app.listen(port);
