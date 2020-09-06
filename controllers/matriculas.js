module.exports = app => {
    app.get('/matriculas', (req, res) => res.send("Matrículas - GET!"));
    app.post('/matriculas', (req, res) => {
        console.log(req.body);
        res.send("Matrículas - POST!");
    });
}