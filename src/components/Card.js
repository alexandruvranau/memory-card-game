import React from 'react'

function Card({item}) {
  return (
    <div className='card'> 
      <img src={item.img} alt="" /> 
    </div>
    //here we render every img property from the item object
  )
}

export default Card
