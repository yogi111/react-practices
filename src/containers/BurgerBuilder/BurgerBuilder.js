import React, { Component } from "react";
import Aux from '../../hoc/auxiliary.js';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/Ui/modal/Modal';
import OrderSummery  from '../../components/Burger/OrderSummary/OredrSummary';
const INGREDIENT_PRICES = {
    salad: 5,
    bacon: 10,
    cheese: 10,
    meat: 20
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 5,
        purchaseAble: false,
        purchasing: false,
    };

    ContinueHandler = () => {
        alert('You continue!');
    }

    PurchaseHandler = (value) =>  {
        this.setState({purchasing: value});
    }
    UpdatePurchaseButton = (ingredients) => {
    const sum = Object.keys(ingredients).map(igKey => {
        return ingredients[igKey];
    }).reduce((sum, el) => {
        return sum + el
    },0);
    this.setState({purchaseAble: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount =  this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updateCount;
        const additionalPrice = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + additionalPrice;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice,
        });
        this.UpdatePurchaseButton(updatedIngredients);
    };

    removeIngredient = (type) => {
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
        });
        this.UpdatePurchaseButton(updatedIngredients)
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
                <Modal show={this.state.purchasing} close={() => this.PurchaseHandler(false)}>
                    <OrderSummery
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        cancel={() => this.PurchaseHandler(false)}
                        continue={() => this.ContinueHandler()}/>
                </Modal>
                <BuildControls
                    price={this.state.totalPrice}
                    ingredientAdded={(type) => this.addIngredientHandler(type)}
                    ingredientRemoved={(type) => this.removeIngredient(type)}
                    disable={disableInfo}
                    disableOrder={this.state.purchaseAble}
                    purchasing={() => this.PurchaseHandler(true)}/>

            </Aux>
        );
    }
}

export default BurgerBuilder;
