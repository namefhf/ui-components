import React from 'react'
import './App.scss'
import Button, { ButtonType } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <Button autoFocus className="custom">
        111
      </Button>
      <Button>111</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com">
        link
      </Button>
    </div>
  )
}

export default App
