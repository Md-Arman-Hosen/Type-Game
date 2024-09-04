document.getElementById('home-btn').addEventListener('click', function() {
    hideElementById('home');
    showElementById('play-ground');
    continueGame();
})

function continueGame() {
    const alphabets = getRandomAlphabet();
    // set NewAlphabet
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabets;
    return (alphabets);
}

function getRandomAlphabet() {
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random() * 25;

    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}

document.addEventListener('keyup', function () {
    const playerPress = event.key;
    console.log(playerPress);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    console.log(expectedAlphabet);

    // check match or not

    if (playerPress == expectedAlphabet) {
        console.log('get point')

        const currentScore = getTextElementValueById('current-score');

        //  new score
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);
        continueGame();

    }

    else {
        console.log('Wrong answer')
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);
        if (updatedLife === 0) {
            GameOver();
        }
    }


})