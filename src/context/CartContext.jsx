import { createContext, useContext, useState } from 'react'

const CartContext = createContext()
export const useCart = () => useContext(CartContext)

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const addToCart = (product) => setCart(prev => [...prev, product])
  const count = cart.length
  const total = cart.reduce((s, i) => s + i.price, 0)
  return (
    <CartContext.Provider value={{ cart, addToCart, count, total, setCart }}>
      {children}
    </CartContext.Provider>
  )
}