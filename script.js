cross = true;
score = 0;

//to jump the dino when up key is pressed and to move the dragon infinitely
document.onkeydown = function(e){
    console.log("Key code is : "+e.keyCode);
    if(e.keyCode == 38){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        },700);
    }
    if(e.keyCode == 39){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    
    if(e.keyCode == 37){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
}

//To See the collision between the dino and the dragon

setInterval(() => {

    dino = document.querySelector('.dino');
    gameover = document.querySelector('.gameover');
    obsticle = document.querySelector('.obsticle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obsticle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obsticle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    //console.log(offsetX, offsetY);
    if(offsetX < 73 && offsetY < 52){
        gameover.style.visibility = 'visible';
        obsticle.classList.remove('obsticleAni');
    }else if(offsetX < 145 && cross == true){
        score+=1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            aniDur =  parseFloat(window.getComputedStyle(obsticle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            
            obsticle.style.animationDuration = newDur + 's';
            
            console.log("New animation duration : " + newDur);
        }, 50000);
        
    }


    }, 10);

function updatescore(score){
    scoreCont.innerHTML = "Your Score : "+ score;
    console.log(score)
}