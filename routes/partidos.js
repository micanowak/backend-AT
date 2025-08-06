const express = require('express');
const router = express.Router();
const { getPartidos, createPartido } = require('../controllers/partidos-controller');

router.get('/', getPartidos);
router.post('/', createPartido);

module.exports = router;
