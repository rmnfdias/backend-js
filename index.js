const express = require("express"); //const é a criação e uma variavel var global e let é escopo de função e pode ser sobreescritas, a const não pode ser sobrescrita 
const app = express(); //"cria" uma aplicção express
app.use(express.json());//Midleware para permitir que o Express intereprete que o corpo da requisição como JSON
const port = 3000;


app.post("/exercicio1/", (req, res) => { //cria a função post que cria o "caminho" que usuario/aplicativo irá seguir
    const num1 = req.body.num1
    const num2 = req.body.num2
    const resultado = (num1) + (num2);
    
    res.json({Resultado: resultado});//req é request e res é responsy ou seja req é para onde vai e res para onde volta.
}); //res retorna a requisição, se não tiver a pagina ficará carregando eternamente.

app.post("/exercicio2/", (req, res) => { 
    const num1 = req.body.num1
    const num2 = req.body.num2
    const resultado = Number(num1) * Number(num2);
    
    res.json({Resultado: resultado});
}); 

app.post("/exercicio3/", (req, res) => { 
    const peso1 = req.body.peso1
    const peso2 = req.body.peso2
    const peso3 = req.body.peso3
    const peso4 = req.body.peso4
    const peso5 = req.body.peso5
    const resultado = ((Number(peso1) + Number(peso2) + Number(peso3) + Number(peso4) + Number(peso5))/Number(5));
        
    res.json({Resultado: resultado});
}); 

app.post("/exercicio4/", (req, res) => { 
    conspesoum1 = req.body.num1
       const resultado = ((Number(9)*Number(num1)+Number(160))/Number(5));
        
    res.json({Resultado: resultado});
}); 

app.post("/exercicio5/", (req, res) => { 
    const num1 = req.body.num1
    const num2 = 1.60934
       const resultado = (Number(num1)*Number(num2));
        
    res.json({Resultado: resultado});
}); 



app.post("/exercicio6/", (req, res) => { 
    const num1 = req.body.num1
    
    const min = (Number(num1)/Number(60));
    const horas = (Number(num1)/Number(3600));
     
 res.json({minutos: min , horas});

});


app.post("/exercicio7/", (req, res) => { 
    const num1 = req.body.num1

    const mt = (Number(num1)*Number(1000));
    const cm = (Number(num1)*Number(100000));

 res.json({metros: mt , cm});    
});

app.post("/exercicio8/", (req, res) => { // Define uma rota POST chamada "/exercicio8/"
    const num1 = req.body.num1; // Extrai o valor de num1 do corpo da requisição

    const resultado = []; // Cria um array vazio para armazenar os resultados da tabuada

    for (let i = 1; i <= 10; i++) { // Inicia um loop de 1 a 10
        const multiplicacao = `${num1} x ${i} = ${num1 * i}`; // Cria uma string formatada para a multiplicação
        resultado.push(multiplicacao); // Adiciona a string ao array de resultados
    } // Fecha o loop

    res.json({ Resultado: resultado }); // Envia a resposta como JSON com o array de resultados
}); // Fecha a função de callback da rota

app.post("/desafio0/", (req, res) => { 
    const idade = req.body.idade

    const meses = (Number(idade)*Number(12));
    const dias = (Number(idade)*Number(365));

 res.json({Meses: meses , Dias: dias});    
});




app.listen(port, () =>{
  console.log("App de Exemplo executando na porta 3000!");
});