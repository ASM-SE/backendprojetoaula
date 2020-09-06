const conexao = require('./conection');

class Tables {
    init(conexao){
        this.conexao = conexao;
        this.criarAluno();


    }

    criarAluno(){
        const sql = 'CREATE TABLE IF NOT EXISTS Alunos (id int NOT NULL AUTO_INCREMENT, nome varchar(90) NOT NULL, usuario_git varchar(50) NOT NULL, GRR int(15) NOT NULL, email varchar(80) NOT NULL, data_inicio datetime NOT NULL, data_conclusao datetime, PRIMARY KEY(id))';

        this.conexao.query(sql, error => {
            if(error){
                console.log(error);
            } else {
                console.log('Tabela Alunos criada com sucesso!');
            }
        });



    }

    //Matricula RF02 - O sistema deverá possuir cadastro de matrícula (seleção de alunos já incluídos no sistema, nome da disciplina, semestre, data de início e data de fim).



}

module.exports = new Tables;