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
    { img: "./images/1 smiley.jpg",id: 8, stat: "" },
    { img: "./images/2 crbl-.jpg", id: 1, stat: "" },
    { img: "./images/3 conectr.jpg", id: 4, stat: ""},
    { img: "./images/4 andra.jpg", id: 2, stat: "" },
    { img: "./images/5 horia.jpeg", id: 3 , stat: ""},
    { img: "./images/6 puya.jpg", id:5, stat: "" },
    { img: "./images/7 lora.jpg", id:6 , stat: ""},
    { img: "./images/8 carlas.jpg", id:7, stat: "" },
    { img: "./images/1 smiley.jpg", id: 8, stat: "" },
].sort(()=>Math.random()-0.5))

const [prev, setPrev] = useState(-1)

function check(current){
    if(items[current].id == items[prev].id){
        items[current].stat = "correct"
        items[prev].stat = "correct"
        setItems([...items])
        setPrev(-1)
    }else{
        items[current].stat = "wrong"
        items[prev].stat = "wrong"
        setItems([...items])
        setTimeout(() => {
            items[current].stat = ""
            items[prev].stat = ""
            setItems([...items])
            setPrev(-1)
        }, 1000)
    }
}

function handleClick(id){
    if(prev === -1){
        items[id].stat = "active"
        setItems([...items])
        setPrev(id)
    }else{
        check(id)
    }
}

return (
    <div className="container">
        { items.map((item, index) => (
            <Card key={index} item={item} id={index} handleClick={handleClick} />
        )) }
    </div>
)
}

export default Cards