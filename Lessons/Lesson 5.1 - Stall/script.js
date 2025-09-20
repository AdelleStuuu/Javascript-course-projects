// use variables to save the cart quantity 
let cartQuantity = 0;

//adds a function showing the current qunatity of the cart
function showCartQuantity() {
    console.log('Cart Quantity:', cartQuantity);
}

// adds 1 item to the cart
function addToCart() {
    cartQuantity++;
    console.log('Cart Quantity:', cartQuantity);
}

//adds two item to the cart
function addTwo() {
    cartQuantity += 2;
    console.log('Cart Quantity:', cartQuantity);
}

//removes two item from the cart
function subtractTwo() {
    // states that if the cart quantity is less than 2, it will not remove anything
    if (cartQuantity <= 1) {
        console.log('not a valid input');
    } else if (cartQuantity > 0) {
        cartQuantity -= 2;
        console.log('Cart Quantity:', cartQuantity);
    } else {
        console.log('not a valid input');
    }
}

// adds three items to the cart
function addThree() {
    cartQuantity += 3;
    console.log('Cart Quantity:', cartQuantity);
}

function subtractThree() {
    // states that if the cart quantity is less than 3, it will not remove anything
    if (cartQuantity <= 2) {
        console.log('not a valid input');
    } else if (cartQuantity > 0) {
        cartQuantity -= 3;
        console.log('Cart Quantity:', cartQuantity);
    } else {
        console.log('not a valid input');
    }
}

//add four items to the cart
function addFour() {
    cartQuantity += 4;
    console.log('Cart Quantity:', cartQuantity);
}

//remove four items in the cart
function subtractFour() {
    // states that if the cart quantity is less than 4, it will not remove anything
    if (cartQuantity <= 3) {
        console.log('not a valid input');
    } else if (cartQuantity > 0) {
        cartQuantity -= 4;
        console.log('Cart Quantity:', cartQuantity);
    } else {
        console.log('not a valid input');
    }
}

//adds five items to the cart
function addFive() {
    cartQuantity += 5;
    console.log('Cart Quantity:', cartQuantity);
}

//remove five items in the cart
function subtractFive() {
    // states that if the cart quantity is less than 5, it will not remove anything
    if (cartQuantity <= 4) {
        console.log('not a valid input');
    } else if (cartQuantity > 0) {
        cartQuantity -= 5;
        console.log('Cart Quantity:', cartQuantity);
    } else {
        console.log('not a valid input');
    }
}

//removes one item from the cart
function removeFromCart() {
    cartQuantity--;
    console.log('Cart Quantity:', cartQuantity);
}

function clearCart() {
    cartQuantity = 0;
    console.log('Cart Quantity:', cartQuantity);
}