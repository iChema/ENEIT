/**
 * Created by Chema on 11/05/2017.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('maquina', { title: 'Maquina' });
});

module.exports = router;