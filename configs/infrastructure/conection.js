const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3307',
    user: 'anderson',
    password: '123',
    database: 'apinode'
});

module.exports = conexao;