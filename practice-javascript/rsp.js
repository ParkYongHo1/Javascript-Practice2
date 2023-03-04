const scissors = document.getElementById("scissors");
const rock =document.getElementById("rock");
const paper = document.getElementById("paper");
let score = 0;
let clicktime=true;
let message='';
const myGame = event.target.textContent === '가위' ? 'scissors'
    : event.target.textContent === '바위' ? 'rock'
    : 'paper' ;
if(myGame === 'scissors'){
    if(comGame === 'scissors'){
        alert("비김");
    }else if(comGame === 'rock'){
        alert("짐");
    }else{
        alert("이김");
    }
}else if ( myGame === 'paper'){
    if(comGame === 'scissors'){
        alert("짐");
    }else if(comGame === 'rock'){
        alert("이김");
    }else{
        alert("비김");
    }
}else{
    if(comGame === 'scissors'){
        alert("이김");
    }else if(comGame === 'rock'){
        alert("비김");
    }else{
        alert("짐");
    }
}
function clockBtn(){
    if(clicktime){
        clearInterval(intervalId);
        clicktime=false;
    }
}
scissors.addEventListener("click",clickBtn);
rock.addEventListener("click",clickBtn);
paper.addEventListener("click",clickBtn);
