import React from "react";
import Aux from '../../hoc/auxiliary';
import classes from './Layout.css'

const layout = (props) => {
    return (
        <Aux>
            <div>Toolbar , sidebar, backdrop</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout;
