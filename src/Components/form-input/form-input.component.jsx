import React from 'react';
import './form-input.styles.css'

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div>
            <div>
                {label}:
            </div>
            <div>
                <input onChange={handleChange} {...otherProps} />
            </div>
        </div>
    );
}

export default FormInput;