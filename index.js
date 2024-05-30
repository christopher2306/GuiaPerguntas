const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Respostas");

//Database

Connection
    .authenticate()
    .then(() => {
        console.log("Conexão realizada com o Banco de Dados!")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

//Informando ao Express usar o EJS como View Engine
app.set('view engine','ejs');
app.use(express.static('public'));

//Faz com que os dados sejam convertidos em uma estrutura JavaScript
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Rotas
app.get("/",(req,res) => {
    Pergunta.findAll({raw: true, order:[
        ['id','DESC'] //ASC = Crescente | DESC = "Decrescente"
    ]}).then(perguntas => {
        res.render("index", {
            perguntas: perguntas
        });
    });    
});

//Renderiza tela "perguntar"
app.get("/perguntar",(req,res) => {
    res.render("perguntar");
});

//Envia nova pergunta para banco de dados
app.post("/salvarpergunta",(req,res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/");
    });
});

//Consulta pergunta através do ID
app.get("/pergunta/:id", (req, res) => {
    var id = req.params.id;
    Pergunta.findOne({
        where: {id: id}
    }).then(pergunta => {
        if (pergunta != undefined) {      
            Resposta.findAll({
                where: {perguntaId: pergunta.id},
                order: [['id', 'DESC']]
            }).then(respostas => {
                res.render("pergunta", {
                    pergunta: pergunta,
                    respostas: respostas
                });
            });
        } else {
            res.redirect("/");
        }
    });
});

app.post("/responder", (req,res) => {
    var corpo = req.body.corpo;
    var perguntaId = req.body.pergunta;

    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect("pergunta/" + perguntaId);
    });
});

app.listen(8080,()=>{console.log("App rodando!");});