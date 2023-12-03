function checkAnswer(questionId, userAnswer, element) {
  const correctAnswers = {
    'question1': '1897',
 'question2' : 'Holistique',
    'question3' : 'Français',     
    'question4' : 'Organique/Mécanique',
  'question5' : '4'
  
  };

  if (correctAnswers[questionId] === userAnswer) {
    element.style.backgroundColor = 'green'; // Change la couleur si la réponse est correcte
    alert('Bonne réponse !');
  } else {
    element.style.backgroundColor = 'red'; // Change la couleur si la réponse est incorrecte
    alert('Mauvaise réponse. Essayez encore !');
  }
}

function resetQuiz() {
    // Sélectionne tous les boutons de réponse
    const answers = document.querySelectorAll('.answer');

    // Réinitialise le style de chaque bouton
    answers.forEach(function(answer) {
        answer.style.backgroundColor = ''; // Réinitialise la couleur de fond
    });

    // Ajoutez ici toute autre logique de réinitialisation nécessaire
}

document.querySelectorAll(".collapse-button").forEach(function(button) {
    button.addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
            this.innerHTML = "Informations Complémentaires";
        } else {
            content.style.display = "block";
            this.innerHTML = "Masquer les Informations";
        }
    });
});
