import React, { useRef } from 'react';
import './DynamicGrid.css';

export default function DynamicGrid({ rows, columns, userInput, handleInputChange, currentRow, compareResults, isGameOver }) {
    
    const inputRefs = useRef(Array(rows * columns).fill(null));

    const focusNextInput = (index) => {
        const nextIndex = index + 1;
        if (nextIndex < rows * columns && inputRefs.current[nextIndex]) {
            inputRefs.current[nextIndex].focus();
        }
    };
    
    const handleKeyDown = (event, index) => {
        if (event.key === 'Backspace') {
            event.preventDefault(); 
            const currentInput = userInput[index];
            let targetIndex = currentInput ? index : index - 1;
            targetIndex = Math.max(targetIndex, 0);
            handleInputChange(targetIndex, '');
            inputRefs.current[targetIndex]?.focus();
        }
    };
    
    return (
        <div className="grid" style={{ gridTemplateRows: `repeat(${rows}, 1fr)`, gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
            {Array(rows * columns).fill().map((_, index) => (
                <input
                key={index}
                value={userInput[index]}
                onChange={(e) => {
                    if (/^[A-Za-z]$/.test(e.target.value)) {
                        handleInputChange(index, e.target.value);
                        if (e.target.value.length >= 1) {
                            focusNextInput(index);
                        }
                    } else {
                        e.target.value = '';  
                    }
                }}     
                onKeyDown={(e) => handleKeyDown(e, index)}           
                maxLength={1}
                pattern="[A-Za-z]"
                style={{backgroundColor: compareResults[index]}}
                ref={(el) => inputRefs.current[index] = el}
                disabled={isGameOver || Math.floor(index / columns) !== currentRow}  // disable input not in the current row
                />
            ))}
        </div>
    );
}
