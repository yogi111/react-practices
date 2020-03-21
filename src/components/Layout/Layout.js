import React from "react";
import Aux from '../../hoc/auxiliary';
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => {
    return (
        <Aux>
            {/*<div>Toolbar , sidebar, backdrop</div>*/}
            <Toolbar/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout;
