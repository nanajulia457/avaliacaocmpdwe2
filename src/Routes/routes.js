const express = require('express');
const router = express.Router();
const votoscontroller = require('../controller/votoscontroller');
router.get('/', votoscontroller.listarMedicamentos);
router.post('/voto', votoscontroller.votosfeitosmodel);
module.exports = router;