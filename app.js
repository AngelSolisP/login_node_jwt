const express = require('express');

const dotenv = require('dotenv');

const cookieParser = require('cookie-parser');

const app = express();

//motor de plantilla
app.set('view engine', 'ejs')

//carpeta para archivos estaticos
app.use(express.static('public'));

//variables de entorno
dotenv.config({ path: './.env/.env' });

//trabajar con las cookies
//app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//llamando a las rutas
app.use('/', require('./routes/router'));




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});