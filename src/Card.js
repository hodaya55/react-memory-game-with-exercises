import React from 'react'
import card from './card.png';


const Card = (props) => {
  const handleClick = () => {
    props.clickCard(props.cardItem, props.index);
  }

  return (
    <div className={props.cardItem.flipped ? "card" : "card"} onClick={handleClick} >
      {props.cardItem.flipped ?
        <img src={props.cardItem.src} alt="card-front" className="back" />
        : <img src={card} alt="card-back" className="" />}
    </div>
  )

}



export default Card




