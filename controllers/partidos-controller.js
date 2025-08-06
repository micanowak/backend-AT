const supabase = require('../services/supabaseClient');

const getPartidos = async (req, res) => {
  const { data, error } = await supabase.from('partidos').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

const createPartido = async (req, res) => {
  const { dia, hora, cancha, categoria, idEqui1, idEqui2, golEqui1, golEqui2 } = req.body;
  if (!dia || !hora || !cancha || !categoria || !idEqui1 || !idEqui2) {
    return res.status(400).json({ error: 'Faltan datos obligatorios' });
  }

  const { data, error } = await supabase
    .from('partidos')
    .insert([{ dia, hora, cancha, categoria, idEqui1, idEqui2, golEqui1, golEqui2 }]);

  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data[0]);
};

module.exports = { getPartidos, createPartido };
