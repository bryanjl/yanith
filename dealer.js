const cardValues = {
    'A': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '1': 10,
    'J': 10,
    'Q': 10,
    'K': 10,
    'JOKER': 0
};

const cardDeck = [
    'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD',
    'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH',
    'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS',
    'AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC',
    'R_JOK', 'B_JOK'
];

class Dealer{
    constructor(compHand = [], userHand = [], discardPile = [], shuffledDeck = []){
        this.compHand = compHand;
        this.userHand = userHand;
        this.shuffledDeck = shuffledDeck;
        this.discardPile = discardPile;
    }

    shuffle(o = cardDeck.slice()) {
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        this.shuffledDeck = o;
    };

    deal(){
        for(let i = 0; i<5; i++){
            this.compHand.push(this.shuffledDeck.shift());
            this.userHand.push(this.shuffledDeck.shift());        
        }
        this.discardPile.push(this.shuffledDeck.shift());
    }

    get nextCard(){
        return this.shuffledDeck.shift();
    }

    get getShuffledDeck(){
        return this.shuffledDeck;
    }

    updateUserHand(sentArr){        
        this.userHand = sentArr;
    }

    updateCompHand(sentArr){
        this.compHand = sentArr;
    }

    get getUserHand(){
        return this.userHand;
    }

    get getCompHand(){
        return this.compHand;
    }

    get getDiscardPile(){
        return this.discardPile;
    }

    get getTopCard(){
        return this.discardPile[0];
    }

    removeTopCard(){
        this.discardPile.shift();
    }

    addToDiscard(val){
        for(let i = 0; i<val.length; i++){
            this.discardPile.unshift(val[i]);
        }
    }
}

export { Dealer };

// console.log(`Table: ${discardPile} Computer's Hand: ${compHand} User's Hand: ${userHand}`);
// console.log(`${shuffledDeck} length: ${shuffledDeck.length}`);