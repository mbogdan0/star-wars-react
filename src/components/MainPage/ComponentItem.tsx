import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { useDrag, DragSourceMonitor } from 'react-dnd'
import { useApp } from '../App/hooks/useApp';



type Props = {
  name: string;
  id: string;
  index: number;
}


export const ComponentItem: FC<Props> = ({ name, id, index }: Props) => {
  const { actions: { addFavorite } } = useApp();
  const [{ isDragging }, drag] = useDrag({
    item: { name: id, type: 'item' },
    end: (item: { name: string } | undefined, monitor: DragSourceMonitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        addFavorite(item.name);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0.4 : 1

  return (
  <div className="item-name" ref={drag} style={{ opacity }}>
    {index + 1}.{' '}
    <Link to={`/person/${id}`}>
      {name}
    </Link>
  </div>
  )
}
