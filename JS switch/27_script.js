//cria as constantes dos elementos HTML, para dar a resposta 
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");

//cria um evento que recebe as informações do HTML 
frm.addEventListener("submit", (e)=>{
//previne ser mandado em branco
    e.preventDefault();

const nota = Number(frm.inNota.value);
//uso do switch para dar a resposta dependendo da nota
switch (nota){
    case 1:
    case 2:
        resp1.innerHTML = `Agradecemos sua resposta, caso seja possivel, nos diga por que a sua nota foi ${nota}`;
    break
    case 3:
    case 4:
        resp1.innerHTML = `Agradecemos sua resposta, agradecemos a nota ${nota}`;
    break;
    case 5:
        resp1.innerHTML = `MEU DEUSSSSSSS, OBRIGADO PELA NOTA ${nota} >w<`;
    break;
    default:
        resp1.innerHTML = `Nota invalida, responda novamente`;
    break;
}


})