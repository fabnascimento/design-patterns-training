class Card {
    constructor (suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
}

class SpecialCard {
    constructor (type='Joker') {
        this.type = type;
    }
}

class CardFactory {
    createCard(rank) {
        switch(rank) {
            case CARD_RANK.JACK:
                return new Card('Spades', CARD_RANK.JACK);
            case CARD_RANK.ACE:
                return new Card('Spades', CARD_RANK.ACE);
            case CARD_RANK.KING:
                return new Card('Spades', CARD_RANK.KING);
            case CARD_RANK.QUEEN:
                return new Card('Spades', CARD_RANK.QUEEN);
        }
    }
}

class SpecialCardFactory {
    createdCard (type) {
        switch(type) {
            default:
                return new SpecialCard();
        }
    }
}

const CARD_RANK = {
    JACK: 'Jack',
    QUEEN: 'Queen',
    KING: 'King',
    ACE: 'Ace'
}

const cardFactory = new CardFactory();
const specialCardFactory = new SpecialCardFactory();

const cardGenerator = (kind, rank) => {
    switch (kind) {
        case 'Special':
            return specialCardFactory.createdCard();
        default: 
            return cardFactory.createCard(rank)
    }
}

const jack = cardGenerator('', CARD_RANK.JACK);
const queen = cardGenerator('', CARD_RANK.QUEEN);
const king = cardGenerator('', CARD_RANK.KING);

const ace = cardGenerator('', CARD_RANK.ACE);
const joker = cardGenerator('Special', 'Joker');

console.log(joker);
console.log(ace);

console.log(jack);
console.log(queen);
console.log(king);