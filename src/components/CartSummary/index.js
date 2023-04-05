// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let amount = 0
      cartList.forEach(each => {
        amount += each.price * each.quantity
      })

      return (
        <div className="container">
          <h1 className="h1">
            Order Total: <span className="amt">{amount}/-</span>
          </h1>
          <p className="p1">{cartList.length} Items in cart</p>
          <button type="button" className="btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
