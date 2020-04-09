import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './Cart/Cart.js'
import { addToCart, removeItem, addQuantity, subtractQuantity, getCatalog, getCart } from '../actions/cartActions';
class Home extends Component {
    componentDidMount() {
        this.props.getCatalog();
        this.props.getCart();
    }
    render (){
        let itemList = this.props.items.map(item => {
            let itemInCart = this.props.itemsInCart.find((cartItem) => {
                return cartItem.item_id === item.item_id
            });
            if (itemInCart === undefined) { 
                return(
                    <div className="col s4 m6">
                        <div className="card hoverable" key={item.item_id}>
                            <div className="card-image">
                                <img className="responsive-img" src={item.image_ref} alt={item.credit}></img>
                                <span className="card-title">{item.name}</span>
                                <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.props.addToCart(item.item_id)}}><i className="material-icons">add</i></span>
                            </div>
                            
                            <div className="card-content">
                                <p className="truncate">{item.description}</p>
                                <p><b>Price: ${item.price.toFixed(2)}</b></p>
                            </div>
                        </div>
                     </div>
                )
            } 
            else {
                return (
                    <div className="col s4 m6">
                    <div className="card hoverable" key={item.item_id}>
                        <div className="card-image">
                            <img className="responsive-img" src={item.image_ref} alt={item.credit}></img>
                            <span className="card-title">{item.name}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.props.addQuantity(item.item_id, itemInCart.quantity + 1)}}><i className="material-icons">add</i></span>
                        </div>
                        
                        <div className="card-content">
                            <p className="truncate">{item.description}</p>
                            <p><b>Price: ${item.price.toFixed(2)}</b></p>
                        </div>
                    </div>
                 </div>
                )
            }
        })        
        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="row">
                <div className="col s12 m6">
                    <div className="row center-cols center-align">
                        { itemList }
                    </div>
                </div>
                <div className="col s12 m6">
                    <Cart items={this.props.itemsInCart} removeFromCart={this.props.removeItem} addQuantity={this.props.addQuantity} subtractQuantity={this.props.subtractQuantity}/>
                </div>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        itemsInCart: state.itemsInCart,
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCatalog: () => { dispatch(getCatalog()) },
        getCart: () => { dispatch(getCart()) },
        addToCart: (id) => { dispatch(addToCart(id)) },
        addQuantity: (id, newQuantity) => { dispatch(addQuantity(id, newQuantity)) },
        subtractQuantity: (id, newQuantity) => {dispatch(subtractQuantity(id, newQuantity)) },
        removeItem: (id) => { dispatch(removeItem(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);