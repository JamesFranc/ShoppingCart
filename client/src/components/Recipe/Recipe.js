import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { addShipping } from './actions/cartActions'
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

// const mapDispatchToProps = (dispatch)=>{
//     return {
//         addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
//         substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
//     }
// }

export default connect(mapStateToProps)(Recipe);