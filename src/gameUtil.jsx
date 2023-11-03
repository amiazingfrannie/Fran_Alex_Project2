export function initializeWord(words) {
    return words[Math.floor(Math.random() * words.length)];
}
  
export function checkGuess(userInput, chosenWord) {
    return userInput.join('') === chosenWord;
}

export const compareHighlight = (userInput, chosenWord) => {

    const colors = ['yellow', 'green'];
    let unmatchedLetterInChosen = [...chosenWord];
    console.log(typeof(unmatchedLetterInChosen), unmatchedLetterInChosen)
    let compareColors = Array(unmatchedLetterInChosen.length).fill('gray');

    console.log("userInput:", userInput);
    console.log("chosenWord:", chosenWord); 

    for (let i = 0; i< colors.length; i++) {
        if (i == 0) {
            userInput.map((letter, index) => {
                if (letter == unmatchedLetterInChosen[index]) {
                    unmatchedLetterInChosen[index] = null;
                    compareColors[index] = 'green';
                }
            });
            console.log(compareColors)
        } else {
            userInput.map((letter, index) => {
                if (compareColors[index] != 'green') {
                    let matchIdx = unmatchedLetterInChosen.indexOf(letter);
                    if (matchIdx !== -1 ) {
                        unmatchedLetterInChosen[matchIdx] = null;
                        compareColors[index] = 'yellow';
                    }
                }
            });
        }
    }
    return  compareColors;
}