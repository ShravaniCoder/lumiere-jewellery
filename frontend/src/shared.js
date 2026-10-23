import React, { createContext, useContext } from 'react'
const Store = createContext(null)
const useStore = () => useContext(Store)
const imgFallback = 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80'
export { Store, useStore, imgFallback }
