import React from 'react';
import BurgerMenu from './burgerMenu';

import '../../styles/css/navigation.css';

const NavHeader = () => (
    <div>
        <BurgerMenu pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <div className="nav-container">
            <div className="nav-container--white"></div>
        </div>
    </div>
);

export default NavHeader;
