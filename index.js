const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Importar rutas
const usuariosRoutes = require('./routes/usuarios');
app.use('/api/usuarios', usuariosRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Backend funcionando 👌');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
