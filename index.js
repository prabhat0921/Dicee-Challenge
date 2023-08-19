var player1 = document.querySelector('.dice .img1');
var player2 = document.querySelector('.dice .img2');

var randomNumber1 = randomNum1(); 
var randomNumber2 = randomNum2();
function randomNum1(){
  return Math.floor(Math.random()* (6-1)+1);
}
function randomNum2(){
  return Math.floor(Math.random()* (6-1)+1);
}



function diceOfPlayer1(){
  if(randomNumber1 === 1){
    player1.setAttribute('src', './images/dice1.png')
  }
  else if(randomNumber1 === 2){
    player1.setAttribute('src', './images/dice2.png')
  }
  else if(randomNumber1 === 3){
    player1.setAttribute('src', './images/dice3.png')
  }
  else if(randomNumber1 === 4){
    player1.setAttribute('src', './images/dice4.png')
  }
  else if(randomNumber1 === 5){
    player1.setAttribute('src', './images/dice5.png')
  }
  else if(randomNumber1 === 6){
    player1.setAttribute('src', './images/dice6.png')
  }
}

function diceOfPlayer2(){
  if(randomNumber2 === 1){
    player2.setAttribute('src', './images/dice1.png')
  }
  else if(randomNumber2 === 2){
    player2.setAttribute('src', './images/dice2.png')
  }
  else if(randomNumber2 === 3){
    player2.setAttribute('src', './images/dice3.png')
  }
  else if(randomNumber2 === 4){
    player2.setAttribute('src', './images/dice4.png')
  }
  else if(randomNumber2 === 5){
    player2.setAttribute('src', './images/dice5.png')
  }
  else if(randomNumber2 === 6){
    player2.setAttribute('src', './images/dice6.png')
  }
}

var text = document.querySelector('h1');
if(randomNumber1 > randomNumber2){
text.textContent = "Player1 Wins";
}
else if(randomNumber2>randomNumber1){
  text.textContent = 'player2 Wins'
}
else{
  text.textContent="Draw!"
}