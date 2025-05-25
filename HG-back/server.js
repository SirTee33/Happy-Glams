const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Points to your db.json file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Set the port Render provides or default to 3000
const PORT = process.env.PORT || 3004;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
