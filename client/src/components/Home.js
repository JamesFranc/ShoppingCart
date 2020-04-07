import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './Cart/Cart'
import { addToCart, removeItem, addQuantity, subtractQuantity } from './actions/cartActions';
class Home extends Component {

    // handleClick = (id) => {
    //     this.props.addToCart(id);
    // }

    render (){
        let itemList = this.props.items.map(item => {
            return(
                    <div className="col s4 m6">
                        <div className="card hoverable" key={item.id}>
                            <div className="card-image">
                                <img className="responsive-img" src={item.ref} alt={item.credit}></img>
                                <span className="card-title">{item.title}</span>
                                <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.props.addToCart(item.id)}}><i className="material-icons">add</i></span>
                            </div>
                            
                            <div className="card-content">
                                <p className="truncate">{item.desc}</p>
                                <p><b>Price: ${item.price.toFixed(2)}</b></p>
                            </div>
                        </div>
                     </div>
            )
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
                    <Cart items={this.props.itemsInCart} removeFromCart={this.props.removeItem} addToCart={this.props.addToCart} subtractQuantity={this.props.subtractQuantity}/>
                </div>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        itemsInCart: state.itemsInCart
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) },
        subtractQuantity: (id) => {dispatch(subtractQuantity(id))},
        removeItem: (id) => { dispatch(removeItem(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);