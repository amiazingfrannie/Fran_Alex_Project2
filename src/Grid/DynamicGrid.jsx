import React, { useRef } from 'react';
import './DynamicGrid.css';

export default function DynamicGrid({ rows, columns, userInput, handleInputChange, currentRow, compareResults }) {
    
    const inputRefs = useRef(Array(rows * columns).fill(null));

    const focusNextInput = (index) => {
        if ((index + 1) % columns !== 0 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
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
                maxLength={1}
                pattern="[A-Za-z]"
                style={{backgroundColor: compareResults[index]}}
                ref={(el) => inputRefs.current[index] = el}
                disabled={Math.floor(index / columns) !== currentRow}  // disable input not in the current row
                />
            ))}
        </div>
    );
}
