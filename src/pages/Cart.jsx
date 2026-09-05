import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Cart() {
  const { cart, total, setCart } = useCart()
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    const email = prompt("Enter your email for the receipt:");
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch('/.netlify/functions/create-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          amount: total * 100,
          cart: cart
        })
      });

      const data = await res.json();
      console.log(data);

      if (data.authorization_url) {
        window.location.href = data.authorization_url;
      } else {
        alert("Payment error: " + (data.error || JSON.stringify(data)));
        setLoading(false);
      }
    } catch (err) {
      alert("Failed: " + err.message);
      console.log(err);
      setLoading(false);
    }
  }

  return (
    <div style={{ background: '#FFFBF8', minHeight: '100vh', padding: '60px', fontFamily: "'Inter', sans-serif" }}>
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: '300', fontSize: '42px', color: '#3B2316' }}>Your Cart ({cart.length})</h1>
      {cart.length === 0 ? <p>Your cart is empty. <Link to="/shop">Go shop</Link></p> : (
        <div>
          {cart.map((item, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '12px 0' }}>
              <span>{item.name}</span><span>R{item.price}</span>
            </div>
          ))}
          <h3 style={{ marginTop: '24px' }}>Total: R{total}</h3>
          <button onClick={handleCheckout} disabled={loading} style={{ marginTop: '20px', background: '#3B2316', color: 'white', padding: '14px 32px', borderRadius: '30px', border: 'none', cursor: 'pointer' }}>
            {loading ? 'CONNECTING...' : 'PROCEED TO CHECKOUT'}
          </button>
          <button onClick={() => setCart([])} style={{ marginLeft: '12px', background: 'none', border: '1px solid #3B2316', padding: '14px 32px', borderRadius: '30px' }}>
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart
