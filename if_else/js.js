// Cria as constantes dos elementos hetl, para ser usado para a resposta
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");
//Cria um evento para receber as informações do front para serem calculadas no JS
frm.addEventListener("submit", (e )=> {
    //Previne que seja enviado um campo vazio
    e.preventDefault();
    //Cria as variaveis que serão usadas para receber as informações, e as calcula
    let nome = frm.inNome.value;
    let nota1 = Number(frm.inNota1.value);
    let nota2 = Number(frm.inNota2.value);
    let media = (nota1+nota2)/2;
    //Dá a resposta da médi de notas
    resp1.innerHTML = `Média das Notas ${media.toFixed(1)}`
//Usa o if para dar a resposta se o aluno passou ou não
    if(media >=70){
        resp2.innerHTML = `Parabéns ${nome}, você foi aprovado`;
        resp2.style.color = "green";
    }else{
        resp2.innerHTML = `${nome}, seu burro, você foi reprovado`;
        resp2.style.color = "red";
    };
})