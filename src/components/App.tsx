import React from 'react'
import './App.scss'

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
      <div className='App__frame letter'>
        <Component />
      </div>
    </div>
  )
}

export default App
