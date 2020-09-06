const moment = require('moment');

const conexao = require('../configs/infrastructure/conection');

class Alunos {
    insert(aluno, res){
        console.log(aluno);
        //const dataCadastro = moment().format('YYYY-MM-DD HH:MM:SS');
        //const alunoDataCadastro = {...aluno, dataCadastro}
        //fusohorario e zerar a hora quando não enviada
       
        aluno.data_inicio = moment(aluno.data_inicio, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');

        if(aluno.data_conclusao){
            aluno.data_conclusao = moment(aluno.data_conclusao, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        }

        const data_isValid = moment(aluno.data_inicio).isSameOrBefore(aluno.data_conclusao);
        const nome_isValid = aluno.nome.length >= 10;
        const usuarioGit_isValid = aluno.usuario_git.length >= 4;

        const validations = [
            {
                nome: 'data_inicio',
                valido: data_isValid,
                mensagem: 'Data de início não é menor que a data de Conclusão!'
            },
            {
                nome: 'nome',
                valido: nome_isValid,
                mensagem: 'Nome inválido!'
            },
            {
                nome: 'usuario_git',
                valido: usuarioGit_isValid,
                mensagem: 'Usuário do GitHub inválido!'                
            }
        ];
        const validationErrors = validations.filter(campo => !campo.valido);
        const qtdErrors = validationErrors.length;

        if(qtdErrors > 0){
            res.status(400).json(validationErrors);
        } else {
            const sql = 'INSERT INTO alunos SET ?';
            console.log(aluno);
            conexao.query(sql, aluno, (error, resultados) => {
                console.log(error)
                if(error){
                    res.status(400).json(error);
                } else {
                    res.status(201).json(aluno);
                }
            })
        }
    }

    getAlunos(res){
        const sql = 'SELECT * FROM alunos';

        conexao.query(sql, (error, resultados) =>{
            if(error){
                res.status(400).json(error);
            } else {
                res.status(200).json(resultados);
            }
        })
    }

    getAlunosId(id, res){
        const sql = `SELECT * FROM alunos WHERE ID=${id}`;
        conexao.query(sql, (error, resultados) => {
            if(error){
                res.status(400).json(error);
            } else {
                res.status(200).json(resultados);
            }
        })
    }

    updateAlunos(id, valores, res){
        if(valores.data_inicio){
            valores.data_inicio =  moment(aluno.data_inicio, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS'); 
        }
        if(valores.data_conclusao){
            valores.data_conclusao =  moment(aluno.data_conclusao, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS'); 
        }

        const sql = 'UPDATE alunos SET ? WHERE id=?';

        conexao.query(sql, [valores, id], (error, resultados) => {
            if(error){
                res.status(400).json(error);
            } else {
                res.status(200).json({...valores, id});
            }
        })
    }

    deleteAlunos(id, res){
        const sql = 'DELETE FROM alunos WHERE id=?';

        conexao.query(sql, id, (error, resultados) => {
            if(error){
                res.status(400).json(error);
            } else {
                res.status(200).json({id});
            }
        })

    }

}

module.exports = new Alunos;