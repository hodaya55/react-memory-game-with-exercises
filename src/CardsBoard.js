import React, { Component } from 'react'



const Card = (props) => {
  const handleClick = () => {
    props.onClick(props.cardItem, props.index);
  }
  return (
    <div className="card" onClick={handleClick}>
      {props.cardItem.flipped ? props.cardItem.name : "####"}
    </div>
  )
}

const stateGameEnum = { waitFirstCard: "Waiting first card", waitSecondCard: "Waiting second card", wrong: "Wrong!" }

export default class CardsBoard extends Component {
  constructor() {
    super();
    this.state = {
      firstCard: '',
      cardsList: [
        { name: 'card1', img: '', flipped: false },
        { name: 'card1', img: '', flipped: false },
        { name: 'card2', img: '', flipped: false },
        { name: 'card2', img: '', flipped: false },
        { name: 'card3', img: '', flipped: false },
        { name: 'card3', img: '', flipped: false }
      ],
      stateGame: stateGameEnum.waitFirstCard
    }
    this.finishCount = this.state.cardsList.length / 2;
  }
  shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
  componentDidMount() {
    //* random the cards array
    let randomArray = this.state.cardsList;
    randomArray = this.shuffle(randomArray);
    this.setState({ cardsList: randomArray });
  }
  clickCard = (card, index) => {
    let cards = this.state.cardsList;
    if (!card.flipped) {
      switch (this.state.stateGame) {
        case stateGameEnum.waitFirstCard:
          // save the first card that clicked, change the stateGame,
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
            // to open the second card
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
    //random
    let randomArray = this.state.cardsList;
    randomArray = this.shuffle(randomArray);

    this.setState({ cardsList: randomArray });
    // flipp back all the cards
    randomArray = randomArray.map(card =>
      card.flipped ? card.flipped = false : true
    );

  }
  render() {
    return (
      <div>
        <button onClick={this.refresh}>Refresh</button>
        <h1>
          {this.finishCount === 0 ? "You win!" : this.state.stateGame}
        </h1>
        {this.state.cardsList.map((card, index) =>
          <Card key={index} onClick={this.clickCard} index={index} cardItem={card} />
        )}
      </div>
    )
  }
}
