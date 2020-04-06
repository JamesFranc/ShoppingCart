import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions';
class Home extends Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render (){
        let itemList = this.props.items.map(item => {
            return(
            <div className="container">
                <div className="row">
                    <div className="col s12 offset-m3 m6">
                        <div className="card" key={item.id}>
                            <div className="card-image">
                                <img src={item.ref} alt={item.credit}></img>
                                <span className="card-title">{item.title}</span>
                                <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                            </div>
                            
                            <div className="card-content">
                                <p>{item.desc}</p>
                                <p><b>Price: ${item.price}</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        })
        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    { itemList }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);