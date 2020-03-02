const auth = require('./auth');
// const authenticate = require('../middlewares/authenticate');

module.exports = app => {
    app.get('/', (req, res) => {
        res.status(200).send({ message: " All Tasks"});
    });
    app.use('/', auth);

    app.get('/register', (req, res) => {
        res.status(200).send({ message: " Register to create your tasks"});
    });
    app.use('/register', auth);

    app.get('/login', (req, res) => {
        res.status(200).send({ message: " Login to create new tasks"});
    });
    app.use('/login', auth);
};