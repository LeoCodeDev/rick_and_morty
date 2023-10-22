const server = require('./src/app');
const {conn} = require('./src/db');
const PORT = 3001;

conn
  .sync({ force: false }) // Si cambio a 'true': las tablas se crean desde cero en cada inicio del servidor
  .then(() => {
    console.log("Database synced");
    // Iniciar el servidor después de sincronizar
    server.listen(PORT, () => {
      console.log(`Server raised in port: ${PORT}`);
    });
    process.exit();
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });
