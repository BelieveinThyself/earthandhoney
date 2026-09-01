import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Footer from './components/Footer'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
