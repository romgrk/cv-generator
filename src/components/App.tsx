import React from 'react'
import './App.scss'

// Themes
import crimson from './themes/crimson/CV'
import elegantBlack from './themes/elegantBlack/CV'

const themes = {
  crimson,
  elegantBlack,
}

function App() {
  const currentTheme = 'elegantBlack'
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
