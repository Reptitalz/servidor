import mongoose from 'mongoose';

(async () => {
  try {
    const db = await mongoose.connect("mongodb://127.0.0.1/reptitalz");
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
})();
