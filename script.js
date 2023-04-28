//constants


const items = {
    '🔥':50,
    '🍋':100,
    '🎰':1000,
    '🦧':-200    
}


//cached items


spinBtn = document.getElementById('spinBtn')
slots = document.querySelectorAll('.slot')
scoreDisplay = document.querySelector('.score')


//event listeners


spinBtn.addEventListener('click', luckySpin)


//state variables


score = 20

//functions


function luckySpin(){
    scoreDisplay.innerText = `Money: $${score}`;
    if(score <= 0){
        alert(`You're broke. Make this a lesson to not gamble.`)
    return
    }
    score -= 2;
    setTimeout(spin, 1);
    console.log('luckyspin')

}
function spin() {
    console.log('spintop')
    for(const slot of slots){
        const emojis = Object.keys(items)
        const randomIndex = Math.floor(Math.random()*emojis.length)
        const randomEmoji = emojis[randomIndex]
        slot.innerText = randomEmoji   
        console.log('spinend')

    }
    checkWin()
  }
  
  
function checkWin(){
    console.log('checkloss')
    if((slots[0].innerText ===slots[1].innerText) && (slots[1].innerText===slots[2].innerText) && (slots[1].innerText==='🦧')){
        const item = slots[1].innerText;
        score += items[item];
        scoreDisplay.innerText = `Money : $${score}`; 
        alert('You LOST 200 points!')
    }

    else if((slots[0].innerText ===slots[1].innerText) && (slots[1].innerText===slots[2].innerText)){
        const item = slots[1].innerText;
        score += items[item];
        scoreDisplay.innerText = `Money : $${score}`; 
        alert('You Won!')
    }
}
