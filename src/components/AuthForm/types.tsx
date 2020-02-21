export interface IValidation {
    required?: boolean,
    email?: boolean,
    minLength?: number
}

export interface IFormControl {
    value: string,
    type: string,
    label: string,
    errorMsg: string,
    valid: boolean,
    touched: boolean,
    validation: IValidation
}


export interface IFormControls {
    email: IFormControl,
    password: IFormControl
}

export interface IAuthForm {
    isFormValid: boolean,
    isFormTouched: boolean,
    formControls: IFormControls
}

export const initialState = {
    isFormValid: false,
    isFormTouched: false,
    formControls: {
        email: {
            value: '',
            type: 'email',
            label: 'Email',
            errorMsg: 'Your input is not email...',
            valid: false,
            touched: false,
            validation: {
                required: true,
                email: true
            }
        },
        password: {
            value: '',
            type: 'password',
            label: 'Password',
            errorMsg: 'Your should input proper password...',
            valid: false,
            touched: false,
            validation: {
                required: true,
                minLength: 6
            }               
        }
    }
}


