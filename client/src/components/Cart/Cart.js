import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Cart extends Component {

    render() {
        let addedItems = this.props.items.length ? 
        (
            this.props.items.map(item => {
                return(
                    <li className="collection-item avatar" key={item.id}>
                        <div className="circle">
                            <img src={item.ref} alt={item.title} className="responsive-img" />
                        </div>
                        <span className="title">{item.title}</span>
                        <p><b>Price: {item.price}</b></p>
                        <p>
                            <b>Quantity: {item.quantity}</b>
                        </p>
                        <div className="secondary-content">
                            <div className="add-remove">
                                <Link to="/cart"><i className="material-icons">add_circle_outline</i></Link>
                                <Link to="/cart"><i className="material-icons">remove_circle_outline</i></Link>
                            </div>
                            <button className="waves-effect waves-light btn pink remove">Remove</button>
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
                        { addedItems }
                    </ul>
                </div>
            </div>    
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems
    }
}

export default connect(mapStateToProps)(Cart)