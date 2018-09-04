import React, { Component } from 'react';
import Source from './Sources';
import styles from '../styles.css';
import Cart from './Cart';

/**
 * Component allows to select sizes and corresponding source.
 */
class Sizes extends Component {
    constructor(props){
        super(props);
         this.state = {
            productDetails : this.props.details,
            selectedSize: 'S',
            selectedSource: {},
            cartItems: {},
            cartSize: 0
        }
        this.onSizeSelect = this.onSizeSelect.bind(this);
        this.getMinPrice = this.getMinPrice.bind(this);
        this.selectSource = this.selectSource.bind(this);
        this.addToCart = this.addToCart.bind(this);
        
    }

    /*
     * Getting CartItems from localStorage
     */
    componentWillMount() {
        const minPrice = this.getMinPrice(this.state.selectedSize);
        const cartItems= localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : {};
        const cartSize = localStorage.getItem('cartSize') ? JSON.parse(localStorage.getItem('cartSize')) : 0;
        this.setState({showPrice: minPrice.discounted_price, selectedSource: minPrice, cartItems: cartItems, cartSize});
    }

    /*
     * Updating Minimun price to show on size select
     */
    onSizeSelect(e) {
        e.preventDefault();
        const minPrice = this.getMinPrice(e.target.value);
        this.setState({selectedSize: e.target.value, selectedSource: minPrice});
    }

    /*
     * Getting source with minimun price.
     */
    getMinPrice(val){
        const sizeDetails = this.props.details.sizes[val];
        const min = sizeDetails.sources.reduce((prev, current) => (Number(prev.discounted_price) > Number(current.discounted_price)) ? current : prev);
        return min;
    }

    /*
     * Updating selected source.
     */
    selectSource(e) {
        const selectedSource = JSON.parse(e.target.getAttribute('source'));
        this.setState({selectedSource: selectedSource, showPrice: selectedSource.discounted_price});

    }

    /*
     * Adding product to the cart.
     */
    addToCart(){      
        const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : {};
        let cartSize = localStorage.getItem('cartSize') ? JSON.parse(localStorage.getItem('cartSize')) : 0;
        cartSize ++;
        if(this.state.selectedSource.id in cartItems){
            cartItems[this.state.selectedSource.id]['count'] ++;
        }else{
            cartItems[this.state.selectedSource.id] = {};
            cartItems[this.state.selectedSource.id]['count'] = 1;
            cartItems[this.state.selectedSource.id]['product'] = this.state;
        }
        this.setState({cartItems: cartItems, cartSize});
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('cartSize', JSON.stringify(cartSize));
    }

    
    render() {
        let {
            productDetails,
            selectedSize,
            selectedSource
        } = this.state;
        let {details} = this.props;
        const sizeDetails = details.sizes[selectedSize];
        let sizeDetailsElement = (
        <ul style={styles.ul}>
            {sizeDetails.sources.map((source) => {
                return (
                    <li style={styles.ul_li} key={source.id}> 
                        <Source onClick={this.selectSource} source={source}/>
                    </li>
                )
            })}
        </ul>
    );
    
    return (
        <div>
            <select  onChange={this.onSizeSelect} value={selectedSize}>
                { Object.keys(details.sizes).map((size) => {
                        return (
                            <option key={size}>{size}</option>
                        )
                    })
                }
            </select>
            <div style={styles.div}>{selectedSource.discounted_price}</div>
            <button onClick={this.addToCart} disabled={!selectedSource.isavailable || !selectedSource.stock}>Add to Cart</button>
            <Cart selectProduct={this.state}/>
            {sizeDetailsElement}
        </div>
    )
  }
}

export default Sizes;