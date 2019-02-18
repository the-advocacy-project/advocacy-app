import React from 'react';
import "../../styles/css/button.css"
// export const Text = {
//   NEXT: 'pimary',
//   WARNING: 'warning',
//   DANGER: 'danger',
//   SUCCESS: 'success',
// }

export const Button = ({ 
    text, 
    onClick, 
    disabled, 
 
}) => (

    <button
        disabled={disabled}
        onClick={onClick}
        className="buttons"
    >
        {text}
    </button>

);


export const Begin = ({

    text, 
    onClick, 
    disabled, 

}) => (

    <button
        disabled={disabled}
        onClick={onClick}
        className="begin"
    > 
        {text}
    </button>  );