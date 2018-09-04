import React, { Component } from 'react';
import styles from '../styles.css';

/*
* Component displays Cart Items
*/

class Cart extends Component {
    constructor(props){
        super(props);        
        
        this.state = {
            cartItems: this.props.selectProduct.cartItems,
            cartSize: this.props.selectProduct.cartSize,
            showPopup: false
        }
        this.updateCart = this.updateCart.bind(this);
        this.showPopup = this.showPopup.bind(this);
        this.generateKey = this.generateKey.bind(this);
    }

    /*
     * Updating CartItems on addition or updation of cart
     */
    componentWillReceiveProps(nextProps){
        const cartItems = nextProps.selectProduct.cartItems;
        let cartSize = nextProps.selectProduct.cartSize;
        this.setState({cartItems, cartSize});
    }

    /*
     * Generating unique key
     */
    generateKey(pre) {
        return `${ pre }_${ new Date().getTime() }`;
    }

    /*
     * Updating cart on changing the quantity from cart list
     */
    updateCart(e){
        e.preventDefault();
        console.log(e.key);
        let id = e.target.name;
        let val = Number(e.target.value);
        console.log(val);
        const cartItems = this.state.cartItems;
        let cartSize = this.state.cartSize;
        if(id in cartItems){
            console.log(cartItems[id]['count']);
            if(val < cartItems[id]['count']){
                cartSize -= (cartItems[id]['count']-val);
            }else{
                cartSize += (val-cartItems[id]['count']);
                console.log(cartSize);
            }
            cartItems[id]['count'] = val;
            if(val <= 0){
                delete cartItems[id];
            }
        }
        this.setState({cartItems : cartItems, cartSize});
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('cartSize', JSON.stringify(cartSize));
    }

    showPopup(){
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render() {
        let isEmpty = this.state.cartSize === 0 ? styles.faShoppingCart : {...styles.faShoppingCart,'color': 'red'};
        let {cartItems, cartSize} = this.state;
        console.log(cartSize);
    return (
      <div>
          <div style={styles.cart}>
            <i className="fa fa-shopping-cart" style={isEmpty} onClick={this.showPopup}></i>
            <span style={{'fontSize': '10px', 'color': 'red', 'display': 'inline-grid'}}>{cartSize}</span>
            {this.state.showPopup ? 
            (<div style={styles.popup}>
            <div style={styles.popupInner}>
            {Object.keys(cartItems).map((item) => 
                (
                    <div style={styles.cartPopup} key={this.generateKey(cartItems[item].product.selectedSource.id)}>
                        <div style={styles.cartList}>
                        <p style={styles.inlineBlock}>{this.state.cartItems[item].product.productDetails.title}</p>
                            <img style={styles.cartListImg} src={this.state.cartItems[item].product.productDetails.image} alt="not found" />
                        </div>
                        <div style={styles.cartList}>
                            <h4>Size: {this.state.cartItems[item].product.selectedSize}</h4>
                            <form >
                                <span>{this.state.cartItems[item].product.selectedSource.discounted_price}    </span>
                                <input type="text" value={this.state.cartItems[item].count} name={item} onChange={this.updateCart} />   
                            </form>                                     
                        </div>
                    </div>
                )
            )}
            <button onClick={this.showPopup}>close me</button>
            </div>
        </div>)
            : null
            }
        </div>
      </div>
    )
  }
}

export default Cart;