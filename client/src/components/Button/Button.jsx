import PropTypes from 'prop-types'
import { ButtonStyled } from './styles'
import { BUTTON_VARIANT } from './ButtonVariant'

import './Button.css'

function Button ({
  children,
  variant = BUTTON_VARIANT.PRIMARY,
  isIconButton = false,
  ...props
}) {
  return (
    <ButtonStyled
      className={` ${variant} ${isIconButton ? 'icon-button' : ''}`}
      {...props}
    >
      {children}
    </ButtonStyled>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    BUTTON_VARIANT.PRIMARY,
    BUTTON_VARIANT.PRIMARY_LINK,
    BUTTON_VARIANT.PRIMARY_OUTLINED,
    BUTTON_VARIANT.SECONDARY,
    BUTTON_VARIANT.SECONDARY_LINK,
    BUTTON_VARIANT.SECONDARY_OUTLINED
  ]),
  isIconButton: PropTypes.bool
}

export default Button
