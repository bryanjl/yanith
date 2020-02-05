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
        this.cardHand = cardHand;  //dont recieve hand from dealer on insatnace creation
        this.pair = { exist: false,
                      pairCards: check.pairs(this.cardHand),
                      pairValue: check.handValue(check.pairs(this.cardHand))
                    };
        this.secondPair = { exist: false,
                            pairCards: [],
                            pairValue: 0
                          };
        this.triple = { exist: false,
                        tripleCards: [],
                        tripleValue: 0
                      };
        this.quad = { exist: false,
                      quadCards: [],
                      quadValue: 0
                    };
        this.run = { exist: false,
                     runCards: [],
                     runValue: 0
                   };
        
        //how to status???
        //examine cardhand then make decisions
        //need to have pairs in hand, highest pairs,
        //ruuns and the value of the runs
        //possible runs, possible pairs
    }

    recieveHand(cardHand = []){
        //get the hand from the dealer
        this.cardHand = cardHand;
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