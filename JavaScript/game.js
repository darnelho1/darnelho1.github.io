

var scoreIt = 0; // running tally of correct answers

var toPlay = function(){
  userName=prompt("What is your name?");
  confirm("Welcome to my guessing game " + userName + ". Let's play! (Press ok to play the game)");
}();

// Put Questions Into Arrays
var arrayQuestions = [
"I currently live in Seattle but I grew up in Massachusetts. What city in Massachusetts did I grow up in?",
"I was born in 1983 can you guess which month?",
"I have a child who is less than a year old can you guess how many months old she is?",
"How old am I?",
"How many years have I lived in Seattle?",
"BONUS: Guess the number between 0-15"
];
var arrayAnswerCorrect = [
"You are correct I was born in Boston.",
"You are correct! I was born in October.",
"You are correct! My daughter is seven months old.",
"Wow! Nice guess. You are correct! I am 32 years old.",
"You are correct! I have lived in Seattle for 11 years.",
"You guessed the correct number!!!!"
];
var arrayAnswerIncorrect = [
"Incorrect. I grew up in Boston.",
"You are incorrect. I was born in October.",
"You are incorrect. My daughter is seven months old.",
"Nope, I'm 32.",
"Incorrect. I have lived in Seattle for 11 years.",
"The actual number is lower than your guess.",
"The actual number is higher than your guess."
];

var correctPic = [];
var incorrectPic = [];

var arrayAnswers = [
'BOSTON',
'BOS',
'OCTOBER',
'OCT',
'7',
'SEVEN',
'32',
'THIRTY TWO',
'11',
'ELEVEN',
];


var response;
var pic;


var checkAnswer = function(p1,p2,p3,p4,p5){
  if ((p1.toUpperCase()=== p2) || (p1.toUpperCase()===p3)){
    response=p4;
    pic="images/correct.png";
    scoreIt++;

  }

  else{
    response=p5;
    pic="images/incorrect.png";
  }
}

var userAnswer1 = prompt(arrayQuestions[0]);
checkAnswer(userAnswer1,arrayAnswers[0],arrayAnswers[1],arrayAnswerCorrect[0],arrayAnswerIncorrect[0]);
document.getElementById('question1').innerHTML= response;
document.getElementById('img1').src = pic;

console.log(scoreIt);

var userAnswer2 = prompt(arrayQuestions[1]);
checkAnswer(userAnswer2,arrayAnswers[2],arrayAnswers[3],arrayAnswerCorrect[1],arrayAnswerIncorrect[1]);
document.getElementById('question2').innerHTML= response;
document.getElementById('img2').src = pic;

console.log(scoreIt);

var userAnswer3 = prompt(arrayQuestions[2]);
checkAnswer(userAnswer3,arrayAnswers[4],arrayAnswers[5],arrayAnswerCorrect[2],arrayAnswerIncorrect[2]);
document.getElementById('question3').innerHTML=response;
document.getElementById('img3').src = pic;

console.log(scoreIt);

var userAnswer4 = prompt(arrayQuestions[3]);
checkAnswer(userAnswer4,arrayAnswers[6],arrayAnswers[7],arrayAnswerCorrect[3],arrayAnswerIncorrect[3]);
document.getElementById('question4').innerHTML=response;
document.getElementById('img4').src = pic;

var userAnswer5 = prompt(arrayQuestions[4]);
checkAnswer(userAnswer5,arrayAnswers[8],arrayAnswers[9],arrayAnswerCorrect[4],arrayAnswerIncorrect[4]);
document.getElementById('question5').innerHTML = response;
document.getElementById('img5').src = pic;


var alertScore = function() {
  document.getElementById('alertScore').innerHTML = "Your score was " +scoreIt+ "/5. Refresh the Page to play again.";
  //alert("You got " + scoreIt + "/5 correct");
}
setTimeout(alertScore, 500);

var bonusRound = function() {
  if (scoreIt >= 4) {
    var bonusPick = window.confirm("Great Job! " + userName + " You scored high enough for the bonus round.");
     document.getElementById('bonusQ').innerHTML=arrayQuestions[5];

    if (bonusPick === true) {
       var numberRandom = Math.floor(Math.random() * 10);
       var guess = Number(prompt(arrayQuestions[5]));
        if(guess > numberRandom) {
          document.getElementById('bonusA').innerHTML=arrayAnswerIncorrect[5];
          document.getElementById('bonusA').style.color = "red";
          document.getElementById('imgB').src = "images/incorrect.png";
        }else if (guess < numberRandom) {
          document.getElementById('bonusA').innerHTML=arrayAnswerIncorrect[6];
          document.getElementById('bonusA').style.color = "red";
          document.getElementById('imgB').src = "images/incorrect.png";
        }else {
          document.getElementById('bonusA').innerHTML=arrayAnswerCorrect[5];
          document.getElementById('bonusA').style.color = "green";
          document.getElementById('imgB').src = "images/correct.png";
          result=0;
    };
  };

  };

}
setTimeout(bonusRound, 1000);



