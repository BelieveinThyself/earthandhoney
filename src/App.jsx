import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{ padding: '60px', background: '#FFFBF0', minHeight: '100vh' }}>
      <h1 style={{ color: '#556B2F', fontSize: '48px' }}>Earth & Honey 🍯</h1>
      <p style={{ color: '#8B4513', fontSize: '20px' }}>Pure. Natural. South African.</p>
      <Link to="/shop" style={{ background: '#D4A017', color: 'white', padding: '12px 24px', textDecoration: 'none', borderRadius: '8px', display: 'inline-block', marginTop: '20px' }}>Shop Now</Link>
    </div>
  )
}

function Shop() {
  return (
    <div style={{ padding: '40px', background: '#FFFBF0', minHeight: '100vh' }}>
      <h2 style={{ color: '#556B2F' }}>Our Collection</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '30px' }}>
        {[1,2,3,4,5,6,7,8,9].map(n => (
          <div key={n} style={{ background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #D4A017' }}>
            <div style={{ height: '120px', background: '#F5EBDC', borderRadius: '8px' }}></div>
            <h3 style={{ color: '#556B2F' }}>Product {n}</h3>
            <p style={{ color: '#D4A017', fontWeight: 'bold' }}>R 199</p>
            <button style={{ background: '#556B2F', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px' }}>Add to Cart</button>
          </div>
        ))}
      </div>
      <Link to="/" style={{ display: 'block', marginTop: '30px', color: '#556B2F' }}>← Back Home</Link>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
