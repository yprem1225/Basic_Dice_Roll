document.getElementById("rollBtn").addEventListener("click", rollDice);
function rollDice(){
    let randomNumber1=Math.floor(Math.random()*6)+1;
    let randomNumber2=Math.floor(Math.random()*6)+1;

    let randomDiceImage1="dice"+randomNumber1+".png";
    let randomDiceImage2="dice"+randomNumber2+".png";

    let randomImageSource1="images/"+randomDiceImage1;
    let randomImageSource2="images/"+randomDiceImage2;

    document.querySelector(".img1").setAttribute("src",randomImageSource1);
    document.querySelector(".img2").setAttribute("src",randomImageSource2);

    if(randomNumber1>randomNumber2){
        document.getElementById("win").innerHTML="🚩Player 1 wins";
    }else if(randomNumber2>randomNumber1){
        document.getElementById("win").innerHTML="🚩Player 2 wins";
    }else{
        document.getElementById("win").innerHTML="Draw";
    }

}