/*

var question1 = function() {
  var userAnswer1 = prompt(arrayQuestions[0]);
  if((userAnswer1.toUpperCase() === "BOSTON") || (userAnswer1.toUpperCase() === "BOS")) {
    document.getElementById('question1').innerHTML= arrayAnswerCorrect[0];
    document.getElementById('question1').style.color = "green";
    document.getElementById('img1').src = "images/correct.png";
    scoreIt++;
  }else {
    document.getElementById('question1').innerHTML= arrayAnswerIncorrect[0];
    document.getElementById('question1').style.color = "red";
    document.getElementById('img1').src = "images/incorrect.png";
  };
  }();


var question2 = function() {
  var userAnswer2 = prompt(arrayQuestions[1]);
  if((userAnswer2.toUpperCase() === "OCTOBER")||(userAnswer2.toUpperCase() === "OCT")) {
    document.getElementById('question2').innerHTML=arrayAnswerCorrect[1];
    document.getElementById('question2').style.color = "green";
    document.getElementById('img2').src = "images/correct.png";
    scoreIt++;
  }else {
    document.getElementById('question2').innerHTML=arrayAnswerIncorrect[1];
    document.getElementById('question2').style.color = "red";
    document.getElementById('img2').src = "images/incorrect.png";
  };
}
setTimeout(question2, 100);


var question3 = function() {
  var userAnswer3 = prompt(arrayQuestions[2]);
  if((userAnswer3 === "7")||(userAnswer3.toUpperCase() === "SEVEN")) {
    document.getElementById('question3').innerHTML=arrayAnswerCorrect[2];
    document.getElementById('question3').style.color = "green";
    document.getElementById('img3').src = "images/correct.png";
    scoreIt++;
  }else {
    document.getElementById('question3').innerHTML=arrayAnswerIncorrect[2];
    document.getElementById('question3').style.color = "red";
    document.getElementById('img3').src = "images/incorrect.png";
  };
}
setTimeout(question3, 200);

var question4 = function() {
  var userAnswer4 = Number(prompt(arrayQuestions[3]));
  if(userAnswer4 === 32) {
    document.getElementById('question4').innerHTML=arrayAnswerCorrect[3];
    document.getElementById('question4').style.color = "green";
    document.getElementById('img4').src = "images/correct.png";
    scoreIt++;
  }else {
    document.getElementById('question4').innerHTML=arrayAnswerIncorrect[3];
    document.getElementById('question4').style.color = "red";
    document.getElementById('img4').src = "images/incorrect.png";
  };
}
setTimeout(question4, 300);


var question5 = function() {
  var userAnswer5 = prompt(arrayQuestions[4]);
  if ((userAnswer5 === '11') || (userAnswer5.toUpperCase() ==='ELEVEN')) {
    document.getElementById('question5').innerHTML=arrayAnswerCorrect[4];
    document.getElementById('question5').style.color = "green";
    document.getElementById('img5').src = "images/correct.png";
    scoreIt++;
  }else {
    document.getElementById('question5').innerHTML=arrayAnswerIncorrect[4];
    document.getElementById('question5').style.color = "red";
    document.getElementById('img5').src = "images/incorrect.png";
  };
}
setTimeout(question5, 400);

var alertScore = function() {
  document.getElementById('alertScore').innerHTML = "Your score was " +scoreIt+ "/5. Refresh the Page to play again.";
  //alert("You got " + scoreIt + "/5 correct");
}
setTimeout(alertScore, 500);

var bonusRound = function() {
  if (scoreIt >= 4) {
    var bonusPick = window.confirm("Great Job! " + userName + " You scored high enough for the bonus round.");
     document.getElementById('bonusQ').innerHTML=arrayQuestions[5];

    if (bonusPick === true) {
       var numberRandom = Math.floor(Math.random() * 10);
       var guess = Number(prompt(arrayQuestions[5]));
        if(guess > numberRandom) {
          document.getElementById('bonusA').innerHTML=arrayAnswerIncorrect[5];
          document.getElementById('bonusA').style.color = "red";
          document.getElementById('imgB').src = "images/incorrect.png";
        }else if (guess < numberRandom) {
          document.getElementById('bonusA').innerHTML=arrayAnswerIncorrect[6];
          document.getElementById('bonusA').style.color = "red";
          document.getElementById('imgB').src = "images/incorrect.png";
        }else {
          document.getElementById('bonusA').innerHTML=arrayAnswerCorrect[5];
          document.getElementById('bonusA').style.color = "green";
          document.getElementById('imgB').src = "images/correct.png";
          result=0;
    };
  };

  };

}
setTimeout(bonusRound, 1000);


*/
