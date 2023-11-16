import React from "react";
import './Keyboard.css';

const Keyboard = ({ handleKeyPress }) => {

    const keyboardLayout = [
        ['Q','W','E','R','T','Y','U','I','O','P'],
        ['A','S','D','F','G','H','J','K','L'],
        ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '\u232B']
    ]

     const handleOnClick = (pressed) => {

         console.log('Pressed:', pressed, typeof(pressed));
        //  const keyAsString = String(pressed);

         if (pressed === '⌫') {
           handleKeyPress({key : 'Backspace'});
         } else if (pressed === 'Enter') {
           handleKeyPress({key : 'Enter'});
         } else {
           handleKeyPress({key: pressed});
         }
       };
    
       return (
        <div className="keyboard">
          {keyboardLayout.map((row, rowIndex) => (
            <div key={rowIndex}>
              {row.map((key, keyIndex) => (
                <button key={keyIndex} onClick={() => handleOnClick(key)}>
                  {key}
                </button>
              ))}
            </div>
          ))}
        </div>
      );
};

export default Keyboard;


