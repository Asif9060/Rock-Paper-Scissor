
document.getElementById("rock").addEventListener("click",function(){
    const rockvalue = document.getElementById("rock").value;
    const random = document.getElementById("guess").value = Math.floor((Math.random() * 3) + 1);

    const winCount = document.getElementById("wincount").innerText;
    const int = parseInt(winCount);
    const increment = int + 1;


    const drawCount = document.getElementById("drawcount").innerText;
    const int2 = parseInt(drawCount);
    const increment2 = int2 + 1;

    const loseCount = document.getElementById("losecount").innerText;
    const int3 = parseInt(loseCount);
    const increment3 = int3 + 1;
    
    
    if(rockvalue == random) {
        document.getElementById("d").style.display = "block";
        document.getElementById("w").style.display = "none";
        document.getElementById("l").style.display = "none";
        document.getElementById("drawcount").innerText = increment2;
    }

    else if(random == 3){
        document.getElementById("w").style.display = "block";
        document.getElementById("l").style.display = "none";
        document.getElementById("d").style.display = "none";
        document.getElementById("wincount").innerText = increment;
    }

    else if (random == 2){
        document.getElementById("w").style.display = "none";
        document.getElementById("l").style.display = "block";
        document.getElementById("d").style.display = "none";
        document.getElementById("losecount").innerText = increment3;
    }
})

document.getElementById("paper").addEventListener("click",function(){
    const papervalue = document.getElementById("paper").value;
    const random = document.getElementById("guess").value = Math.floor((Math.random() * 3) + 1);

    const winCount = document.getElementById("wincount").innerText;
    const int = parseInt(winCount);
    const increment = int + 1;

    const drawCount = document.getElementById("drawcount").innerText;
    const int2 = parseInt(drawCount);
    const increment2 = int2 + 1;

    const loseCount = document.getElementById("losecount").innerText;
    const int3 = parseInt(loseCount);
    const increment3 = int3 + 1;

    if(papervalue == random) {
        document.getElementById("d").style.display = "block";
        document.getElementById("w").style.display = "none";
        document.getElementById("l").style.display = "none";
        document.getElementById("drawcount").innerText = increment2;
    }

    else if(random == 1){
        document.getElementById("w").style.display = "block";
        document.getElementById("l").style.display = "none";
        document.getElementById("d").style.display = "none";
        document.getElementById("wincount").innerText = increment;
        
    }

    else if (random == 3){
        document.getElementById("w").style.display = "none";
        document.getElementById("l").style.display = "block";
        document.getElementById("d").style.display = "none";
        document.getElementById("losecount").innerText = increment3;
    }
})

document.getElementById("scissor").addEventListener("click",function(){
    const scissorvalue = document.getElementById("scissor").value;
    const random = document.getElementById("guess").value = Math.floor((Math.random() * 3) + 1);

    const winCount = document.getElementById("wincount").innerText;
    const int = parseInt(winCount);
    const increment = int + 1;

    const drawCount = document.getElementById("drawcount").innerText;
    const int2 = parseInt(drawCount);
    const increment2 = int2 + 1;

    const loseCount = document.getElementById("losecount").innerText;
    const int3 = parseInt(loseCount);
    const increment3 = int3 + 1;

    if(scissorvalue == random) {
        document.getElementById("d").style.display = "block";
        document.getElementById("w").style.display = "none";
        document.getElementById("l").style.display = "none";
        document.getElementById("drawcount").innerText = increment2;
    }

    else if(random == 2){
        document.getElementById("w").style.display = "block";
        document.getElementById("l").style.display = "none";
        document.getElementById("d").style.display = "none";
        document.getElementById("wincount").innerText = increment;
    }

    else if (random == 1){
        document.getElementById("w").style.display = "none";
        document.getElementById("l").style.display = "block";
        document.getElementById("d").style.display = "none";
        document.getElementById("losecount").innerText = increment3;
    }
})


