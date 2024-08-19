import React, { ChangeEvent, useRef } from 'react';

interface InputProps {
    label?: string;
    type?: string;
    placeholder?: string;
    onInputChange?: (value:any) => void;
}

const Input: React.FC<InputProps> = ({ label, type = 'text', placeholder, onInputChange }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (onInputChange && inputRef.current) {
            onInputChange(inputRef.current.value);
        }
    };

    return (
        <div>
            {label && <label>{label}</label>}
            <input
                ref={inputRef}
                type={type}
                placeholder={placeholder}
                onChange={handleInputChange}
            />
            
        </div>
    );
};

export default Input;
