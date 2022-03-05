import React from 'react'

// Themes
import crimson from './themes/crimson/CV'

const themes = {
  crimson,
}

function App() {
  const currentTheme = 'crimson'
  const Component = themes[currentTheme]

  return (
    <div className='App'>
      <Component />
    </div>
  )
}

export default App
