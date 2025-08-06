const supabase = require('../services/supabaseClient');

const getEquipos = async (req, res) => {
  const { data, error } = await supabase.from('equipos').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

const createEquipo = async (req, res) => {
  const { nombre, categoria, pts, pj, pg, pe, pp, gf, gc } = req.body;
  if (!nombre || !categoria || !pts || !pj || !pg || !pe || !pp || !gf || !gc) {
    return res.status(400).json({ error: 'Faltan datos obligatorios' });
  }

  const { data, error } = await supabase
    .from('equipos')
    .insert([{ nombre, categoria, pts, pj, pg, pe, pp, gf, gc }]);

  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data[0]);
};

module.exports = { getEquipos, createEquipo };
