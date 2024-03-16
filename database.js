import mongoose from 'mongoose';

(async () => {
  const db = await mongoose.connect("mongodb://Localhost/reptitalz", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Conexión exitosa a la base de datos ' + db.connection.name);
})();