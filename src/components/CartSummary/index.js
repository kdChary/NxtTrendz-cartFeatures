import './index.css'
import CartContext from '../../context/CartContext'

const CartSummery = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const priceList = cartList.map(item => item.quantity * item.price)

      const totalAmount = priceList.reduce((res, val) => res + val)

      return (
        <div className="cart-summery-card">
          <p className="total-price">
            Order Total: <span className="price">Rs {totalAmount}</span>
          </p>
          <p className="item-count">{cartList.length} items in cart</p>
          <button className="checkout-btn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummery
