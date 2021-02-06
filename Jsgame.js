let character = document.getElementById('character')
let block = document.getElementById('block')
function jump(){
    if(character.classList != 'animate'){
        character.classList.add('animate')
    }
    
    setTimeout(function(){
        character.classList.remove('animate')
    },500)
}
let checkDead = setInterval(() => {
     let characterPos = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
     let blockPos = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
     if(blockPos<20 && blockPos>0 && characterPos>=130){
         block.style.animation = 'none'
         block.style.display = 'none'
         alert('Game Over')

     }
}, 10);