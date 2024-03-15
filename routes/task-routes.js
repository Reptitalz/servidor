import { Router } from 'express';
import { Task } from '../models/task';

const router = Router();

router.get('/task', (req, res) => {
  res.send('hola popo')
})

router.post('/task', (req, res) => {
  const task = new Task(req.body);
  task.save()
  res.json('salvaste los datos')
})

export default router;