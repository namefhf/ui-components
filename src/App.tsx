import React from 'react'
import './App.scss'
import Button, { ButtonType } from './components/Button/button'
import Menu from './components/Menu/Menu'
import MenuItem from './components/Menu/MenuItem'
import SubMenu from './components/Menu/SubMenu'
import Icon from './components/Icon/Icon'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fas)
function App() {
  return (
    <div className="App">
      {/* <Button autoFocus className="custom">
        111
      </Button>
      <Button>111</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com">
        link
      </Button> */}
      {/* <Menu mode={'vertical'}>
        <MenuItem>111</MenuItem>
        <MenuItem>111</MenuItem>
        <SubMenu title="submenu">
          <MenuItem>1</MenuItem>
        </SubMenu>
      </Menu> */}
      <Icon icon="coffee"></Icon>
    </div>
  )
}

export default App
