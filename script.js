//constants
const items = {
    '🔥':50,
    '☄️':100,
    // '🍄':200,
    // '❄️':250,
    // '🍓':275,
    // '🍒':300,
    // '🍭':500,
    // '🎰':1000,
    '🦧':-200    
}
//cached items
spinBtn = document.getElementById('spinBtn')
slots = document.querySelectorAll('.slot')
scoreDisplay = document.querySelector('.score')
//event listeners
spinBtn.addEventListener('click', luckySpin)
//state variables
score = 0
// doors = [[items],[items],[items]]
// win = win()
//functions
function luckySpin(){
    setTimeout(spin, 10);
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
