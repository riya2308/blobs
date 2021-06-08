const canvas= document.getElementById("gamearea");
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;
let radius = 50;

let downPressed=false;
let upPressed=false;
let leftPressed=false;
let rightPressed=false;


function drawGame(){
    requestAnimationFrame(drawGame);  
    clearscreen();
    inputs();
    boundarycheck();
    drawgreenblob();
}

function inputs(){
    if(downPressed){
        y=y+10;
    }
    if(upPressed){
        y=y-10;
    }
    if(leftPressed){
        x=x-10;
    }
    if(rightPressed){
        x=x+10;
    }
}

function boundarycheck(){
    if(y<radius){
        y=radius;
    }
    if(y>canvas.height-radius){
        y=canvas.height-radius;
    }
    if(x<radius){
        x=radius;
    }
    if(x>canvas.width-radius){
        x=canvas.width-radius;
    }
}

function drawgreenblob(){
    ctx.fillStyle="green";

    if(upPressed){
        ctx.fillStyle="red";

    }
    if(downPressed){
        ctx.fillStyle="yellow";

    }
    if(leftPressed){
        ctx.fillStyle="purple";

    }
    if(rightPressed){
        ctx.fillStyle="blue";

    }


    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

function clearscreen(){
    ctx.fillStyle= "black";
    ctx.fillRect(0,0, canvas.width,canvas.height);

}

document.body.addEventListener('keydown',keyDown);
document.body.addEventListener('keyup',keyUp);


function keyDown(event){
    if(event.keyCode==40){
        downPressed=true;
    }
    if(event.keyCode==38){
        upPressed=true;
    }
    if(event.keyCode==39){
        rightPressed=true;
    }
    if(event.keyCode==37){
        leftPressed=true;
    }

}
function keyUp(event){
    if(event.keyCode==40){
        downPressed=false;
    }
    if(event.keyCode==38){
        upPressed=false;
    }
    if(event.keyCode==39){
        rightPressed=false;
    }
    if(event.keyCode==37){
        leftPressed=false;
    }
}



drawGame();
