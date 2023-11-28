import { CardContainer, CheckImage, TextContainer, ArrowIconContainer, ArrowIcon } from './styles'
import { SmallText } from 'components/atoms'

export const ListCard = ({ item, onClick, onCheckItem }) => {
  return (
    <CardContainer>
      <CheckImage
        onClick={() => onCheckItem(item)}
        src={`/images/${item?.checked ? 'checked.svg' : 'unchecked.svg'}`}
        alt="checked-item"
      />
      <TextContainer>
        <SmallText ft={16} mb={2} align='left'>{item?.name}</SmallText>
        <SmallText ft={14} align='left' fw={400}>{item?.quantity} Unidades</SmallText>
      </TextContainer>
      <ArrowIconContainer onClick={() => onClick(item)}>
        <ArrowIcon />
      </ArrowIconContainer>
    </CardContainer>
  )
}
