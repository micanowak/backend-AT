const supabase = require('../services/supabaseClient');

const getUsuarios = async (req, res) => {
  const { data, error } = await supabase.from('usuarios').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

const createUsuario = async (req, res) => {
  const { nombre, email, categoria } = req.body;
  if (!nombre || !email || !categoria) {
    return res.status(400).json({ error: 'Faltan datos obligatorios' });
  }

  const { data, error } = await supabase
    .from('usuarios')
    .insert([{ nombre, email, categoria }]);

  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data[0]);
};

module.exports = { getUsuarios, createUsuario };
