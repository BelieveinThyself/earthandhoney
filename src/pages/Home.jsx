


import { Link } from 'react-router-dom'

 function Home() {
  return (
    <div style={{ background: '#FFFBF0', minHeight: '100vh', fontFamily: 'Georgia, serif' }}>
      
      {/* TOP BAR */}
      <div style={{ background: '#3B2316', color: '#FFFBF0', textAlign: 'center', padding: '10px', fontSize: '11px', letterSpacing: '1.5px' }}>
        FREE DELIVERY OVER R500 • SMALL BATCH • 100% NATURAL • MADE IN SA
      </div>

      {/* NAV */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '18px 60px', background: 'white', position: 'sticky', top: 0, zIndex: 10 }}>
        <strong style={{ color: '#3B2316', letterSpacing: '3px' }}>EARTH & HONEY</strong>
        <div style={{ display: 'flex', gap: '28px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#3B2316' }}>Home</Link>
          <Link to="/shop" style={{ textDecoration: 'none', color: '#3B2316' }}>Shop</Link>
        </div>
      </nav>

      {/* BANNER IMAGE THAT FILLS SPACE */}
      <section style={{ 
        position: 'relative', 
        height: '75vh', 
        minHeight: '520px',
        backgroundImage: 'url(/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* dark overlay so text pops */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(59,35,22,0.75) 0%, rgba(59,35,22,0.15) 60%)' }}></div>
        
        {/* TEXT ON TOP OF BANNER */}
        <div style={{ position: 'relative', padding: '0 60px', maxWidth: '600px', color: 'white' }}>
          <p style={{ letterSpacing: '3px', fontSize: '13px', color: '#FFD88A', fontWeight: 'bold', marginBottom: '12px' }}>HOLISTIC PANTRY & RITUALS</p>
          <h1 style={{ fontSize: '72px', lineHeight: '0.9', margin: 0, fontWeight: 'bold' }}>From Hive<br/>to Home</h1>
          <p style={{ fontSize: '19px', marginTop: '18px', lineHeight: '1.4', opacity: 0.95 }}>
            Raw wildflower honey, grass-fed tallow, sun-dried figs, nuts & fruits. Small-batch abundance from Pretoria.
          </p>
          <div style={{ display: 'flex', gap: '14px', marginTop: '28px' }}>
            <Link to="/shop" style={{ background: '#FFFBF0', color: '#3B2316', padding: '16px 32px', borderRadius: '40px', textDecoration: 'none', fontWeight: 'bold' }}>SHOP PANTRY
          </Link>

            </div>
          </div>
        </section>
      </div>

      )
}
export default Home

