import React, { Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerMaker extends Component{
    state = {
        ingredients: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice: 4,
        purchasing: false
    }

    addIngredientHandler = (type) =>{
        const updatedCount = this.state.ingredients[type] + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const newPrice = this.state.totalPrice + INGREDIENTS_PRICES[type]; 
        this.setState({ingredients:updateIngredients, totalPrice:newPrice})
    }
    
    removeIngredientHandler = (type) =>{
        if (this.state.ingredients[type] <= 0){
            return;
        }
        const updatedCounted = this.state.ingredients[type] - 1;
        
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCounted;
        
        const newPrice = this.state.totalPrice - INGREDIENTS_PRICES[type];
        this.setState({ingredients:updateIngredients, totalPrice:newPrice})
    }

    purchaseHandler = () =>{
        this.setState({purchasing:true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing:false})
    }
    purchaseConfirmHandler = () => {
        alert('You confirmed!!!')
    }

    render(){
        const disabledInfo = {...this.state.ingredients}
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return(
            <Auxiliary>
                <Modal show ={this.state.purchasing} modalClosed = {this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients= {this.state.ingredients}
                        price = {this.state.totalPrice}
                        cancel = {this.purchaseCancelHandler}
                        confirm = {this.purchaseConfirmHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    more={this.addIngredientHandler} 
                    less={this.removeIngredientHandler}
                    disabled= {disabledInfo}
                    price = {this.state.totalPrice}
                    clicked = {this.purchaseHandler}
                />
            </Auxiliary>
        );
    }
}

export default BurgerMaker;