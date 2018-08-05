import React from 'react'
import card from './card-back.jpg';


const Card = (props) => {
  const handleClick = () => {
    props.clickCard(props.cardItem, props.index);
  }

  return (
    <div className="flip" onClick={handleClick} >
      <div className={props.cardItem.flipped ? "card flipped" : "card"}>
        {props.cardItem.flipped ?
          <img src={props.cardItem.src} alt="card-back" className="face back" />
          : <img src={card} alt="card-front" className="face front" />}
      </div>
    </div>
  )

}



export default Card




