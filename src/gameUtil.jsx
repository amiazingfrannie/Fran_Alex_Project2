export function initializeWord(words) {
    return words[Math.floor(Math.random() * words.length)];
}
  
export function checkGuess(userInput, chosenWord) {
    return userInput.join('') === chosenWord;
}

export const compareHighlight = (userInput, chosenWord) => {

    const colors = ['yellow', 'green', 'gray'];
    let chosen = [...chosenWord];

    console.log("userInput:", userInput);
    console.log("chosenWord:", chosenWord); 



    // return userInput.map((letter, index) => {
    //     if (letter == chosenWord[index]) {
    //         unmatchedLetterInChosen[index] = null;
    //         return 'green';
    //     }

    //     const matchIdx = unmatchedLetterInChosen.indexOf(letter);
    //     if (matchIdx !== -1 && matchIdx < index) {
    //         unmatchedLetterInChosen[matchIdx] = null;
    //         return 'yellow';
    //         }
    //     return 'gray';
    // });
}
  