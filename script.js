let total = 0;
let current = 1;
const totalQuestions = 5;

function nextQuestion(points) {
  total += points;

  // Esconde a pergunta atual
  document.getElementById(`q${current}`).style.display = "none";

  current++;

  if(current > totalQuestions){
    showResult();
  } else {
    // Mostra a próxima pergunta
    document.getElementById(`q${current}`).style.display = "block";
  }
}

function showResult() {
  document.getElementById("result").style.display = "block";

  if(total <= 5){
    document.getElementById("result").innerText = "Nível Iniciante 🏓\nRecomendamos começar com o Plano Iniciante.";
  } else if(total <= 10){
    document.getElementById("result").innerText = "Nível Intermediário 🧠\nVocê pode seguir para o Plano Intermediário.";
  } else{
    document.getElementById("result").innerText = "Nível Avançado 🚀\nVocê está pronto para o Plano Avançado!";
  }
}
