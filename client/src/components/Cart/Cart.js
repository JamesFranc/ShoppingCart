import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import './Cart.css';

class Cart extends Component {

    handleRemove = (id) => {
        this.props.removeFromCart(id);
    }
    handleAddToCart = (id) => {
        this.props.addToCart(id);
    }
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
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
                                <Link to="/"><i className="material-icons" onClick={()=>{this.handleAddToCart(item.item_id)}}>add_circle_outline</i></Link>
                                <Link to="/"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.item_id)}}>remove_circle_outline</i></Link>
                            </div>
                            <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.item_id)}}><i className="material-icons">delete</i></button>
                        </div>
                    </li>
                )
            })
        ):
        (
            <p>Nothing</p>
        )
        return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
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