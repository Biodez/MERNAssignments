class Deck {
  constructor() {
    const suits = ["Diamond", "Heart", "Spade", "Club"];
    const faces = [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
    ];
    const deck = [];
    suits.forEach(suit => {
        faces.forEach(face => {
            deck.push(this.createCard(suit, face));
        });
    });
    console.log(deck)
  }
  createCard(suit, face) {
    return face + " of " + suit;
  }
}

const deck = new Deck()

const noMondays = new Promise((res, rej) => {
  if (new Date().getDate() !== 1) {
    res("It's not Monday")
  } else {
    rej("I don't like Mondays")
  }
})

noMondays.then(res => console.log(res))
.catch(rej => console.log(rej))


