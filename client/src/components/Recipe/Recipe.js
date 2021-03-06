import React, { Component } from 'react'
import { connect } from 'react-redux'

class Recipe extends Component {

    render(){
        
        return(
            <div className="container">
                <div className="collection">
                    <span className="collection-item"><b>Total: ${this.props.total}</b></span>
                </div>
                <div className="checkout">
                    <button className="waves-effect waves-light btn">Checkout</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=> {
    return {
        addedItems: state.addedItems,
        total: state.total
    }
}

export default connect(mapStateToProps)(Recipe);