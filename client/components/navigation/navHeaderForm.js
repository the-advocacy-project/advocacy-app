import React from 'react';
import BurgerMenu from './burgerMenu';

import '../../styles/css/navigationForm.css';

const NavHeaderForm = props => (
    <div>
    <BurgerMenu pageWrapId={"page-wrap"} outerContainerId={"App"} />
    <div className="nav-containerForm">
        {props.children}
        <div className="nav-containerForm--green" />
        <div className="nav-containerForm--white" />
    </div>
    </div>
);

export default NavHeaderForm;
