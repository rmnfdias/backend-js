const express = require("express"); //const é a criação e uma variavel var global e let é escopo de função e pode ser sobreescritas, a const não pode ser sobrescrita 
const app = express(); //"cria" uma aplicção express
const port = 3000;


app.get("/exercicio1/", (req, res) => { //cria a função get que cria o "caminho" que usuario/aplicativo irá seguir
    const num1 = req.query.num1
    const num2 = req.query.num2
    const resultado = Number(num1) + Number(num2);
    
    res.json({message: resultado});//req é request e res é responsy ou seja req é para onde vai e res para onde volta.
}); //res retorna a requisição, se não tiver a pagina ficará carregando eternamente.

app.get("/exercicio2/", (req, res) => { //cria a função get que cria o "caminho" que usuario/aplicativo irá seguir
    const num1 = req.query.num1
    const num2 = req.query.num2
    const resultado = Number(num1) * Number(num2);
    
    res.json({message: resultado});//req é request e res é responsy ou seja req é para onde vai e res para onde volta.
}); //res retorna a requisição, se não tiver a pagina ficará carregando eternamente.

app.get("/exercicio3/", (req, res) => { //cria a função get que cria o "caminho" que usuario/aplicativo irá seguir
    const num1 = req.query.num1
    const num2 = req.query.num2
    const num3 = req.query.num3
    const num4 = req.query.num4
    const num5 = req.query.num5
    const resultado = ((Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5))/Number(5));
        
    res.json({message: resultado});//req é request e res é responsy ou seja req é para onde vai e res para onde volta.
}); //res retorna a requisição, se não tiver a pagina ficará carregando eternamente.

app.get("/exercicio4/", (req, res) => { //cria a função get que cria o "caminho" que usuario/aplicativo irá seguir
    const num1 = req.query.num1
       const resultado = ((Number(9)*Number(num1)+Number(160))/Number(5));
        
    res.json({message: resultado});//req é request e res é responsy ou seja req é para onde vai e res para onde volta.
}); //res retorna a requisição, se não tiver a pagina ficará carregando eternamente.

app.get("/exercicio5/", (req, res) => { //cria a função get que cria o "caminho" que usuario/aplicativo irá seguir
    const num1 = req.query.num1
    const num2 = 1.60934
       const resultado = (Number(num1)*Number(num2));
        
    res.json({message: resultado});//req é request e res é responsy ou seja req é para onde vai e res para onde volta.
}); //res retorna a requisição, se não tiver a pagina ficará carregando eternamente.



app.listen(port, () =>{
  console.log("App de Exemplo executando na porta 3000!");
});