window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  // Get player object
var player = GetPlayer();

// Convert answers to lowercase
var answer1 = player.GetVar("Answer1").toLowerCase();
var answer2 = player.GetVar("Answer2").toLowerCase();
var answer3 = player.GetVar("Answer3").toLowerCase();
var answer4 = player.GetVar("Answer4").toLowerCase();
var answer5 = player.GetVar("Answer5").toLowerCase();
var answer6 = player.GetVar("Answer6").toLowerCase();
var answer7 = player.GetVar("Answer7").toLowerCase();
var answer8 = player.GetVar("Answer8").toLowerCase();
var answer9 = player.GetVar("Answer9").toLowerCase();
var answer10 = player.GetVar("Answer10").toLowerCase();

// Set the converted values back to the variables
player.SetVar("Answer1", answer1);
player.SetVar("Answer2", answer2);
player.SetVar("Answer3", answer3);
player.SetVar("Answer4", answer4);
player.SetVar("Answer5", answer5);
player.SetVar("Answer6", answer6);
player.SetVar("Answer7", answer7);
player.SetVar("Answer8", answer8);
player.SetVar("Answer9", answer9);
player.SetVar("Answer10", answer10);

// Initialize score variable
var score = 0;

// Correct answers (in lowercase)
var correctAnswer1 = "compass";
var correctAnswer2 = "clock";
var correctAnswer3 = "printing press";
var correctAnswer4 = "telescope";
var correctAnswer5 = "battery";
var correctAnswer6 = "refrigerator";
var correctAnswer7 = "phonograph";
var correctAnswer8 = "telephone";
var correctAnswer9 = "light bulb";
var correctAnswer10 = "automobile";

// Check answers and update score and flag correct answers
if (answer1 === correctAnswer1) {
    score += 1;
    player.SetVar("Correct1", true);
}
if (answer2 === correctAnswer2) {
    score += 1;
    player.SetVar("Correct2", true);
}
if (answer3 === correctAnswer3) {
    score += 1;
    player.SetVar("Correct3", true);
}
if (answer4 === correctAnswer4) {
    score += 1;
    player.SetVar("Correct4", true);
}
if (answer5 === correctAnswer5) {
    score += 1;
    player.SetVar("Correct5", true);
}
if (answer6 === correctAnswer6) {
    score += 1;
    player.SetVar("Correct6", true);
}
if (answer7 === correctAnswer7) {
    score += 1;
    player.SetVar("Correct7", true);
}
if (answer8 === correctAnswer8) {
    score += 1;
    player.SetVar("Correct8", true);
}
if (answer9 === correctAnswer9) {
    score += 1;
    player.SetVar("Correct9", true);
}
if (answer10 === correctAnswer10) {
    score += 1;
    player.SetVar("Correct10", true);
}

// Set the score variable in Storyline
player.SetVar("Score", score);

}

window.Script2 = function()
{
  // Get player object
var player = GetPlayer();

// Convert answers to lowercase
var answer1 = player.GetVar("Answerone").toLowerCase();
var answer2 = player.GetVar("Answertwo").toLowerCase();
var answer3 = player.GetVar("Answerthree").toLowerCase();
var answer4 = player.GetVar("Answerfour").toLowerCase();
var answer5 = player.GetVar("Answerfive").toLowerCase();
var answer6 = player.GetVar("Answersix").toLowerCase();
var answer7 = player.GetVar("Answerseven").toLowerCase();
var answer8 = player.GetVar("Answereight").toLowerCase();
var answer9 = player.GetVar("Answernine").toLowerCase();
var answer10 = player.GetVar("Answerten").toLowerCase();

// Set the converted values back to the variables
player.SetVar("Answerone", answer1);
player.SetVar("Answertwp", answer2);
player.SetVar("Answerthree", answer3);
player.SetVar("Answerfour", answer4);
player.SetVar("Answerfive", answer5);
player.SetVar("Answersix", answer6);
player.SetVar("Answerseven", answer7);
player.SetVar("Answereight", answer8);
player.SetVar("Answernine", answer9);
player.SetVar("Answerten", answer10);

// Initialize score variable
var score = 0;

// Correct answers (in lowercase)
var correctAnswer1 = "bluetooth speaker";
var correctAnswer2 = "smartphone";
var correctAnswer3 = "fitness tracker";
var correctAnswer4 = "tablet";
var correctAnswer5 = "drone";
var correctAnswer6 = "power bank";
var correctAnswer7 = "virtual reality headset";
var correctAnswer8 = "smart glasses";
var correctAnswer9 = "smartwatch";
var correctAnswer10 = "bluetooth earbuds";

// Check answers and update score and flag correct answers
if (answer1 === correctAnswer1) {
    score += 1;
    player.SetVar("Correctone", true);
}
if (answer2 === correctAnswer2) {
    score += 1;
    player.SetVar("Correcttwo", true);
}
if (answer3 === correctAnswer3) {
    score += 1;
    player.SetVar("Correctthree", true);
}
if (answer4 === correctAnswer4) {
    score += 1;
    player.SetVar("Correctfour", true);
}
if (answer5 === correctAnswer5) {
    score += 1;
    player.SetVar("Correctfive", true);
}
if (answer6 === correctAnswer6) {
    score += 1;
    player.SetVar("Correctsix", true);
}
if (answer7 === correctAnswer7) {
    score += 1;
    player.SetVar("Correctseven", true);
}
if (answer8 === correctAnswer8) {
    score += 1;
    player.SetVar("Correcteight", true);
}
if (answer9 === correctAnswer9) {
    score += 1;
    player.SetVar("Correctnine", true);
}
if (answer10 === correctAnswer10) {
    score += 1;
    player.SetVar("Correctten", true);
}

// Set the score variable in Storyline
player.SetVar("Score", score);

}

