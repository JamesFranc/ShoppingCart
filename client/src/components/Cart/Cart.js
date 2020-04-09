import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import './Cart.css';

class Cart extends Component {
    handleRemove = (id) => {
        this.props.removeFromCart(id);
    }
    handleAddQuantity = (id, newQuantity) => {
        this.props.addQuantity(id, newQuantity);
    }
    handleSubtractQuantity = (id, newQuantity) => {
        this.props.subtractQuantity(id, newQuantity);
    }

    render() {
        let cartItems = this.props.items.length ? 
        (
            this.props.items.map(item => {
                return(
                    <li className="collection-item avatar" key={item.item_id}>
                        <div className="circle">
                            <img src={item.image_ref} alt={item.credit} className="responsive-img" />
                        </div>
                        
                        <span className="title">{item.name}</span>
                        <p><b>${item.price.toFixed(2)}</b></p>
                        <p>
                            <b>qty: {item.quantity}</b>
                        </p>
                        <div className="secondary-content">
                            <div className="add-remove">
                                <Link to="/"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.item_id, item.quantity + 1)}}>add_circle_outline</i></Link>
                                <Link to="/"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.item_id, item.quantity - 1)}}>remove_circle_outline</i></Link>
                            </div>
                            <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.item_id)}}><i className="material-icons">delete</i></button>
                        </div>
                    </li>
                )
            })
        ):
        (
            <p>Your cart is empty</p>
        )
        return(
            <div className="container">
                <div className="cart">
                    <ul className="collection">
                        { cartItems }
                    </ul>
                </div>
                <Recipe />
            </div>    
        )
    }
}

export default Cart