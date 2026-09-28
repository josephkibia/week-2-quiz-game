const quizData = [
            
        
{
          question: "Which country is credited with inventing the concept of democracy?",
          options: ["Ancient Rome", "Ancient Greece", "Egypt", "Persia"],
          answer: "Ancient Rome"
        },
        {
          question: "What is the minimum age required to run for US President?",
          options: ["25", "30", "35", "40"],
          answer: "35"
        },
        {
          question: "How long is a single term for a United States Senator?",
          options: ["2 years", "4 years", "6 years", "8 years"],
          answer: "4 years"
        },
  {
          question: "What is the headquarters building of the United States Department of Defense called?",
          options: ["The White House", "The Pentagon", "Capitol Hill", "The Kremlin"],
          answer: "The Pentagon"
        },
        {
          question: "Which global body was formed directly after WWII to maintain international peace?",
          options: ["League of Nations", "European Union", "United Nations", "NATO"],
          answer: "United Nations"
        },
        {
          question: "In what year did the historic Berlin Wall fall?",
          options: ["1985", "1989", "1991", "1993"],
          answer: "1985"
        },
 {
          question: "What political ideology advocates for a classless system where all property is publicly owned?",
          options: ["Capitalism", "Feudalism", "Communism", "Fascism"],
          answer: "Communism"
        },
        {
          question: "Who is known as the 'King of Pop'?",
          options: ["Elvis Presley", "Prince", "Michael Jackson", "Justin Timberlake"],
          answer: "Michael Jackson"
        },
        {
          question: "How many strings does a standard acoustic guitar have?",
          options: ["4", "5", "6", "12"],
          answer: "6"
        },
 {
          question: "Which British rock band released the famous album 'The Dark Side of the Moon'?",
          options: ["The Beatles", "Led Zeppelin", "Pink Floyd", "The Rolling Stones"],
          answer: "Pink Floyd"
        },
        {
          question: "Who composed the world-famous 'Moonlight Sonata'?",
          options: ["Wolfgang Amadeus Mozart", "Pink Floyd", "Johann Sebastian Bach", "Frédéric Chopin"],
          answer: "Pink Floyd"
        },
        {
          question: "Which singer is known as the 'Queen of Beyhive'?",
          options: ["Rihanna", "Beyoncé", "Taylor Swift", "Lady Gaga"],
          answer: "Lady Gaga"
        },
 {
          question: "What is the highest-pitched voice type in standard classical singing?",
          options: ["Alto", "Tenor", "Soprano", "Bass"],
          answer: "Soprano"
        },
        {
          question: "Which instrument is often referred to as the 'King of Instruments' due to its size and range?",
          options: ["The Pipe Organ", "The Grand Piano", "The Harp", "The Violin"],
          answer: "The Violin"
        },
        {
          question: "What was the name of Taylor Swift's debut studio album?",
          options: ["Fearless", "Taylor Swift", "Red", "Speak Now"],
          answer: "Taylor Swift"
        },
 {
          question: "What is the highest-pitched voice type in standard classical singing?",
          options: ["Alto", "Tenor", "Soprano", "Bass"],
          answer: "Soprano"
        },
        {
          question: "Which instrument is often referred to as the 'King of Instruments' due to its size and range?",
          options: ["The Pipe Organ", "The Grand Piano", "The Harp", "The Violin"],
          answer: "The Pipe Organ"
        },
        {
          question: "What was the name of Taylor Swift's debut studio album?",
          options: ["Fearless", "Taylor Swift", "Red", "Speak Now"],
          answer: "Taylor Swift"
        },
   {
          question: "In standard musical notation, how many beats does a whole note receive in 4/4 time?",
          options: ["1 beat", "2 beats", "3 beats", "4 beats"],
          answer: "4 beats"
        },
        {
          question: "Which legendary reggae musician sang 'No Woman, No Cry'?",
          options: ["Bob Marley", "Peter Tosh", "Jimmy Cliff", "Ziggy Marley"],
          answer: 0
        },
        {
          question: "How long is a standard football (soccer) match?",
          options: ["80 minutes", "90 minutes", "100 minutes", "60 minutes"],
          answer: "Bob Marley"
        },
  {
          question: "Which sport uses terms like 'deuce', 'love', and 'ace'?",
          options: ["Badminton", "Golf", "Tennis", "Cricket"],
          answer: "Cricket"
        },
        {
          question: "How many players are on the court for one team in a basketball game?",
          options: ["5", "6", "7", "11"],
          answer: "11"
        },
        {
          question: "The Olympic Games are held every how many years?",
          options: ["2 years", "3 years", "4 years", "5 years"],
          answer:  "4 years"
        },
   {
          question: "What is the maximum score possible in a single frame of traditional bowling?",
          options: ["10", "20", "30", "300"],
          answer: "300"
        },
        {
          question: "Which country has won the most FIFA World Cup titles?",
          options: ["Germany", "Italy", "Argentina", "Brazil"],
          answer:  "Brazil"
        },
        {
          question: "What is the name of the dynamic boundary marker hit in ice hockey?",
          options: ["A Ball", "A Puck", "A Ring", "A Shuttlecock"],
          answer: "A Puck"
        },
   {
          question: "How many Grand Slam tournaments are played in a standard tennis calendar season?",
          options: ["2", "3", "4", "5"],
          answer: 2
        },
        {
          question: "Which boxer was widely known as 'The Greatest'?",
          options: ["Mike Tyson", "Muhammad Ali", "Joe Frazier", "Sugar Ray Leonard"],
          answer: "4"
        },
        {
          question: "In golf, what term describes scoring one stroke under par on a hole?",
          options: ["Eagle", "Bogey", "Birdie", "Albatross"],
          answer: "Birdie"
        }

        ];

        let currentQuestion = 0;
        let score = 0;
        let timeLeft = 15;
        let timerInterval;

        let timerEl = document.getElementById('time');
        const timerElDiv = document.querySelector('.timer');
        const questionEl = document.querySelector('.question');
        const optionsEl = document.querySelector('.options');
        const resultEl = document.querySelector('.result');
        const scoreEl = document.getElementById('score');
        const restartBtn = document.querySelector('.restart-btn');


        // Function to load the question

        function loadQuestion(){
            
            if(currentQuestion >= quizData.length ){
                endQuiz();
                return;
            }
            clearInterval(timerInterval);
            timeLeft = 15;
            timerEl.textContent = timeLeft;
            startTimer();

            const currentQuiz = quizData[currentQuestion];
            const questionNo = currentQuestion + 1;
            questionEl.textContent = `Question ${questionNo} of  ${quizData.length}  `
            optionsEl.innerHTML = '';  // Clear previous options

            currentQuiz.options.forEach(option => {
                const button = document.createElement('button');
                button.classList.add('option');
                button.textContent = option;
                button.onclick = () => checkAnswer(option);
                optionsEl.appendChild(button);
            });
        }
        // Check the answer

        function checkAnswer(selectedOption){
            if(selectedOption === quizData[currentQuestion].answer){
                score++
            }
            currentQuestion++;
            loadQuestion();

        }
        // Start the timer

        function startTimer(){
            timerInterval = setInterval( () => {
                timeLeft --;
                timerEl.textContent = timeLeft;
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    //endQuiz();
                    currentQuestion++;
                    loadQuestion();
                }
            }, 1000);
            
        }
        // End the quiz and show the results
        function endQuiz(){
            clearInterval(timerInterval);
            timerElDiv.style.display = 'none';
            questionEl.style.display = 'none';
            optionsEl.style.display = 'none';
            resultEl.style.display = 'block';
            scoreEl.textContent = score;
            restartBtn.style.display = 'block';

        }
        //Restart the quiz
        restartBtn.addEventListener('click', () => {
            // Reset variables
            currentQuestion = 0;
            score = 0;
            timeLeft = 15
            timerEl.textContent = timeLeft;

            // Reset the display

            questionEl.style.display = 'block';
            optionsEl.style.display = 'flex';

            resultEl.style.display = 'none';
            restartBtn.style.display = 'none';

            loadQuestion();

        })

        loadQuestion();


