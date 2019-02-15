import React from 'react';

// export const Text = {
//   NEXT: 'primary',
//   WARNING: 'warning',
//   DANGER: 'danger',
//   SUCCESS: 'success',
// }

export const Button = ({
    text, 
    onClick,
    disabled,
    className
}) => (
    <button
        disabled={disabled}
        onClick={onClick}
        classnames={className} >
        {text}
    </button>
);
