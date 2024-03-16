import express from 'express';
import './database.js';
import Task from './models/task.js';
const app = express();

// Rutas de Express
app.get('/', async (req, res) => {
  res.send('hola')
});

app.get('/tasks', async (req, res) => {
  res.json({hola: 'mundo'})
})

app.post('/tasks', async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json('Datos guardados correctamente');
})

// configuracion
app.use(express.json());

// Rutas de la base de datos (no están implementadas en este código)

app.listen(3000, () => {
  console.log(`Servidor iniciado en el puerto 3000`);
});
