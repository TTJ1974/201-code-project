let questions = [
  ["What is my first name?", "JOHN", "An outstanding first name, im sure you will agree!"],
  ["Where was i born?", "MT VERNON", "Heh can you say Tulip Festival!"],
  ["Did i live in Alaska?", "YES", "Lots of moose up that way, and bears lots of bears!"],
  ["Gamer or Car buff?", "BOTH", "I like to change it up on occasion!"],
  ["What is the programing language I really want to learn?", "PYTHON", "Im all about some robot language!"]
  ];
  
  let correctAnswers = 0;
  
  for (let i = 0; i < questions.length; i++) {
      let answer = prompt(questions[i][0]);
      if (answer.toUpperCase() == questions[i][1]) {
          alert("Correct! " + questions[i][2]);
          correctAnswers++;
      }
      else {
          alert("incorrect, the correct answer was " + questions[i][1]);
      }
  }
  