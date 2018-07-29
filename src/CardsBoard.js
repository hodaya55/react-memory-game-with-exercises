import React, { Component } from 'react'

export default class CardsBoard extends Component {
  constructor() {
    super();
    this.state = {
      firstClickCard: '', countClicks: 0, cardsList: [
        { name: 'card1', img: '' },
        { name: 'card1', img: '' },
        { name: 'card2', img: '' },
        { name: 'card2', img: '' },
        { name: 'card3', img: '' },
        { name: 'card3', img: '' },
        { name: 'card4', img: '' },
        { name: 'card4', img: '' },
        { name: 'card5', img: '' },
        { name: 'card5', img: '' },
        { name: 'card6', img: '' },
        { name: 'card6', img: '' },
      ]
    }
  }
  componentDidMount() {
    // todo: random the cards
    let randomArray = this.state.cardsList;


  }
  render() {
    return (
      <div>
        {this.state.cardsList.map(card =>
          <Card name={card.name} />
        )}
      </div>
    )
  }
}
