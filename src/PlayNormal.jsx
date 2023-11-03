import React, { useState, useEffect } from 'react';
import DynamicGrid from './Grid/DynamicGrid.jsx';
import { initializeWord, checkGuess, compareHighlight } from './gameUtil.jsx';

export default function PlayNormal({ rows, columns, words }) {

    console.log({rows, columns, words});
    const [userInput, setUserInput] = useState(Array(columns).fill(''));
    const [guesses, setGuesses] = useState(0);
    const [chosenWord, setChosenWord] = useState(() => initializeWord(words));
    const [message, setMessage] = useState('');
    const [compareResults, setCompareResults] = useState(Array(columns).fill(''));


    const handleInputChange = (index, value) => {
        const newInput = [...userInput];
        newInput[index] = value;
        setUserInput(newInput);
    };
    // console.log("type of userInput:", typeof userInput, Array.isArray(userInput), userInput);

    // useEffect(() => {
    //     console.log(userInput);
    // }, [userInput]);

    const handleSubmit = () => {

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
        } else if (guesses < rows - 1) {
            setCompareResults(prev => [...prev.slice(0, guesses * columns), ...results]);
            setMessage("Try again!");
            setGuesses(prev => prev + 1);
        } else {
            setCompareResults(prev => [...prev.slice(0, guesses * columns), ...results]);
            setMessage("You've failed! The correct word was: " + chosenWord);
            setGuesses(prev => prev + 1);
        }
    };

    const resetGame = () => {
        setUserInput(Array(columns*rows).fill(''));
        setGuesses(0);
        setChosenWord(() => initializeWord(words));
        setCompareResults(Array(columns).fill(''))
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
            <div className="prompt">Please enter a word with {columns} letters in the grid.</div>
            {message && <div className="message">{message}</div>}
            <DynamicGrid rows={rows} columns={columns} userInput={userInput} handleInputChange={handleInputChange} currentRow={guesses} compareResults={compareResults}/>
            <div>press Enter to submit. you have {rows - guesses} guesses left.</div>
            {(guesses === rows || message === "Congratulations! Would you like to try again?") && (
                <button onClick={handleResetClick}>Try Again!</button>
            )}
        </div>
    );
}
