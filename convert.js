/*
    Set up buttons for lifepoints
*/

//Player 1
// var player1Hp = document.getElementById("p1Hp");
// var player1HpValue = player1Hp.innerHTML;
var player1AddButton = document.getElementById("player1Add");
var player1SubtractButton = document.getElementById("player1Subtract");
player1AddButton.addEventListener("click", player1Add, false);
player1SubtractButton.addEventListener("click", player1Subtract, false);

function player1Add() {
    var player1Hp = document.getElementById("p1Hp");
    var player1HpValue = player1Hp.value;
    var inputValue = document.getElementById("input").value;
    player1Hp.value = player1HpValue + inputValue;
}

function player1Subtract() {
    var player1Hp = document.getElementById("p1Hp");
    var player1HpValue = player1Hp.value;
    var inputValue = document.getElementById("input").value;
    player1Hp.value = player1HpValue - inputValue;
}

//Player 2
// var player2Hp = document.getElementById("p2Hp");
// var player2HpValue = player2Hp.innerHTML;
var player2AddButton = document.getElementById("player2Add");
var player2SubtractButton = document.getElementById("player2Subtract");
player2AddButton.addEventListener("click", player2Add, false);
player2SubtractButton.addEventListener("click", player2Subtract, false);

function player2Add() {
    var player2Hp = document.getElementById("p2Hp");
    var player2HpValue = player2Hp.value;
    var inputValue = document.getElementById("input").value;
    player2Hp.value = player2HpValue + inputValue;
}

function player2Subtract() {
    var player2Hp = document.getElementById("p2Hp");
    var player2HpValue = player2Hp.value;
    var inputValue = document.getElementById("input").value;
    player2Hp.value = player2HpValue - inputValue;
}
