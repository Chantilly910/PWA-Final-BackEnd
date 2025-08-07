import dotenv from 'dotenv';
import database from './config/db';
import apps from './app';

dotenv.config();

const PORT = process.env.PORT;

const startServer = async () => {
  try {
    await database();
    apps.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
    process.exit(1);
  }
}

startServer().catch((error) => {
  console.error('Error al iniciar la aplicación:', error);
  process.exit(1);
});