var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let product = { [item]: Math.floor((Math.random() * 100) + 1) }
  cart.push(product)
  console.log(`${item} has been added to your cart.`)
  return cart
}


function viewCart() {
  switch(cart.length) {
    case 0:
      console.log('Your shopping cart is empty.')
      break;
    case 1:
      for (var key in cart[0]) {
        if (cart[0].hasOwnProperty(key)) {
          console.log(`In your cart, you have ${key} at $${cart[0][key]}.`)
        }
      }
      break;
    case 2:
      let twoItems = ""
      for(let i = 0; i < cart.length; i++) {
        for (var key in cart[i]) {
          if (cart[i].hasOwnProperty(key)) {
            (i === 0) ? twoItems = `${key} at $${cart[i][key]}` : twoItems += ` and ${key} at $${cart[i][key]}.`
          }
        }
      }
      console.log(`In your cart, you have ${twoItems}`)
      break;
    default:
      let message = ""
      for(let i = 0; i < cart.length; i++) {
        for (var key in cart[i]) {
          if (cart[i].hasOwnProperty(key)) {
            if (cart[i] == cart[cart.length -1 ]) {
              message += ` and ${key} at $${cart[i][key]}.`
            } else {
              message += ` ${key} at $${cart[i][key]},`
            }
          }
        }
      }
      console.log("In your cart, you have" + message)
  }
}

function total() {
  let total = 0
  for(let i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
      if (cart[i].hasOwnProperty(key)) {
        total += cart[i][key]
      }
    }
  }
  return total
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
      if (cart[i].hasOwnProperty(key)) {
        if(key === item){
          cart.splice(i,1)
          return cart
        }
      }
    }
  }
  console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    console.log('Sorry, we don\'t have a credit card on file for you.')
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
