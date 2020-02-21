import React, { useState } from 'react';
import './AuthForm.css';
import { initialState, IFormControls, IValidation, IAuthForm } from './types';
import Input from '../UI/Input';
import { validateEmail } from '../../Utils/EmailValidate';
import Button from '../UI/Button';

interface Props {
    authSubmitHandler: (email: string, password: string) => void,
    isLoading: boolean
}

const AuthForm: React.FC<Props> = ({authSubmitHandler, isLoading}) => {
    const [formObject, setFormObject] = useState(initialState as IAuthForm)

    const validateControl = (value: string, validation: IValidation): boolean => {
        let isValid: boolean = true;
        if (validation.required) { isValid = value.trim() !== '' && isValid }
        if (validation.minLength) { isValid = value.trim().length >= validation.minLength && isValid }
        if (validation.email) { isValid = validateEmail(value) && isValid }
        return isValid
    }

    // const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>, controlName: string) => {
    const onChangeHandler = (event: any) => {
        const { value } = event.target;
        const name: keyof IFormControls = event.target.name;
        let newFormObject: IAuthForm = {
            ...formObject,
            formControls: {
                ...formObject.formControls,
                [name]: {
                    ...formObject.formControls[name],
                    value,
                    touched: true,
                    valid: validateControl(value, formObject.formControls[name].validation),
                },
            }
        }

        let isFormValid = true;
        let isFormTouched = true;
        Object.keys(newFormObject.formControls).forEach(
            (item) => {
                isFormValid = newFormObject.formControls[item as keyof IFormControls].valid && isFormValid;
                isFormTouched = newFormObject.formControls[item as keyof IFormControls].touched && isFormTouched
            }
        );
        newFormObject.isFormValid = isFormValid;
        newFormObject.isFormTouched = isFormTouched;
        setFormObject({ ...newFormObject });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        authSubmitHandler(formObject.formControls['email'].value, formObject.formControls['password'].value);
    }

    const renderObject = Object.keys(formObject.formControls).map((controlName, index) => {
        const { type, value, label, errorMsg, valid, touched, validation } = formObject.formControls[controlName as keyof IFormControls];

        return (
            <Input
                key={index}
                name={controlName}
                value={value}
                type={type}
                label={label}
                errorMsg={errorMsg}
                valid={valid}
                touched={touched}
                shouldValidate={!!validation}
                onChange={(event) => onChangeHandler(event)}
            />
        )
    })

    return (
        <div>
            <form className='login__form'>
                {renderObject}
                <Button type='success' disabled={!(formObject.isFormValid && formObject.isFormTouched) || isLoading} onClick={(event: React.FormEvent<HTMLFormElement>) => { handleSubmit(event) }}>Submit</Button>
            </form>
        </div>
    )
}

export default AuthForm
