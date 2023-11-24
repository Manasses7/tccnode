const express = require('express');
const app = express();
const sqlite3 = require('sqlite3')

app.use(express.static('./public'));

app.use(require('body-parser').urlencoded({extended:true}));

app.post('/login', (req, res)=>{

   //conexão com o banco de dados apenas para ler
    const db = new sqlite3.Database('./banco_de_dados/login.db', sqlite3.OPEN_READ);

    //consulta para validação de email e senha cadastrado
    const sql = `SELECT email, senha FROM cadastro WHERE email=? AND senha=?`
    db.get(sql, [req.body.email, req.body.password], (err, linha)=>{
        if(linha) {
            res.json({
                status: 'Ok',
                msg:'Login válido'
            });
        } else {
            res.json({
                status: 'Falhou',
                msg: 'Login inválido'
            })
        }

    })
})

app.post('/cadastro', (req, res)=>{ 
   
    //dados na página de cadastro
    const cadastro = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        loginemail: req.body.emaillogin,
        loginpassword: req.body.passwordlogin
    }

    console.log(cadastro);

    //conexão com o banco de dados
    const db = new sqlite3.Database('./banco_de_dados/login.db', sqlite3.OPEN_READWRITE);

    //comando para inserir os dados recolhidos
    const commandSQL = 
    `INSERT INTO cadastro VALUES(?,?,?,?);
    `

    //método para inserir os dados no banco de dados e verificar se o email (primary key) já foi cadastrado
    db.run(commandSQL, 
        [cadastro.firstname, 
        cadastro.lastname, 
        cadastro.loginemail, 
        cadastro.loginpassword], (erro) => {
            if(erro) {
                res.json({msg: 'conta existente!'})
            } else {
                res.redirect('/index.html')
            }
        }
    )
})

app.listen(3030, ()=>{
    console.log('servidor rodando na URL http://localhost:3030');
})
