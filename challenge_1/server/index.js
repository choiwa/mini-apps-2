const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data/db.json');
const middlewares = jsonServer.defaults();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('data/db.json')
const db = low(adapter)

server.use(middlewares);

console.log(db.get('events').value());

server.get('/', (req, res) => {
//http://localhost:3000/events?_page=7&_limit=5

  // console.log({body: res.locals.data});
  res.jsonp({
    body: res.locals.data
  });
})

server.use(router);
server.listen(3000, () => {
  console.log('JSON server is running')
})
