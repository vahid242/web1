var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var point1 = document.getElementById("point1");
var point2 = document.getElementById("point2");
var reset = document.getElementById("reset");
var input = document.querySelector("input");
var p = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var max = 5;
var gameOver = false;

p1.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === max){
            point1.classList.add("winer");
            gameOver = true;
        }
        point1.textContent = p1Score;
    }
})

p2.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === max){
            point2.classList.add("winer");
            gameOver=true;
        }
        point2.textContent = p2Score;
    }
})

// change score
// change color
// change gameover
reset.addEventListener("click", function(){
    resetIt();
})
// change p by input value
input.addEventListener("change", function(){
    p.textContent = Number(this.value);
    max = Number(this.value);
    resetIt();
})

function resetIt() {
    p1Score = 0;
    p2Score = 0;
    point1.textContent = 0;
    point2.textContent = 0;
    point1.classList.remove("winer");
    point2.classList.remove("winer");
    gameOver = false;
}