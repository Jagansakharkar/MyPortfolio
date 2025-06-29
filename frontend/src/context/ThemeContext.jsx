import React, { createContext, useState } from 'react'
// create context
export const ThemeContext = createContext()

export const ThemeContextWrapper = ({ children }) => {
  //data to pass
  const [darkMode, setDarkMode] = useState(false)
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
