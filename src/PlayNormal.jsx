import React, { useState, useEffect } from 'react';
import DynamicGrid from './Grid/DynamicGrid.jsx';
import { initializeWord, checkGuess, compareHighlight } from './gameUtil.jsx';
import englishWords from '../src/assets/six-letter-words.json'
import Header from './Header.jsx';

export default function PlayNormal({ rows, columns, words }) {

    console.log({rows, columns, words});
    const [userInput, setUserInput] = useState(Array(columns * rows).fill(''));
    const [guesses, setGuesses] = useState(0);
    const [chosenWord, setChosenWord] = useState(() => initializeWord(words));
    const [message, setMessage] = useState('');
    const [compareResults, setCompareResults] = useState(Array(columns).fill(''));
    const [isGameOver, setIsGameOver] = useState(false); // disable input after a sucessful guess


    const handleInputChange = (index, value) => {
        const newInput = [...userInput];
        if (index >= 0 && index < newInput.length) {
            newInput[index] = value;
            setUserInput(newInput);
        }
    };
    
    // console.log("type of userInput:", typeof userInput, Array.isArray(userInput), userInput);

    const handleSubmit = () => {

        const currentRowInputCheck = userInput.slice(guesses * columns, (guesses + 1) * columns).join('');

        if (!englishWords.includes(currentRowInputCheck.toUpperCase())) {
            setMessage("Not a valid English word, please try a different word.");
            return;
        }

        const currentRowInput = userInput.slice(guesses * columns, (guesses + 1) * columns);
        console.log(currentRowInput)

        const results = compareHighlight(currentRowInput, chosenWord);        
        console.log('color is: ', results);

        if (currentRowInput.length < columns || currentRowInput.includes('')) {
            setMessage("Please input all letters before submitting!");
            return;
        }

        if (checkGuess(currentRowInput, chosenWord)) {
            setCompareResults(prev => [...prev.slice(0, guesses * columns), ...results]);
            setMessage("Congratulations! Would you like to try again?");
            setGuesses(prev => prev + 1);
            setIsGameOver(true);
        } else if (guesses < rows - 1) {
            setCompareResults(prev => [...prev.slice(0, guesses * columns), ...results]);
            setMessage("Try again!");
            setGuesses(prev => prev + 1);
        } else {
            setCompareResults(prev => [...prev.slice(0, guesses * columns), ...results]);
            setMessage("You've failed! The correct word was: " + chosenWord);
            setGuesses(prev => prev + 1);
            setIsGameOver(true);
        }
    };

    const resetGame = () => {
        setUserInput(Array(columns*rows).fill(''));
        setGuesses(0);
        setChosenWord(() => initializeWord(words));
        setCompareResults(Array(columns).fill(''))
        setIsGameOver(false);
    };

    const handleResetClick = () => {
        resetGame();
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className="App" onKeyDown={handleKeyDown} onClick={() => setMessage('')} >
            <Header/>
            <div className="prompt">Please enter a word with {columns} letters in the grid.</div>
            {message && <div className="message">{message}</div>}
            <DynamicGrid rows={rows} columns={columns} userInput={userInput} handleInputChange={handleInputChange} currentRow={guesses} compareResults={compareResults} isGameOver={isGameOver}/>
            <div>press Enter to submit. you have {rows - guesses} guesses left.</div>
            {(guesses === rows || message === "Congratulations! Would you like to try again?") && (
                <button onClick={handleResetClick}>Try Again!</button>
            )}
        </div>
    );
}
