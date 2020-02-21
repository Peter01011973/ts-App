import React from 'react';
import './Input.css';

interface Props {
    type: string,
    value: string, 
    label: string, 
    errorMsg: string, 
    valid: boolean, 
    touched: boolean, 
    shouldValidate: boolean,
    name: string,
    // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onChange: (event: any) => void
}

const Input: React.FC<Props> = ({type = 'text', value, label, errorMsg, valid, touched, shouldValidate, onChange, name}) => {
    
    const isInvalid: boolean = !valid && touched && shouldValidate;
    const htmlFor: string = `${label}-${Math.random()}`;
    let _class: string = 'Input';

    if (isInvalid) _class += ' invalid';

    return (
        <div className={_class}>
            <label htmlFor={htmlFor}>{label}
                <input 
                    name = {name}
                    id = {htmlFor}
                    type = {type}
                    value = {value}
                    onChange = {onChange}
                />
            </label>  
            {isInvalid && <span>{errorMsg}</span>}         
        </div>
    )
}

export default Input
