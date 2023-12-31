import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Title, Subtitle } from 'components'
import { SAVE_USERNAME_PATH } from 'services/constants'
import { ScreenContainer, ContentContainer, BagImage, ButtonContainer } from './styles'

export const HomeScreen = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')

  const onClickAccess = () => {
    if (username.length < 3) {
      alert('Username must be at least 3 characters')
      return
    }

    localStorage.setItem(SAVE_USERNAME_PATH, username)
    navigate('/list')
  }

  return (
    <ScreenContainer>
      <ContentContainer>
        <BagImage/>
        <Title>
          Sua lista de supermercado mais fácil do que nunca
        </Title>
        <Subtitle>
          Ajudamos você a organizar sua lista de compras de forma descomplicada.
        </Subtitle>
        <Subtitle mw={452} align={'left'} mb={16}>
          Digite abaixo seu usuário para ter acesso a sua lista de compras:
        </Subtitle>
        <Input
          onChange={(text) => setUsername(text)}
          value={username}
          label="Username"
          placeholder="Ex: user1"
        />
        <ButtonContainer>
          <Button onClick={onClickAccess}>Acessar</Button>
        </ButtonContainer>
      </ContentContainer>
    </ScreenContainer>
  )
}
