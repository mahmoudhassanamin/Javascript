const board=document.getElementById("board");
const show=document.getElementById("show");
const start=document.getElementById("b1");
const timer=document.getElementById("timer");
const scoreBox=document.getElementById("scoreBox");
const score=document.getElementById("score");
const target=document.getElementById("target");
const sp=document.getElementById("sp");
let x=0 ,y=0,constant=5,counter=0,flag=1;
let interval=8;
let interval1;
let char = 104;
let currtime=1;
let bx=8;
let by=["a","b","c","d","e","f","g","h"];
let correctAnswers=0;
start.addEventListener("click",handler1);
for (let i = 0; i < 64; i++) {
    let color = i%2 ? "rgb(165, 165, 191)" : "rgba(0, 0, 63, 0.717)";
    board.innerHTML+=`<div id="${bx}${by[counter]}" style="background-color:${color};width:5vw;height:5vw;\
    position:absolute;top:${y}vw;left:${x}vw;box-shadow:2px 2px 5px 0.5px black inset;font-size:2vw;color:white;padding:0.5vw"></div>`
    let box=document.getElementById(`${bx}${by[counter]}`);
    if(x==0){
        box.textContent+=interval;
        interval--;
    }
    if(y==35){ 
        box.style.textAlign="center";
        box.textContent+=`  `+String.fromCharCode(char);
        char--;
    }
    x+=constant;
    if(x == 40 || x < 0){
        bx--;
        y+=5;
        constant*=-1;
        x+=constant;
    }
    if(counter == 7 && flag == 1)
    {
        counter++;
        currtime=-1
        flag=0;
    }else if (counter == 0 && flag == 0){
        currtime=1;
        counter--;
        flag=1;
    }
    counter += currtime ;
}
counter=0;
currtime=30;
function handler1(){
    start.removeEventListener("click",handler1);
    interval = setInterval(handler2,1000);
    
}
function handler2(){
    if(counter == 3){
        show.style.display="none";
        scoreBox.style.display="block";
        timer.style.display="block";
        target.style.display="block";
        score.style.display="block";
        sp.style.display="inline-block";
        clearInterval(interval);
        correctAnswers=0;
        score.textContent="";
        scoreBox.innerHTML="";
        interval1 = setInterval(handler3,1000);
        board.addEventListener("click",handler4);
        random();
        return;
    }
    show.textContent=3-counter;
    show.style.display="inline-block";
    counter++;
}

function handler3(){
    timer.textContent=currtime;
    currtime--;
    if( currtime == -1 ){
        clearInterval(interval1);
        start.addEventListener("click",handler1);
        board.removeEventListener("click",handler4);
        counter=0;
        currtime=30;
        // target.textContent="";
        timer.style.display="none";
        target.style.display="none";
    }
}
function handler4(e){
    if(target.textContent == e.target.id){
        correctAnswers++;
        score.textContent=correctAnswers;
        scoreBox.innerHTML+=`<img src="./img/correct.png" style="width:6%;height:9%;margin:0.5%">`
        console.log("true");

    }
    else{
        scoreBox.innerHTML+=`<img src="./img/wrong.png" style="width:6%;height:9%;margin:0.5%">`
    }
    random();
}
function random(){
    x=Math.ceil(Math.random()*8);
    y=Math.floor(Math.random()*8);
    target.textContent=`${x}${by[y]}`;
}
 