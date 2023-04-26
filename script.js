//constants
spin = 1s
const items = {
    '🔥':50,
    '☄️':100,
    '🍄':200,
    '❄️':250,
    '🍓':275,
    '🍒':300,
    '🍭':500,
    '🎰':1000,
    '🦧':-200    
}
//cached items
spinBtn = document.getElementsByClassName('spin-button')
slots = document.querySelectorAll('.slot')
//event listeners
spinBtn.addEventListner('click', luckySpin)
//state variables
doors = [[items],[items],[items]]
win = win()
//functions
function luckySpin(){
    setTimeout((spin), 1000);
      
}
function spin() {
    for(const slot of slots){
        const emojis = Object.keys(items)
        const randomIndex = Math.floor(Math.random()*emojis.length)
        const randomEmoji = emojis[randomIndex]
        slots.innerText = randomEmoji
    }
  }
  
  setInterval(spin, 100);
  
function checkWin(){
    if((doors[1]===doors[2]) && (doors[2]===doors[3])){
        const item = doors[1];
        score += items[item];
    }
}
