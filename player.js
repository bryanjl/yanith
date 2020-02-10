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
        this.highCard = { exist: false,
                          highestCard: check.highCard(this.cardHand),
                          cardValue: check.handValue(check.highCard(this.cardHand))
                        };
    }

    discard(toDiscardArr = []){
        //recieve an array then pop the values out to new array
        //return new array to be put on discard pile in game
        let discardArr = [];
        for (let i = 0; i<toDiscardArr.length; i++){
            for (let j = 0; j<this.cardHand.length; j++){
                if(toDiscardArr[i] == this.cardHand[j]){
                    discardArr.push(this.cardHand[j]);
                    this.cardHand.splice(j, 1);
                }
            }
        }
        return discardArr;
    }

    // pairValuing(){
    //     this.pair.pairValue = cardValues[this.pair.pairCards[0].charAt(0)] * 2;
    // }

    

    highestHand(){
        //going to be long winded but not sure how to do it anyother way

        let handValueArr = new Array(6);
        handValueArr[0] = this.pair.pairValue;
        handValueArr[1] = this.secondPair.pairValue;
        handValueArr[2] = this.triple.tripleValue;
        handValueArr[3] = this.quad.quadValue;
        handValueArr[4] = this.run.runValue;
        handValueArr[5] = this.highCard.cardValue;

        let pos = -1;
        let x = 0;
        for(let i = 0; i<handValueArr.length; i++){
            if(handValueArr[i] > x){
                pos = i;
                x = handValueArr[i];
            }
        }
        return pos;

    }

    getHandToDiscard(pos){
        if(pos == 0){
            return this.pair.pairCards[0];
        }else if(pos == 1){
            return this.secondPair.pairCards[1];
        }else if(pos == 2){
            return this.triple.cardHand;
        }else if(pos == 3){
            return this.quad.cardHand;
        }else if(pos == 4){
            return this.run.cardHand;
        }else if(pos == 5){
            return this.highCard.highestCard;
        }
    }

    checkForYan(){
        //check to see if hand value is 5 or under to call yanith
    }

    pickUpCard(card){
        //pick up card from either discardpile or shuffled deck
        this.cardHand.push(card);
    }

    logic(){
        //find highest value of statuses and return array to be discarded
        return this.highCard.highestCard;
    }
    
    get getCardHand(){
        return this.cardHand;
    }



}

module.exports = Player;