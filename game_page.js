player1name = localStorage.getItem("player1name");
player2name = localStorage.getItem("player2name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1name").innerHTML = player1name + " : ";
document.getElementById("player2name").innerHTML = player2name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("playerquestion").innerHTML = "Question turn - " + player1name;
document.getElementById("playeranswer").innerHTML = "Answer turn - " + player2name;