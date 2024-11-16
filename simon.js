h2=document.querySelector("h2");
body=document.querySelector("body");
h3=document.querySelector("h3");
let started=false;
let level=0;
let gameseq=[];
let userseq=[];
let highscore=0;

body.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    } ,250)

}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let ranndomnum=Math.floor(Math.random()*4)+1;
    let btncolor=document.querySelector(`.box${ranndomnum}`);
    // console.log(ranndomnum);
    gameseq.push(btncolor.getAttribute("id"));
    // console.log(gameseq);
    btnflash(btncolor);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    } ,250)
    

}


function check(idx){
    // console.log(`current level ${level}`);
    
    if(userseq[idx]==gameseq[idx]){
        // console.log('same');
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    } else{
        h2.innerHTML=`Game Over! Your Score is <b>${level-1}</b>.<br>Press any key to start`;
        if((level-1)>highscore){
            highscore=level-1;
        }
        h3.innerText=`Your Highscore is ${highscore}`;
        
        body.style.backgroundColor="red";
        setTimeout(function(){
            body.style.backgroundColor="white"
        },150);
        reset()
        
        
    }
}


function btnpress(){
    // console.log("btn pressed");
    let btn=this;    //important to define this btn here .
    userflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    // console.log(userseq);
    check(userseq.length-1);
};

let btns=document.querySelectorAll(".box");
for(btn of btns){
    btn.addEventListener("click",btnpress);
}


function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}