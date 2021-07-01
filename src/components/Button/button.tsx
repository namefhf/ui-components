import classnames from 'classnames'
export interface BaseButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children: React.ReactNode
  href?: string
}
export enum ButtonSize {
  large = 'lg',
  small = 'sm',
}
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

// export enum ButtonType {
//   Primary = 'primary',
//   Default = 'default',
//   Danger = 'danger',
//   Link = 'link',
// }
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
const Button: React.FC<ButtonProps> = (props) => {
  const { btnType, className, disabled, size, children, href, ...restProps } =
    props
  const classes = classnames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  })
  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    )
  }
}
Button.defaultProps = {
  disabled: false,
  btnType: 'default',
}
export default Button
