    // Quiz data
    const quizData = [
      {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Cu", "Fe"],
        answer: 0
      },
      {
        question: "What is the value of x in the following equation: 2x + 5 = 17?",
        options: ["6", "8", "10", "12"],
        answer: 2
      },
      {
        question: "Which programming language is used for web development?",
        options: ["Java", "Python", "JavaScript", "C++"],
        answer: 2
      },
      {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlink Markup Language"],
        answer: 0
      },
      {
        question: "Which of the following is NOT a JavaScript framework?",
        options: ["React", "Angular", "Vue", "Ruby"],
        answer: 3
      },
      {
        question: "What is the output of the following code snippet?\nconsole.log(2 + '2' - 1);",
        options: ["NaN", "21", "22", "23"],
        answer: 1
      },
      {
        question: "What is the result of 2 + '2'?",
        options: ["22", "4", "NaN", "TypeError"],
        answer: 0
      },
      {
        question: "Which data structure follows the Last-In-First-Out (LIFO) principle?",
        options: ["Queue", "Stack", "Heap", "Tree"],
        answer: 1
      },
      // Additional Questions
      {
        question: "What is the largest ocean in the world?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        answer: 0
      },
      {
        question: "Who developed the theory of relativity?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
        answer: 0
      },
      {
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["France", "Brazil", "Germany", "Argentina"],
        answer: 0
      },
      {
        question: "What is the national animal of India?",
        options: ["Lion", "Tiger", "Elephant", "Peacock"],
        answer: 1
      },
      {
        question: "Which year was the first iPhone released?",
        options: ["2006", "2007", "2008", "2009"],
        answer: 1
      },
      {
        question: "What is the symbol for the chemical element oxygen?",
        options: ["O", "O2", "O3", "OH"],
        answer: 0
      },
      {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        answer: 0
      },
      {
        question: "What is the square root of 16?",
        options: ["2", "4", "8", "16"],
        answer: 1
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Venus", "Mercury"],
        answer: 0
      },
      {
        question: "What is the full form of CPU?",
        options: ["Central Processing Unit", "Computer Personal Unit", "Central Personal Unit", "Computer Processing Unit"],
        answer: 0
      },
      // Add more questions here...
    ];
    
      // Global variables
      let currentQuestion = 0;
      let score = 0;
  
      // Function to load the question
      function loadQuestion() {
        const questionElement = document.getElementById('question');
        const optionsElement = document.getElementById('options');
        const submitButton = document.getElementById('submit');
  
        questionElement.textContent = quizData[currentQuestion].question;
  
        optionsElement.innerHTML = '';
        for (let i = 0; i < quizData[currentQuestion].options.length; i++) {
          const option = document.createElement('button');
          option.textContent = quizData[currentQuestion].options[i];
          option.classList.add('btn', 'btn-outline-primary', 'mr-2', 'mb-2');
          option.addEventListener('click', () => {
            checkAnswer(i);
          });
          optionsElement.appendChild(option);
        }
  
        if (currentQuestion === quizData.length - 1) {
          submitButton.textContent = 'Finish';
        }
  
        // Add skip button
        if (quizData[currentQuestion].answer === 0) {
          const skipButton = document.createElement('button');
          skipButton.textContent = 'Skip';
          skipButton.classList.add('btn', 'btn-outline-secondary', 'mr-2', 'mb-2');
          skipButton.addEventListener('click', () => {
            currentQuestion++;
            loadQuestion();
          });
          optionsElement.appendChild(skipButton);
        }
      }
  
      // Function to check the answer
      function checkAnswer(answerIndex) {
        if (answerIndex === quizData[currentQuestion].answer) {
          score++;
        }
  
        currentQuestion++;
  
        if (currentQuestion < quizData.length) {
          loadQuestion();
        } else {
          showScore();
        }
      }
      
      function reloadPage() {
        window.location.reload();
      }
  
      // Function to show the final score
      function showScore() {
        const scoreElement = document.getElementById('score');
        scoreElement.innerHTML = `
          <h3>Your Score: ${score}/${quizData.length}</h3>
        `;
  
        setTimeout(reloadPage, 5000); // Reload the page after 5 seconds (5000 milliseconds)
      }
      // Load the first question
      loadQuestion();