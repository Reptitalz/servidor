import mongoose from 'mongoose';

(async () => {
  const db = await mongoose.connect('mongodb://localhost/reptitalz');
  console.log('Conexión exitosa a la base de datos ' + db.connection.name);
})();