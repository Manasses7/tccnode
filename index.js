const express = require('express');
const app = express();
const sqlite3 = require('sqlite3')

app.use(express.static('./public'));

app.use(require('body-parser').urlencoded({extended:true}));

app.post('/login', (req, res)=>{
   
    const db = new sqlite3.Database('./banco_de_dados/login.db', sqlite3.OPEN_READ);
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
   
    const cadastro = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        loginemail: req.body.emaillogin,
        loginpassword: req.body.passwordlogin
    }

    console.log(cadastro);

    const db = new sqlite3.Database('./banco_de_dados/login.db', sqlite3.OPEN_READWRITE);
    const commandSQL = 
    `INSERT INTO cadastro VALUES(?,?,?,?);
    `
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

