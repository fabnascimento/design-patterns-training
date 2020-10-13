class Card {
    constructor (suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
}

class CardFactory {
    createCard(type) {
        switch(type) {
            case CARD_TYPES.JACK:
                return new Card('Spades', CARD_TYPES.JACK);
            case CARD_TYPES.ACE:
                return new Card('Spades', CARD_TYPES.ACE);
        }
    }
}

const CARD_TYPES = {
    JACK: 'Jack',
    ACE: 'Ace'
}

const cards = new CardFactory();

const jack = cards.createCard(CARD_TYPES.JACK);
const ace = cards.createCard(CARD_TYPES.ACE);

console.log(jack);
console.log(ace);