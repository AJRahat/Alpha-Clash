playNowButton.addEventListener('click', function () {
    addClass(home);
    removeClass(playGround);
    game();
})

function game() {
    const bigScreen = document.getElementById('screen');
    const word = wordGenerator();
    bigScreen.innerText = word;
    addTagColorHandler(word);
}

document.addEventListener('keyup', function (e) {
    let userValue = e.key;
    // let pcValue=bigScreen.innerText;
    let value=document.getElementById('screen');
    let pcValue=value.innerText;
    let bot=pcValue.toLowerCase();

    if (userValue === bot) {
        const scores = document.getElementById('score');
        const scored=parseInt(scores.innerText);
        const scoreValue=scored+1;
        scores.innerText=scoreValue;
    }
    else {      
        const lives = document.getElementById('life');
        const live=parseInt(lives.innerText);
        const lifeValue=live-1;
        lives.innerText = lifeValue;

        if(lifeValue<0){
            gameOver();
        }  
    }
    removeTagColorHandler(bot);
    game();
})

function gameOver() {
    addClass(playGround);
    removeClass(scoreResult);
    alert('Game Over');
    result();
}

document.getElementById('play-again-btn').addEventListener('click',function(){
    const lateScore=document.getElementById('life');
    const lateLife=document.getElementById('score');

    lateScore.innerText=5;
    lateLife.innerText=0;

    addClass(scoreResult);
    removeClass(playGround);
    
})