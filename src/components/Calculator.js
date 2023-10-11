import React, { useState } from 'react';
import './calculator.css';
const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                setDisplayValue(eval(displayValue).toString());
            } catch (error) {
                setDisplayValue('Error');
            }
        }
        else if (value === 'erase') {
            setDisplayValue((prevValue) => prevValue.slice(0, -1));
        }
        else if (value === 'clear') {
            setDisplayValue("");
        }
        else {
            setDisplayValue((prevValue) => prevValue + value);
        }
    };


    return (
        <>
                <div className="mc">
                    <div className="c1">
                        {displayValue}
                    </div>
                    <div className="c2">
                        <button className="number" onClick={() => handleButtonClick('7')}>7</button>
                        <button className="number" onClick={() => handleButtonClick('8')}>8</button>
                        <button className="number" onClick={() => handleButtonClick('9')}>9</button>
                        <button className="operator" onClick={() => handleButtonClick('/')}>/</button>
                        <button className="number" onClick={() => handleButtonClick('4')}>4</button>
                        <button className="number" onClick={() => handleButtonClick('5')}>5</button>
                        <button className="number" onClick={() => handleButtonClick('6')}>6</button>
                        <button className="operator" onClick={() => handleButtonClick('*')}>*</button>
                        <button className="number" onClick={() => handleButtonClick('1')}>1</button>
                        <button className="number" onClick={() => handleButtonClick('2')}>2</button>
                        <button className="number" onClick={() => handleButtonClick('3')}>3</button>
                        <button className="operator" onClick={() => handleButtonClick('-')}>-</button>
                        <button className="operator" onClick={() => handleButtonClick('.')}>.</button>
                        <button className="number" onClick={() => handleButtonClick('0')}>0</button>
                        <button className="operator" onClick={() => handleButtonClick('=')}>=</button>
                        <button className="operator" onClick={() => handleButtonClick('+')}>+</button>
                        <button className="erase" onClick={() => handleButtonClick('erase')}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-backspace-fill" viewBox="0 0 16 16">
                            <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z" />
                        </svg></button>
                        <button className="clear" onClick={() => handleButtonClick('clear')}>C</button>
                    </div>
                </div>
        </>

    );
};

export default Calculator;
