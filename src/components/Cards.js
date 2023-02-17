import React from 'react'
import { useState } from 'react'
import Card from './Card'

function Cards() {

  const [items, setItems]=useState([
    { img: "./images/2 crbl-.jpg", id:1, stat: "" },
    { img: "./images/4 andra.jpg", id: 2, stat: "" },
    { img: "./images/5 horia.jpeg", id: 3, stat: "" },
    { img: "./images/3 conectr.jpg", id:4, stat: "" },
    { img: "./images/6 puya.jpg", id:5, stat: "" },
    { img: "./images/7 lora.jpg", id:6 , stat: ""},
    { img: "./images/8 carlas.jpg", id:7, stat: "" },
    { img: "./images/1 smiley.jpg",ide: 8, stat: "" },
    { img: "./images/2 crbl-.jpg", id: 1, stat: "" },
    { img: "./images/3 conectr.jpg", id: 4, stat: ""},
    { img: "./images/4 andra.jpg", id: 2, stat: "" },
    { img: "./images/5 horia.jpeg", id: 3 , stat: ""},
    { img: "./images/6 puya.jpg", id:5, stat: "" },
    { img: "./images/7 lora.jpg", id:6 , stat: ""},
    { img: "./images/8 carlas.jpg", id:7, stat: "" },
    { img: "./images/1 smiley.jpg", id: 8, stat: "" },
  
  ])

  return (
    <div className="container">
      {items.map((item, index)=>( //here we map throw the image array and set it a prop value(item and index)
        <Card key={index} item={item}/>
         //and here we pass it as props to the child comp Card.js where will be rended. Index is used because we have to set a key.
      ))}
    </div>
    
  )
}

export default Cards
