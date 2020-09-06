const customExpress = require('./configs/customExpress');
const conexao = require('./configs/infrastructure/conection');
const table = require('./configs/infrastructure/tables');

conexao.connect(error => {
    if(error){
        console.log(error)
    } else {
        table.init(conexao);
        const app = customExpress();
        app.listen(3003, () => console.log('Servidor rodando na porta 3003 com MariaDB!'));
    }
});



  






