let button = document.querySelector("#button");
let player1 = document.querySelector("#Player1");
let player2 = document.querySelector("#Player2");

// let diceDOM1 = document.querySelector(".dice-six-faces");
// diceDom1.src="dice-six-faces-" + roll1 + " .png";


function rollDice(){ 
    let roll1 = Math.floor(Math.random() *6) + 1;
    let roll2 = Math.floor(Math.random() *6) + 1;
    console.info("Rolled value is: ", roll1);
    console.info("Rolled value is: ", roll2);

    document.getElementById("score1").innerHTML = roll1;
    document.getElementById("score2").innerHTML = roll2;

    if(roll1<roll2){
        document.querySelector("h2").innerHTML = (player2.innerText + " wins!");
    }else if(roll1>roll2){
        document.querySelector("h2").innerHTML = (player1.innerText + " wins!");
    }else{
        document.querySelector("h2").innerHTML = "It's a draw!";
    }

    let dice1 = document.querySelectorAll('.dice')[0].lastElementChild;
    let rollImage1 = "dice-six-faces-" + roll1 + ".png";
    let imageSource1 = "images/" + rollImage1;
    dice1.setAttribute("src", imageSource1);
    
    let dice2 = document.querySelectorAll('.dice')[1].lastElementChild;
    let rollImage2 = "dice-six-faces-" + roll2 + ".png";
    let imageSource2 = "images/" + rollImage2;
    dice2.setAttribute("src", imageSource2);
}



