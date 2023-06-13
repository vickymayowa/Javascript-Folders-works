    // Quiz data
// Quiz data
const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: 0
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Mars", "Jupiter", "Earth", "Saturn"],
      answer: 1
    },
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
    function checkAnswer(selectedOption) {
      if (selectedOption === quizData[currentQuestion].answer) {
        score++;
      }

      if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
      } else {
        showScore();
      }
    }

    // Function to display the score
    function showScore() {
      const questionElement = document.getElementById('question');
      const optionsElement = document.getElementById('options');
      const submitButton = document.getElementById('submit');
      const scoreElement = document.getElementById('score');

      questionElement.textContent = '';
      optionsElement.innerHTML = '';
      submitButton.style.display = 'none';
      scoreElement.textContent = 'Your score: ' + score;
    }

    // Start the quiz
    loadQuestion();
