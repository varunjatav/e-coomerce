import React from 'react'
import { useSelector } from 'react-redux';
import Card from './Card';

const CardContainer = () => {
  const items = useSelector((store) => store.items.itemArr);
  console.log(items);
  return (
    <div className="items-container my-5">
        {items.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
  )
}

export default CardContainer