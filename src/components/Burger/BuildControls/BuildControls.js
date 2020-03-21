import React from 'react';
import classes from  './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]
const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: {props.price}</p>
            {controls.map(ctrl => (
                <BuildControl key={ctrl.label} label={ctrl.label}
                              remove={() => props.ingredientRemoved(ctrl.type)}
                              disable={props.disable[ctrl.type]}
                              added={() => props.ingredientAdded(ctrl.type)} />
            ))}
            <button className={classes.OrderButton} disabled={!props.disableOrder} onClick={props.purchasing}>ORDER NOW</button>
        </div>
    )
};

export default buildControls;
