import React, { Component } from 'react'
import _ from 'lodash';
import Card from './Card';

const stateGameEnum = { waitFirstCard: "Waiting first card", waitSecondCard: "Waiting second card", wrong: "Wrong!" }

export default class CardsBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstCard: '',
      cardsList: this.props.cards,
      stateGame: stateGameEnum.waitFirstCard
    }
    this.finishCount = this.props.cards.length / 2;
  }

  clickCard = (card, index) => {
    let cards = this.state.cardsList;
    if (!card.flipped) {
      switch (this.state.stateGame) {
        case stateGameEnum.waitFirstCard:
          // save the first card that clicked, change the stateGame and flipp the first card
          cards = cards.map((c, i) => { if (i === index) { c.flipped = true; } return c; });
          this.setState(() => {
            return { cardsList: cards, stateGame: stateGameEnum.waitSecondCard, firstCard: card };
          });
          break;
        case stateGameEnum.waitSecondCard:
          cards = cards.map((c, i) => { if (i === index) { c.flipped = true; } return c; });
          // check if the two cards are equal
          if (card.name === this.state.firstCard.name) {
            this.finishCount--;
            this.setState(() => {
              return { cardsList: cards, stateGame: stateGameEnum.waitFirstCard };
            });
            //* if the user solve the memo-game
            if (this.finishCount === 0) {
              this.props.checkWin("memo");
            }

          }
          else {
            // to  flipp the second card
            this.setState(() => {
              return { cardsList: cards, stateGame: stateGameEnum.wrong };
            });
            // wrong - flipp back the two wrong open cards
            setTimeout(() => {
              let first = this.state.firstCard;
              let second = card;
              cards = cards.map(card => { if (card === first || card === second) { card.flipped = false; } return card; });
              this.setState({ cardsList: cards, stateGame: stateGameEnum.waitFirstCard });
            }, 1200);

          }
          break;
        default:
      }
    }
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      cardsList: newProps.cards, firstCard: '',
      stateGame: stateGameEnum.waitFirstCard
    });
    this.finishCount = newProps.cards.length / 2;
  }

  render() {
    return (
      <div className="cardBord">
        <h2>
          {this.finishCount === 0 ? "" :
            this.state.stateGame}
        </h2>
        <div className="cards">
          {this.state.cardsList.map((card, index) =>
            <Card key={index} clickCard={this.clickCard} index={index} cardItem={card} />
          )}
        </div>

      </div>
    )
  }
}
