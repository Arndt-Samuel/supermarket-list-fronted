import { ListCard } from 'components/ListCard'
import './index.css'

export const ListRender = ({ list, onCheckItem, onEdit }) => {
  if (list?.length === 0) {
    return (
      <h3>
        Sua lista está vazia, adicione um novo item clicando no botão de
        "Adicionar"
      </h3>
    )
  }

  return (
    <div className="list-render-container">
      {list.map((item) => (
        <ListCard
          onCheckItem={onCheckItem}
          onClick={onEdit}
          item={item}
          key={item?._id}
        />
      ))}
    </div>
  )
}
