import classnames from 'classnames'
export interface MenuProps {
  defaultIndex?: number
  className?: string
  mode?: MenuMode
  style?: React.CSSProperties
  children: React.ReactNode
  onSelect?: (selectedIndex: number) => void
}
type MenuMode = 'vertical' | 'horizontal'
const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, style, children } = props
  const classes = classnames(className, {
    'menu-vertical': mode === 'vertical',
  })
  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  )
}

export default Menu
