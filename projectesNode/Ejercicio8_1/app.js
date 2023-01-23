const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const jwt = require('jsonwebtoken');

let usuarios = [
    {login: 'nacho', password: '1234'},
    {login: 'jaume', password: '5678'}
];

//generar token
const secreto = "SecretoNode";
let generarToken = login => {
    return jwt.sign({login:login},secreto,{expiresIn: "2 hours"})
}

let app = express();
app.set("view engine", 'ejs');
app.use('/public', express.static('./public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/inicio', (req,res) =>{
    res.render('inicio');
});

app.get('/login', (req,res)=>{
    res.render('login');
});

app.post('/login',(req,res) => {
    let usuario = usuarios.filter((u) =>{
        return u.login == req.body.login && u.password == req.body.password;
    });
    if(usuario.length == 1){
        res.send({error:false, token: generarToken(req.body.login)})
    }
    else{
        res.send({error:true, errorMessage: "Error looking for the user"})
    }
});

let validarToken = (token) =>{
    try{
        let resultado = jwt.verify(token,secreto);
        return resultado;
    }catch(error){
        return false;
    }
};

let protegerRuta = (req,res, next) =>{
    let token = req.headers['authorization'];
    /*  console.log("TOKEN=" + token) */
    if(validarToken(token)){
        next();
    }
    else{
        res.render('login');
    }
}

app.get('/protegido', protegerRuta,(req,res) => {
    res.render('protegido');
});

app.listen(8080);