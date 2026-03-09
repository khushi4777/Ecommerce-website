import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  // Load cart from localStorage
  useEffect(() => {

    const savedCart = JSON.parse(localStorage.getItem("cart"))

    if (savedCart) {
      setCart(savedCart)
    }

  }, [])

  // Save cart whenever it changes
  useEffect(() => {

    localStorage.setItem("cart", JSON.stringify(cart))

  }, [cart])

  const addToCart = (product) => {

    setCart([...cart, product])

  }

  const removeFromCart = (id) => {

    setCart(cart.filter(item => item._id !== id))

  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )

}