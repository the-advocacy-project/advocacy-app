import React from 'react';
import "../../styles/scss/styles.scss"
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
    >
    {text}
  </button>

);
