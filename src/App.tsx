import React from 'react'
import './App.scss'
import Button, { ButtonType } from './components/Button/button'
import Menu from './components/Menu/Menu'
import MenuItem from './components/Menu/MenuItem'
import SubMenu from './components/Menu/SubMenu'
import Icon from './components/Icon/Icon'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Upload from './components/Upload/Upload'

library.add(fas)
function App() {
  const checkFileSize = (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
      alert('file is too big')
      return false
    }
    return true
  }
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
      {/* <Icon icon="coffee"></Icon> */}
      <Upload action="https://jsonplaceholder.typicode.com/posts" />
    </div>
  )
}

export default App
