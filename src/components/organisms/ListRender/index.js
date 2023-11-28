import { Subtitle } from 'components/atoms'
import { ListCard } from 'components/molecules'
import { ListRenderContainer } from './styles'

export const ListRender = ({ list, onCheckItem, onEdit }) => {
  if (list?.length === 0) {
    return (
      <Subtitle>
        Sua lista está vazia, adicione um novo item clicando no botão de
        "Adicionar"
      </Subtitle>
    )
  }

  return (
    <ListRenderContainer className="list-render-container">
      {list.map((item) => (
        <ListCard
          onCheckItem={onCheckItem}
          onClick={onEdit}
          item={item}
          key={item?._id}
        />
      ))}
    </ListRenderContainer>
  )
}
