import React, { Component } from 'react'
import _ from 'lodash';
import card from './card.png';

const Card = (props) => {
  const handleClick = () => {
    props.onClick(props.cardItem, props.index);
  }
  return (
    <div className={props.cardItem.flipped ? "card" : "card"} onClick={handleClick}>
      {
        props.cardItem.flipped ?
          <img src={props.cardItem.src} alt="card-front" className="back" />
          : <img src={card} alt="card-back" className="" />
      }
    </div>
  )
}

const stateGameEnum = { waitFirstCard: "Waiting first card", waitSecondCard: "Waiting second card", wrong: "Wrong!" }

export default class CardsBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstCard: '',
      cardsList: this.props.cards,
      stateGame: stateGameEnum.waitFirstCard
    }
    this.finishCount = this.state.cardsList.length / 2;
  }

  clickCard = (card, index) => {
    let cards = this.state.cardsList;
    if (!card.flipped) {
      switch (this.state.stateGame) {
        case stateGameEnum.waitFirstCard:
          // save the first card that clicked, change the stateGame and flipp the first card
          cards = cards.map((c, i) => {
            if (i === index) {
              c.flipped = true;
            }
            return c;
          });
          this.setState(() => {
            return { cardsList: cards, stateGame: stateGameEnum.waitSecondCard, firstCard: card };
          });
          break;
        case stateGameEnum.waitSecondCard:
          cards = cards.map((c, i) => {
            if (i === index) {
              c.flipped = true;
            }
            return c;
          });
          // check if the two cards are equal
          if (card.name === this.state.firstCard.name) {
            this.finishCount--;
            this.setState(() => {
              return { cardsList: cards, stateGame: stateGameEnum.waitFirstCard };
            });
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
              cards = cards.map(card => {
                if (card === first || card === second) {
                  card.flipped = false;
                }
                return card;
              });
              this.setState({ cardsList: cards, stateGame: stateGameEnum.waitFirstCard });
            }, 1500);

          }
          break;

        default:
      }
    }
  }
  refresh = () => {
    // reset the counting
    // ! pass finishCunt to be in the App comopoonnet instead of being here, and will be in the constructor with props

    this.finishCount = this.state.cardsList.length / 2;
    //random the cards and flipp back all the cards
    let randomArray = this.state.cardsList;
    randomArray = _.shuffle(_.map(randomArray, obj => ({ ...obj, flipped: false })));
    this.setState({ cardsList: randomArray });
  }
  render() {
    return (
      <div className="cardBord">
        {/* {this.finishCount === 0 ?
          <div>
            <h1>You win!</h1>
            <button onClick={this.refresh}>Play Again</button>
          </div>
          : <h1>{this.state.stateGame}</h1>} */}
        {/* //! or the timer is over??? */}
        <h1>{this.finishCount === 0 ? "You win!" : this.state.stateGame}</h1>

        {/* <button onClick={this.refresh}>New Game</button> */}

        <div className="cards">
          {this.state.cardsList.map((card, index) =>
            <Card key={index} onClick={this.clickCard} index={index} cardItem={card} />
          )}
        </div>

      </div>
    )
  }
}
