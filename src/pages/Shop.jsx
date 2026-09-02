import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const products = [
  { id: 1, name: 'Wildflower Honey 500g', price: 195 },
  { id: 2, name: 'Grass-fed Tallow Balm', price: 220 },
  { id: 3, name: 'Sun-dried Figs', price: 85 },
  { id: 4, name: 'Mixed Nuts', price: 120 },
  { id: 5, name: 'Dried Mango', price: 95 },
  { id: 6, name: 'Raw Honeycomb', price: 250 },
]

function Shop() {
  const { addToCart, count } = useCart()

  return (
    <div style={{ background: '#FFFBF0', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>

      {/* TOP BROWN BAR */}
      <div style={{ background: '#3B2316', color: '#FFFBF0', textAlign: 'center', padding: '10px', fontSize: '11px', letterSpacing: '2px' }}>
        FREE DELIVERY OVER R500 • SMALL BATCH • 100% NATURAL • MADE IN SA
      </div>

      {/* NAV */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 60px', background: 'white', borderBottom: '1px solid rgba(59,35,22,0.08)', position: 'sticky', top: 0, zIndex: 10 }}>
        <strong style={{ color: '#3B2316', letterSpacing: '4px', fontWeight: '400', fontSize: '12px' }}>EARTH & HONEY</strong>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#3B2316', fontWeight: '300', fontSize: '13px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Home</Link>
          <Link to="/shop" style={{ textDecoration: 'none', color: '#3B2316', fontWeight: '400', fontSize: '13px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Shop</Link>
          <Link to="/cart" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', position: 'relative' }}>
            <span style={{ fontSize: '20px' }}>🛒</span>
            <span style={{ position: 'absolute', top: '-8px', right: '-10px', background: '#3B2316', color: '#FFFBF0', borderRadius: '50%', minWidth: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', padding: '0 4px' }}>{count}</span>
          </Link>
        </div>
      </nav>

      {/* IMAGE BANNER WITH WORDING */}
      <div style={{ 
        height: '380px',
        backgroundImage: 'url(/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: '0 60px'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(20,12,5,0.6) 30%, rgba(20,12,5,0.1) 100%)' }}></div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '500px' }}>
          <p style={{ letterSpacing: '4px', fontSize: '11px', color: '#E8C39A', fontWeight: '400', textTransform: 'uppercase', margin: 0 }}>Small Batch Pantry</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: '300', fontSize: '56px', color: '#FFFBF0', margin: '14px 0 0 0', letterSpacing: '-0.5px', lineHeight: '0.9' }}>Our Pantry</h1>
          <p style={{ fontWeight: '300', fontSize: '15px', color: '#FFFBF0', marginTop: '16px', lineHeight: '1.7', opacity: 0.9 }}>Raw, unfiltered, sun-dried. From our farm to your daily ritual. Small-batch abundance from Pretoria.</p>
        </div>
      </div>

      {/* PRODUCTS - ELEGANT */}
      <div style={{ padding: '50px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
          {products.map(p => (
            <div key={p.id} style={{ background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid rgba(59,35,22,0.08)' }}>
              <div style={{ height: '160px', background: '#F5EBDC', borderRadius: '12px' }}></div>
              <h3 style={{ color: '#3B2316', fontFamily: "'Cormorant Garamond', serif", fontWeight: '300', fontSize: '22px', margin: '20px 0 0 0', letterSpacing: '0.2px' }}>{p.name}</h3>
              <p style={{ color: '#8B6F47', fontWeight: '300', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '8px' }}>R {p.price}</p>
              <button onClick={() => addToCart(p)} style={{ background: '#3B2316', color: '#FFFBF0', border: 'none', padding: '12px 26px', borderRadius: '30px', cursor: 'pointer', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '18px' }}>
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shop
