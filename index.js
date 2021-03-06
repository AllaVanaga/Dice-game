let button = document.querySelector("#myButton");
let player1 = document.querySelector("#Player1");
let player2 = document.querySelector("#Player2");
let total1 = document.querySelector("#total1");
let total2 = document.querySelector("#total2");
total1 = 0;
total2 = 0;
let clicks = 0;
let myAudio = document.querySelector('#audio');
myAudio.volume = 0.4;

function getNames() {
    let name1 = document.getElementById("name1").value;
    document.getElementById("Player1").innerHTML = name1;
    let name2 = document.getElementById("name2").value;
    document.getElementById("Player2").innerHTML = name2;
    document.getElementById("myForm").reset(); 

    document.querySelectorAll("#Player1")[1].innerHTML=player1.innerHTML;
    document.querySelectorAll("#Player2")[1].innerHTML=player2.innerHTML; 
}

function rollDice(){  
    myAudio.play()
    setTimeout(function(){
        let roll1 = Math.floor(Math.random() *6) + 1;
        let roll2 = Math.floor(Math.random() *6) + 1;
        console.info("Rolled value is: ", roll1);
        console.info("Rolled value is: ", roll2);

        total1 += roll1;
        document.getElementById("total1").innerHTML = total1;

        total2 += roll2;
        document.getElementById("total2").innerHTML = total2;

        console.info("Total score:",total1)
        console.info("Total score:",total2)

        let dice1 = document.querySelectorAll('.dice')[0].lastElementChild;
        let rollImage1 = "dice-six-faces-" + roll1 + ".png";
        let imageSource1 = "images/" + rollImage1;
        dice1.setAttribute("src", imageSource1);
    
        let dice2 = document.querySelectorAll('.dice')[1].lastElementChild;
        let rollImage2 = "dice-six-faces-" + roll2 + ".png";
        let imageSource2 = "images/" + rollImage2;
        dice2.setAttribute("src", imageSource2);

        const items1 = [
            {roll1:clicks, roll2:clicks}
        ];
        
        function loadTableData(items){
            const table = document.getElementById("score-table");

            items.forEach(() => {
                let row = table.insertRow();
                let round = row.insertCell(0);
                round.innerHTML = clicks+1; 
                let player1 = row.insertCell(1);
                player1.innerHTML = roll1;
                let player2 = row.insertCell(2);
                player2.innerHTML = roll2;
            });
        }
        loadTableData(items1);
        loadTableData([]);
    },1000);
}

function stopGame() {
    setTimeout(function(){
        if(clicks>=9){
            if(total1<total2){
                document.querySelector("h2").innerHTML = ("Game over! " + player2.innerText + " won!");
            }else if(total1>total2){
                document.querySelector("h2").innerHTML = ("Game over! " + player1.innerText + " won!");
            }else if (total1 == total2){
                document.querySelector("h2").innerHTML = "Game over! It's a draw!";
            }
            window.rollDice = function(){};
        }else{
            document.querySelector("h2").innerHTML = "Who's the winner?";
        }
        clicks++;
    },1000);
  };

button.addEventListener('click',stopGame);

function resetScore(){
    window.location.reload();
} 


