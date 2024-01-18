import express from 'express';
import router from './routes/index.js';

import db from './config/db.js';

const app = express();

db.authenticate()
    .then(()=> console.log('Base de datos Conectada'))
    .catch(error =>console.log(error))

const port = process.env.PORT || 3000;

app.set('view engine', 'pug');

app.use((req,res,next)=>{
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.actualYear = 'MarkeBlog';

    next();
})

app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.use('/', router);

app.listen(port, () =>{
    console.log(`La Aplicación esta funcionando en el puerto ${port}`);
})