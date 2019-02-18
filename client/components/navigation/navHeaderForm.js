import React from 'react';
import '../../styles/css/navigationForm.css';

const NavHeaderForm = props => (
    <div className="nav-containerForm">
        {props.children}
        <div className="nav-containerForm--white" />
    </div>
);

export default NavHeaderForm;
