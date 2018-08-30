const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get('/', (req, res) => {
  res.jsonp("hello world");
})

server.use(router);
server.listen(3000, () => {
  console.log('JSON server is running')
})