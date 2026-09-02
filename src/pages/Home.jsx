import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Home() {
  const { count } = useCart()

  return (
    <div style={{ background: '#FFFBF0', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>

      {/* TOP BAR */}
      <div style={{ background: '#3B2316', color: '#FFFBF0', textAlign: 'center', padding: '10px', fontSize: '11px', letterSpacing: '2px' }}>
        FREE DELIVERY OVER R500 • SMALL BATCH • 100% NATURAL • MADE IN SA
      </div>

      {/* NAV WITH CART */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 60px', background: 'white', borderBottom: '1px solid rgba(59,35,22,0.08)', position: 'sticky', top: 0, zIndex: 10 }}>
        <strong style={{ color: '#3B2316', letterSpacing: '4px', fontWeight: '400', fontSize: '12px' }}>EARTH & HONEY</strong>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#3B2316', fontWeight: '400', fontSize: '13px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Home</Link>
          <Link to="/shop" style={{ textDecoration: 'none', color: '#3B2316', fontWeight: '300', fontSize: '13px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Shop</Link>
          <Link to="/cart" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', position: 'relative' }}>
            <span style={{ fontSize: '20px' }}>🛒</span>
            <span style={{ position: 'absolute', top: '-8px', right: '-10px', background: '#3B2316', color: '#FFFBF0', borderRadius: '50%', minWidth: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', padding: '0 4px' }}>{count}</span>
          </Link>
        </div>
      </nav>

      {/* BIG BANNER */}
      <section style={{
        position: 'relative',
        height: '82vh',
        minHeight: '520px',
        backgroundImage: 'url(/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(20,12,5,0.75) 35%, rgba(20,12,5,0.15) 100%)' }}></div>

        <div style={{ position: 'relative', padding: '0 60px', maxWidth: '580px' }}>
          <p style={{ letterSpacing: '4px', fontSize: '11px', color: '#E8C39A', fontWeight: '400', marginBottom: '22px', textTransform: 'uppercase' }}>
            Holistic Pantry & Rituals
          </p>
          <h1 style={{ fontSize: '72px', lineHeight: '0.9', margin: 0, fontWeight: '300', color: '#FFFBF0', fontFamily: "'Cormorant Garamond', serif", letterSpacing: '-1.5px' }}>
            From Hive<br/>to Home
          </h1>
          <p style={{ fontSize: '16px', marginTop: '22px', lineHeight: '1.7', color: '#FFFBF0', opacity: 0.9, fontWeight: '300', maxWidth: '400px' }}>
            Raw wildflower honey, grass-fed tallow, sun-dried figs, nuts & fruits. Small-batch abundance from Pretoria.
          </p>
          <div style={{ display: 'flex', gap: '14px', marginTop: '28px' }}>
            <Link to="/shop" style={{ background: '#FFFBF0', color: '#3B2316', padding: '14px 32px', borderRadius: '30px', textDecoration: 'none', fontSize: '12px', letterSpacing: '2px', fontWeight: '500', textTransform: 'uppercase' }}>
              SHOP PANTRY
            </Link>
            <Link to="/cart" style={{ background: 'transparent', color: '#FFFBF0', border: '1px solid #FFFBF0', padding: '14px 32px', borderRadius: '30px', textDecoration: 'none', fontSize: '12px', letterSpacing: '2px', fontWeight: '400', textTransform: 'uppercase' }}>
              VIEW CART ({count})
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <div style={{ padding: '40px 60px', textAlign: 'center', color: '#8B6F47', fontSize: '12px', letterSpacing: '1px', fontWeight: '300' }}>
        Natural • Small Batch • Made in SA
      </div>

    </div>
  )
}

export default Home
