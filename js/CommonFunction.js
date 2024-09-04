const hideElementById = elementId =>{
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}
const showElementById = elementId =>{
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');

}


function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const value = parseInt(elementString);
    return value;
}

function setTextElementValueById(elementId,value){
 const element = document.getElementById(elementId);
 element.innerText = value;
}

function playAgain (){
    hideElementById('home');
    hideElementById ('score')
    showElementById('play-ground')

    setTextElementValueById('current-life', 5 );
    setTextElementValueById('current-score', 0 );
    continueGame();
}

function GameOver (){
 hideElementById('play-ground');
 showElementById('score');
 const lastscore = getTextElementValueById('current-score')
 setTextElementValueById ('final-score',lastscore )
}