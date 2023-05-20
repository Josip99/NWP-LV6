const express = require('express')
const db = require('./model/db') // calls file db.js in which is connect() function
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
})

const userRouter = require('./users');
const projectsRouter = require('./projects');

app.use('/users', userRouter);
app.use('/projects', projectsRouter);

app.listen(process.env.PORT || 3000, () => {

});

