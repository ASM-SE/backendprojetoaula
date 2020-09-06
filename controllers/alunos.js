const Alunos = require('../models/alunos');

module.exports = app => {
    app.get('/alunos', (req, res) => {
        Alunos.getAlunos(res);
    });

    app.get('/alunos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Alunos.getAlunosId(id, res);
;
    });

    app.post('/alunos', (req, res) => {
        const aluno = req.body;
        Alunos.insert(aluno,res);
    });

    app.patch('/alunos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;
        Alunos.updateAlunos(id, valores, res);
    });

    //PUT

    app.delete('/alunos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Alunos.deleteAlunos(id, res);
    })
}