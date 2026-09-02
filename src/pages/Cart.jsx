import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

function Cart() {
  const { cart, total, setCart } = useCart()
  return (
    <div style={{ background: '#FFFBF0', minHeight: '100vh', padding: '60px', fontFamily: "'Inter', sans-serif" }}>
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: '300', fontSize: '42px', color: '#3B2316' }}>Your Cart ({cart.length})</h1>
      {cart.length === 0 ? <p>Your cart is empty. <Link to="/shop">Go shop</Link></p> : <>
        {cart.map((item,i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '16px 0' }}>
            <span>{item.name}</span><span>R{item.price}</span>
          </div>
        ))}
        <h3 style={{ marginTop: '24px' }}>Total: R{total}</h3>
        <button style={{ marginTop: '20px', background: '#3B2316', color: 'white', padding: '14px 32px', borderRadius: '30px', border: 'none', letterSpacing: '2px', fontSize: '12px' }} onClick={()=> alert('Checkout coming next - we will connect Paystack!')}>PROCEED TO CHECKOUT</button>
        <button style={{ marginLeft: '12px', background: 'none', border: '1px solid #3B2316', padding: '14px 32px', borderRadius: '30px' }} onClick={()=> setCart([])}>Clear Cart</button>
      </>}
    </div>
  )
}
export default Cart
