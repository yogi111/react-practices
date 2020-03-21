import React from "react";
import BurgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={BurgerLogo} alt="loading"/>
        </div>
    );
}

export default logo;
