/**
 * Created by Chema on 11/05/2017.
 */
var express = require('express');
var router = express.Router();
var mysql = require("mysql");

/* GET users listing. */
router.post('/maquina', function(req, res, next) {
    var id_maquina = req.body.id_maquina;
    var numSensor = req.body.numSensor;
    var sensor = "sensor" + numSensor;
    //res.end(value);

    // First you need to create a connection to the db
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'Pparadaa0',
        database : 'eneit'
    });

    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }

        console.log('connected as id ' + connection.threadId);
    });

    connection.query('SELECT DISTINCT valor FROM '+ sensor +' WHERE id_maquina = '+ id_maquina +' ORDER BY id DESC LIMIT 1;',function(err,rows){
        if (err) throw err;

        console.log('Data received from Db:\n');
        console.log(rows);
        res.json(rows);
    });

    connection.end(function(err) {
        // The connection is terminated gracefully
        // Ensures all previously enqueued queries are still
        // before sending a COM_QUIT packet to the MySQL server.
    });
});

module.exports = router;
