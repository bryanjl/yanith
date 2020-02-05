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
    'B': 0,
    'R': 0
};

const cardPos = {
    'A': 14,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '1': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'B': 0,
    'R': 0
};

let Checks = require('./checks.js');

let check = new Checks;

class Player {
    constructor(cardHand){
        //create new player and recieve hand from dealer
        //do checks on the card hand and fill in statuses for later logic
        this.cardHand = cardHand;  
        this.pair = { exist: false,
                      pairCards: check.pairs(this.cardHand),
                      pairValue: check.handValue(check.pairs(this.cardHand)[0])
                    };
        this.secondPair = { exist: false,
                            pairCards: check.pairs(this.cardHand),
                            pairValue: check.handValue(check.pairs(this.cardHand)[1])
                          };
        this.triple = { exist: false,
                        tripleCards: check.triples(this.cardHand),
                        tripleValue: check.handValue(check.triples(this.cardHand))
                      };
        this.quad = { exist: false,
                      quadCards: check.quads(this.cardHand),
                      quadValue: check.handValue(check.quads(this.cardHand))
                    };
        this.run = { exist: false,
                     runCards: check.runs(check.suit(this.cardHand)),
                     runValue: check.handValue(check.runs(check.suit(this.cardHand)))
                   };
    }

    discard(numOfCards){
        //Place one or more cards on to the discard pile
        //numOfCards(how many cards) position will always be at beginnning of array
        return this.cardHand.splice(0, numOfCards);
    }

    // pairValuing(){
    //     this.pair.pairValue = cardValues[this.pair.pairCards[0].charAt(0)] * 2;
    // }

    

    checkHighestHand(){

    }

    checkForYan(){
        //check to see if hand value is 5 or under to call yanith
    }

    pickUpCard(card){
        //pick up card from either discardpile or shuffled deck
        this.cardHand.push(card);
    }

    get getCardHand(){
        return this.cardHand;
    }

}

module.exports = Player;