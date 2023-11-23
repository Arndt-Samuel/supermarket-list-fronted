import './index.css'

export const ListCard = ({item, onClick, onCheckItem}) => {
    return (
    <div className='list-card-container'>
        <img 
        className='checkbox'
        onClick={() => onCheckItem(item)}
        src={`/images/${item?.checked ? 'checked.svg' : 'unchecked.svg'}`}
        alt='checked-item'/>
        <div className='list-card-text-container'>
            <span className='list-card-title'>{item?.name}</span>
            <span className='list-card-subtitle'>{item?.quantity} Unidades</span>
        </div>
        <div className='arrow-icon-container' onClick={() => onClick(item)}>
        <img className='arrow-icon' src='/images/arrow.svg' alt='arrow-icon'/>
        </div>
    </div>  
    ) 
}