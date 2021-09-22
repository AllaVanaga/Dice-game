let button = document.querySelector("#button");
let player1 = document.querySelector("#Player1");
let player2 = document.querySelector("#Player2");



function rollDice(){
    let roll1 = Math.floor(Math.random() *6) + 1;
    let roll2 = Math.floor(Math.random() *6) + 1;
    console.info("Rolled value is: ", roll1);
    console.info("Rolled value is: ", roll2);

    document.getElementById("score1").innerHTML = roll1;
    document.getElementById("score2").innerHTML = roll2;

    if(roll1<roll2){
        document.querySelector("h2").innerHTML = ("Player 2 wins!");
    }else if(roll1>roll2){
        document.querySelector("h2").innerHTML = ("Player 1 wins!");
    }else{
        document.querySelector("h2").innerHTML = "It's a draw!";
    }
    // if(roll1<roll2){
    //     document.querySelector("h2").innerHTML = (player2 + " wins!");
    // }else if(roll1>roll2){
    //     document.querySelector("h2").innerHTML = (player1 + " wins!");
    // }else{
    //     document.querySelector("h2").innerHTML = "It's a draw!";
    // }
}




