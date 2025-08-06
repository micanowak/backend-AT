const supabase = require('../services/supabaseClient');

const getEquipos = async (req, res) => {
  const { data, error } = await supabase.from('equipos').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

const createEquipo = async (req, res) => {
  const { nombre, categoria, pts, pj, pg, pe, pp, gf, gc } = req.body;

  if (!nombre || !categoria) {
    return res.status(400).json({ error: 'Faltan nombre o categoría' });
  }

  const { data, error } = await supabase
    .from('equipos')
    .insert([{ nombre, categoria, pts, pj, pg, pe, pp, gf, gc }])
    .select();

  if (error) return res.status(500).json({ error: error.message });
  if (!data || data.length === 0) {
    return res.status(500).json({ error: 'No se pudo insertar el equipo' });
  }

  res.status(201).json(data[0]);
};

module.exports = { getEquipos, createEquipo };
