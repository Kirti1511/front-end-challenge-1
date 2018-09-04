const ul = {
    'listStyleType': 'none',
    'padding': '0',
    'border': '1px solid #ddd',
};

const ul_li = {
    'padding': '8px 16px',
    'borderBottom': '1px solid #ddd',
};

const onHover = {
    'padding': '1em',
    'background': '#00FF00'
}

const inlineBlock = {
    'display': 'inline-block',
    'width': '47%',
    'verticalAlign': 'middle',
    'padding': '1em',
    'boxSizing': 'border-box'
};

const div = {
    'padding': '1em'
};

const notAvailable = {
    'color': 'grey',
    'textDecoration': 'none',
    'pointerEvents': 'none',
}

const productDiv = {
    'marginTop': '100px',
  }

const faShoppingCart = {
    'color': 'aliceblue',
    'fontSize': '36px'
}

const cart = {
    'position': 'fixed',
    'top': '5%',
    'zIndex:': '1',
    'float': 'right',
    'right': '5%'
}

const popup = {
    'position': 'fixed',
    'width': '100%',
    'height': '100%',
    'top': '0',
    'left': '0',
    'right': '0',
    'bottom': '0',
    'margin': 'auto',
    'backgroundColor': 'rgba(0,0,0, 0.5)',
    /* display: none; */
    /* z-index: 100; */
    'overflow':'auto'
}

const popupInner = {
    'position': 'absolute',
  'left': '20%',
  'top': '20%',
  'margin': 'auto',
  'background': 'white',
  'padding': '1em'
}

const cartPopup = {
    'margin': '1em'
}

const cartList = {
    'width': '600px',
    'height': '100px',
    'overflow': 'hidden',
    'border': '1px solid black',
    'zIndex': '1000',
    'display': 'inline-block',
    'width': '47%',
    'verticalAlign': 'middle',
    'padding': '1em',
    'boxSizing': 'border-box'
}

const cartListImg = {
    'height': '100%',
    'padding': '1em',
    'box-sizing': 'border-box',
    'float': 'left'
}

export default { ul, ul_li, 
    inlineBlock, div, 
    notAvailable, onHover, 
    productDiv, 
    faShoppingCart, cart, 
    popup, popupInner, cartPopup,
    cartList, cartListImg
};

