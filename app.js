var mysql = require('mysql');
var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'sakila', 
    user: 'eocares',
    password: 'ocares144',
})

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('CONEXION EXITOSA');
    }
})

conexion.query('SELECT * from customer', function(error,results,fields){
    if(error)
        throw error;
    results.forEach(result => {
        console.log(result);
    });
})

conexion.end();


