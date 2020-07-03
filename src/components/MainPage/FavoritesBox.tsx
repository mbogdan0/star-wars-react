import React from 'react'
import { useDrop } from 'react-dnd'
import { useApp } from '../App/hooks/useApp';
import { FavoriteItem } from './FavoriteItem';



export const FavoritesBox: React.FC = () => {
  const { favorites } = useApp();
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'item',
    drop: () => ({ name: 'Favorite' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const isActive = canDrop && isOver;
  let backgroundColor = 'whitesmoke';
  if (isActive) {
    backgroundColor = '#dce8e0';
  } else if (canDrop) {
    backgroundColor = 'whitesmoke';
  }

  return (
    <div ref={drop} className="fav-box" style={{ backgroundColor }}>
      <div className="hint">
        {isActive ? 'Release to drop' : 'Drag a box here to add to favorites'}
      </div>
      <div>
        {favorites.map((item) => <FavoriteItem key={item} id={item} />)}
      </div>
    </div>
  )
}
