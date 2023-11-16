import './commonStyle/common.css'; 
import './PlayGame.css';
import React, { useState } from 'react';
import DynamicGrid from './Grid/DynamicGrid.jsx';
import { initializeWord, checkGuess, compareHighlight } from './gameUtil.jsx';
import sevenEnglishWords from '../src/assets/7_letter_words.json'
import sixEnglishWords from '../src/assets/six-letter-words.json'
import Header from './Header.jsx';
import Keyboard from './Keyboard/Keyboard.jsx';
import BasicNav from './BasicNav/BasicNav.jsx';
import Button from '@mui/material/Button';


export default function PlayGame({ rows, columns, words }) {

    console.log({rows, columns, words});
    const [userInput, setUserInput] = useState(Array(columns * rows).fill(''));
    // const [selectedKey, setSelectedKey] = useState('');
    const [guesses, setGuesses] = useState(0);
    const [chosenWord, setChosenWord] = useState(() => initializeWord(words));
    const [message, setMessage] = useState('');
    const [compareResults, setCompareResults] = useState(Array(columns).fill(''));
    const [isGameOver, setIsGameOver] = useState(false); // disable input after a sucessful guess
    const [currentIndex, setCurrentIndex] = useState(0);


    // This method will handle a key press event, from on-screen keyboard or physcial keyboard
    const handleKeyPress = (event) => {
        const validInputRegex = /^(Enter|Backspace|[A-Za-z])$/;
        if (validInputRegex.test(event.key)) {
            if (event.key === 'Enter' && !isGameOver) {
                handleSubmit();
            } else {
                handleInputChange(currentIndex, event.key);
            }
        } 
    };


    const handleInputChange = (index, value) => {
        // This will handle characters and backspace

        const newInput = [...userInput];

        if (value === 'Backspace' && !isGameOver){
            let lineStart = (guesses * columns)

            if (index > lineStart) {
                // console.log('removing character ', newInput[index-1],' at ',index-1,' index')
                newInput[index - 1] = '';
                setUserInput(newInput);
                setCurrentIndex(index - 1);
            } else {
                console.log('cannot backspace')
            }
        } else if (index >= 0 && index < newInput.length) {
            let lineEnd = (guesses + 1) * columns;
            if (index < lineEnd) {
                console.log('adding character ',value,' to ',index,' index')
                newInput[index] = value;
                setUserInput(newInput);
                setCurrentIndex(index + 1);
            } else {
                console.log('cannot type beyond end of line')
            }
        }
    };
    
    // console.log("type of userInput:", typeof userInput, Array.isArray(userInput), userInput);

    const handleSubmit = () => {
        console.log("Handling Submit")

        const currentRowInput = userInput.slice(guesses * columns, (guesses + 1) * columns);
        const currentRowInputCheck = currentRowInput.join('');

        console.log("currentRowInput = ", currentRowInput);
        console.log("currentRowInputCheck = ", currentRowInputCheck);

        if (currentRowInput.length < columns || currentRowInput.includes('')) {
            setMessage("Please input all letters before submitting!");
            return;
        }

        if (!sixEnglishWords.includes(currentRowInputCheck.toUpperCase()) && !sevenEnglishWords.some(o => o.word === currentRowInputCheck.toLowerCase())) {
            console.log('Not a valid word - or not of correct length - try afain')
            setMessage("Not a valid English word, please try a different word.");
            return;
        }

        const results = compareHighlight(currentRowInput, chosenWord);        
        console.log('color is: ', results);

        if (checkGuess(currentRowInput, chosenWord)) {
            console.log('checkGuess: ', checkGuess(currentRowInput, chosenWord), "|| ", currentRowInput, " == ", chosenWord)
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
        setCurrentIndex(0);
        setChosenWord(() => initializeWord(words));
        setCompareResults(Array(columns).fill(''))
        setIsGameOver(false);
    };

    const handleResetClick = () => {
        setMessage(' ');
        resetGame();
    };

    // const handleKeyDown = (event) => {
    //     if (event.key === 'Enter') {
    //         handleSubmit();
    //     // } else if (event.key === 'Backspace') {
    //     //     // handle the backspace logic
    //     //     const currentInputIndex = guesses * columns + selectedKeyIndex; // You need to determine the selectedKeyIndex
    //     //     handleInputChange(currentInputIndex, '');
    //     // } else {
    //     //     setSelectedKey(event.key.toUpperCase());
    //     }
    // };

    return (
        <div>
            <div className="app-container" onKeyDown={handleKeyPress} /*onClick={() => setMessage('')}*/>
                <BasicNav />
                {message && <div className="message">{message}</div>}
                {(guesses === rows || message === "Congratulations! Would you like to try again?") && (
                    // <button onClick={handleResetClick}>Try Again!</button>
                    <Button onClick={handleResetClick} size="small" sx={{
                        backgroundColor: '#ee652a', // Example background color
                        fontFamily: 'Normal',
                        fontSize: '16px',
                        color: 'white', // Text color
                        '&:hover': {
                            backgroundColor: '#d34d13', // Hover state background color
                        },
                        // padding: '10px 20px', // Padding
                        borderRadius: '5px', // Border radius
                        // Add more styles as needed
                        }}>Try Again</Button>
                )}
                <DynamicGrid
                    rows={rows} 
                    columns={columns} 
                    userInput={userInput} 
                    handleInputChange={handleInputChange} 
                    currentRow={guesses} 
                    compareResults={compareResults} 
                    isGameOver={isGameOver}
                    currentIndex={currentIndex}
                />
                <div className="prompt">Please enter a word with {columns} letters in the grid.</div>
                <div className='prompt'> Press Enter to submit.</div>
                <div className="extra-info">You have {rows - guesses} guesses left.</div>
                <Keyboard 
                    handleKeyPress={handleKeyPress}
                />
                </div>
        </div>
    );
}
