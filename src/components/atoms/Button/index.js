import { ButtonContainer, ButtonIcon } from './styles'

export const Button = ({ children, onClick, variant, icon }) => {
  return (
    <ButtonContainer
      onClick={onClick}
      outline={variant === 'outline' }
      className={`button-container ${
        variant === 'outline' ? 'outline' : 'main'
      }`}
    >
      {icon && (
        <ButtonIcon
          src={`/images/${icon}.svg`}
          alt={'supermarket_icon'}
        />
      )}
      {children}
    </ButtonContainer>
  )
}
