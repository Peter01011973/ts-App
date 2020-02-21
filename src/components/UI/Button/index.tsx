import React from 'react';
import './Button.css';

interface Props {
    type: string,
    disabled: boolean,
    onClick: any,
    children: string 
}

const Button: React.FC<Props> = ({type, onClick, disabled, children}) => {
    const _class = ['Button', type]
    
    return (
        <button 
            className={_class.join(' ')}
            onClick = {onClick}
            disabled = {disabled}
        >
            {children}
        </button>
    )
}

export default Button
