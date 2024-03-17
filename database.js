import mongoose from 'mongoose';

(async () => {
  const db = await mongoose.connect("mongodb://localhost:27017/reptitalz");
  console.log('Conexión exitosa a la base de datos');
})();