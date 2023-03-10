/*
  Calcule a média da estudante, em seguida, com base na nota exiba as seguintes 
  frases usando uma estrutura de condição:
    1. Se a nota for 0, mostre na tela: "Infelizmente você zerou a prova :( "
    2. Se a nota for entre 0.1 e 3, mostre na tela: 
      "Caramba, deu ruim, você obteve media {nota}! Estude mais e tente novamente!"
    3. Se a nota for entre 3.1 e 5.9, mostre na tela: 
      "Você obteve media {nota}! Falta pouco para a média."
    4. Se a nota for entre 6 e 7, mostre na tela: "Você está na média com {nota}"
    5. Se a nota for entre 7.1 e 9.9, mostre na tela: "Notão! Sua média é {nota}!"
    6. Se a nota for entre 10, mostre na tela: 
      "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média"
*/
function calcularMedia() {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const note2 = parseFloat(document.getElementById("nota2").value);
  const note3 = parseFloat(document.getElementById("nota3").value);
  const note4 = parseFloat(document.getElementById("nota4").value);

  let mensagem = "";
  // evite mexer no código acima!


const mediafinal = (nota1 + note2 + note3 + note4) / 4 ;

if (mediafinal <= 0) {
  // evite mexer na linha de código abaixo!
  document.getElementById("situacaoAluno").innerHTML = "Infelizmente sua média é zero :(";

  }else if (mediafinal <= 3) {
  document.getElementById("situacaoAluno").innerHTML = "Caramba, deu ruim, você obteve media " + mediafinal + ". Estude mais e tente novamente!";

  }else if (mediafinal <= 5.9) {
  document.getElementById("situacaoAluno").innerHTML = "Você tirou " + mediafinal + ". Falta pouco para a média"; 

  }else if (mediafinal <= 7) {
  document.getElementById("situacaoAluno").innerHTML = "Você está na média com " + mediafinal; 
  
  }else if (mediafinal <= 9.9) {
  document.getElementById("situacaoAluno").innerHTML = "Notão! Sua média é " + mediafinal; 
  
  }else if (mediafinal === 10) {
  document.getElementById("situacaoAluno").innerHTML = "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média"; 
  
  }else {

  }

}  
