import { ModalBackgroundContainer, ModalContentContainer, ModalHeaderContainer, ModalCloseButton, ButtonsContainer } from './styles'
import { useEffect, useState } from 'react'
import { Input } from 'components/molecules'
import { Title, Button } from 'components/atoms'
import { createItem, updateItem, deleteItem } from 'services/request'

export const Modal = ({ onClose, item }) => {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)

  const validateBeforeSave = () => {
    if (name.length < 3) {
      alert('Nome deve ter mais de 3 caracteres')
      return false
    }

    if (quantity < 1) {
      alert('Quantidade nao pode ser menor do que 1')
      return false
    }
    return true
  }

  const callAddItem = async () => {
    const validate = validateBeforeSave()

    if (validate) {
      const result = await createItem({ name, quantity: Number(quantity) })
      if (!result?.error) {
        alert('item salvo com sucesso')
        onClose()
      }
    }
  }

  const callUpdateItem = async () => {
    const validate = validateBeforeSave()

    if (validate) {
      const result = await updateItem(item?._id, {
        name,
        quantity: Number(quantity),
        checked: item?.checked
      })
      if (!result?.error) {
        alert('item atualizado com sucesso')
        onClose()
      }
    }
  }

  const callDeleteItem = async () => {
    const result = await deleteItem(item?._id)

    if (!result?.error) {
      alert('item deletado com sucesso')
      onClose()
    }
  }

  useEffect(() => {
    if (item?.name && item?.quantity) {
      setName(item?.name)
      setQuantity(item?.quantity)
    }
  }, [item])

  return (
    <ModalBackgroundContainer>
      <ModalContentContainer>
        <ModalHeaderContainer>
          <Title>{item ? 'Editar Item' : 'Adiconar um novo item'}</Title>
          <ModalCloseButton onClick={onClose} className="modal-close-button" />
        </ModalHeaderContainer>
        <Input
          onChange={(text) => setName(text)}
          value={name}
          label="nome"
          placeholder="Ex: Arroz"
        />
        <Input
          onChange={(text) => setQuantity(text)}
          value={quantity}
          label="quantity"
          type="number"
        />
        <ButtonsContainer>
          {item && (
            <Button icon="trash" variant="outline" onClick={callDeleteItem}>
              Deletar Item
            </Button>
          )}
          <Button onClick={item ? callUpdateItem : callAddItem}>
            {item ? 'Atualizar' : 'Adiconar'}
          </Button>
        </ButtonsContainer>
      </ModalContentContainer>
    </ModalBackgroundContainer>
  )
}
