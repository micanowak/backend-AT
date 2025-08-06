const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware globales
app.use(cors());
app.use(express.json());

// Importar rutas
const equiposRoutes = require('./routes/equipos');
const partidosRoutes = require('./routes/partidos');

// Usar rutas
app.use('/api/equipos', equiposRoutes);
app.use('/api/partidos', partidosRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor de Torneo funcionando 👌');
});

// Iniciar servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
