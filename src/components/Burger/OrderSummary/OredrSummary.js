import React from "react";
import Aux from '../../../hoc/auxiliary';
import Button from '../../Ui/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{testTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}</li>
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients.</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price:</strong>{props.price}</p>
            <p>Continue to checkout ?</p>
            <Button btnType="Danger" clicked={props.cancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.continue} >CONTINUE</Button>
        </Aux>
    )
}
export default orderSummary;
