import express from 'express';
import { Server as SocketIOServer } from 'socket.io';
import http from 'http';
import indexTask from './routes/task-routes.js';
import './database.js';
const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app); // Pasar la aplicación express al servidor HTTP
const io = new SocketIOServer(server);

// Rutas de Express
app.get('/', async (req, res) => {
  res.send('hola')
});

// configuracion
app.use(express.json());

// Rutas de la base de datos (no están implementadas en este código)
app.use(indexTask);


server.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

io.on('connection', (socket) => {
  console.log(`Nueva conexión establecida con ${socket.id}`);
  socket.on('message', function(data) {
    socket.broadcast.emit('peer-msg', data);
  })
  socket.on('go-private', function(data) {
    socket.broadcast.emit('go-private', data);
  });
  socket.on('disconnect', function(data) {
    socket.broadcast.emit('peer-disconnected', data);
    console.log(`Conexión cerrada con ${socket.id}`);
  });
});
