import React, { Component } from "react";
import Aux from '../../hoc/auxiliary.js';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 5,
    bacon: 10,
    cheese: 10,
    meat: 25
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 2
    };
    addIngredientHandler = (type) => {
        const oldCount =  this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updateCount;
        const additionalPrice = INGREDIENT_PRICES[type];
        debugger;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + additionalPrice;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice,
        })
    };

    removeIngredient(type) {
        const oldCount =  this.state.ingredients[type];
        if(oldCount <= 0) {
            return;
        }
        const updateCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updateCount;
        const deductionPrice = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - deductionPrice;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice,
        })
    }
    render() {
        const disableInfo = {
            ...this.state.ingredients
        };
        for(let key in disableInfo) {
            disableInfo[key] = this.state.ingredients[key] <= 0;
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    price={this.state.totalPrice}
                    ingredientAdded={(type) => this.addIngredientHandler(type)}
                    ingredientRemoved={(type) => this.removeIngredient(type)}
                    disable={disableInfo}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;