window.Script3 = function()
{
  // Get player object
var player = GetPlayer();

// Convert answers to lowercase
var answer1 = player.GetVar("Ans1").toLowerCase();
var answer2 = player.GetVar("Ans2").toLowerCase();
var answer3 = player.GetVar("Ans3").toLowerCase();
var answer4 = player.GetVar("Ans4").toLowerCase();
var answer5 = player.GetVar("Ans5").toLowerCase();
var answer6 = player.GetVar("Ans6").toLowerCase();
var answer7 = player.GetVar("Ans7").toLowerCase();
var answer8 = player.GetVar("Ans8").toLowerCase();
var answer9 = player.GetVar("Ans9").toLowerCase();
var answer10 = player.GetVar("Ans10").toLowerCase();

// Set the converted values back to the variables
player.SetVar("Ans1", answer1);
player.SetVar("Ans2", answer2);
player.SetVar("Ans3", answer3);
player.SetVar("Ans4", answer4);
player.SetVar("Ans5", answer5);
player.SetVar("Ans6", answer6);
player.SetVar("Ans7", answer7);
player.SetVar("Ans8", answer8);
player.SetVar("Ans9", answer9);
player.SetVar("Ans10", answer10);

// Initialize score variable
var score = 0;

// Correct answers (in lowercase)
var correctAnswer1 = "compass";
var correctAnswer2 = "clock";
var correctAnswer3 = "printing press";
var correctAnswer4 = "telescope";
var correctAnswer5 = "battery";
var correctAnswer6 = "refrigerator";
var correctAnswer7 = "phonograph";
var correctAnswer8 = "telephone";
var correctAnswer9 = "light bulb";
var correctAnswer10 = "automobile";

// Check answers and update score and flag correct answers
if (answer1 === correctAnswer1) {
    score += 1;
    player.SetVar("Corr1", true);
}
if (answer2 === correctAnswer2) {
    score += 1;
    player.SetVar("Corr2", true);
}
if (answer3 === correctAnswer3) {
    score += 1;
    player.SetVar("Corr3", true);
}
if (answer4 === correctAnswer4) {
    score += 1;
    player.SetVar("Corr4", true);
}
if (answer5 === correctAnswer5) {
    score += 1;
    player.SetVar("Corr5", true);
}
if (answer6 === correctAnswer6) {
    score += 1;
    player.SetVar("Corr6", true);
}
if (answer7 === correctAnswer7) {
    score += 1;
    player.SetVar("Corr7", true);
}
if (answer8 === correctAnswer8) {
    score += 1;
    player.SetVar("Corr8", true);
}
if (answer9 === correctAnswer9) {
    score += 1;
    player.SetVar("Corr9", true);
}
if (answer10 === correctAnswer10) {
    score += 1;
    player.SetVar("Corr10", true);
}

// Set the score variable in Storyline
player.SetVar("Score", score);

}

};
