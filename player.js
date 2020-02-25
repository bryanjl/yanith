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

//intitate the checks module
//puts it in the check reference
import { Checks } from './checks.js';

//let Checks = require('./checks.js');
let check = new Checks;

class Player {
    constructor(cardHand, discardCard){
        //create new player and recieve hand from dealer
        //do checks on the card hand and fill in statuses for later logic
        this.cardHand = cardHand; 
        this.potHand = cardHand.slice();
        this.potHand.push(discardCard); 
        this.discardCard = [discardCard];
        this.discardPickup = false;


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

                    this.futureHand = {
                        pair: {
                            pairCards: check.pairs(this.potHand),
                            pairValue: check.handValue(check.pairs(this.potHand)[0])
                        },
                        triple: {
                            tripleCards: check.triples(this.potHand),
                            tripleValue: check.handValue(check.triples(this.potHand))
                        },
                        quad: {
                            quadCards: check.quads(this.potHand),
                            quadValue: check.handValue(check.quads(this.potHand))
                        },
                        run: {
                            runCards: check.runs(this.potHand),
                            quadValue: check.handValue(check.runs(this.potHand))
                        },
                        lowCard: {
                            lowCard: this.discardCard,
                            cardValue: check.handValue(this.discardCard)
                        }
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

    futureHighestHand(){
        //puts the hand values of the future hand into an array
        let handValueArr = new Array(4);
        handValueArr[0] = this.futureHand.pair.pairValue;
        handValueArr[1] = this.futureHand.triple.tripleValue;
        handValueArr[2] = this.futureHand.quad.quadValue;
        handValueArr[3] = this.futureHand.run.runValue;

        //finds the highest value of the array
        //returns the position in the array where the highest value is found
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

    getFutureHandToDiscard(pos){
        //uses a position that its sent to get an array of cards for the highest value
        //returns an array of those cards
        if(pos == 0){
            return this.futureHand.pair.pairCards[0];
        }else if(pos == 1){
            return this.futureHand.triple.tripleCards;
        }else if(pos == 2){
            return this.futureHand.quad.quadCards;
        }else if(pos == 3){
            return this.futureHand.run.runCards;
        }
    }   

    highestHand(sentNum = -1){
        //puts the values of the current hands into an array
        let handValueArr = new Array(6);
        handValueArr[0] = this.pair.pairValue;
        handValueArr[1] = this.secondPair.pairValue;
        handValueArr[2] = this.triple.tripleValue;
        handValueArr[3] = this.quad.quadValue;
        handValueArr[4] = this.run.runValue;
        handValueArr[5] = this.highCard.cardValue;

        //find the highest value in the array
        //return the position in that array
        let pos = -1;
        let x = 0;
        for(let i = 0; i<handValueArr.length; i++){
            if(handValueArr[i] > x && sentNum != i){
                pos = i;
                x = handValueArr[i];
            }
        }
        return pos;
    }

    getHandToDiscard(pos){
        //uses the pos that is sent to it to get an array of the cards making the highest hand
        //returns an array of the cards that make up the highest value hand
        if(pos == 0){
            return this.pair.pairCards[0];
        }else if(pos == 1){
            return this.secondPair.pairCards[1];
        }else if(pos == 2){
            return this.triple.tripleCards;
        }else if(pos == 3){
            return this.quad.quadCards;
        }else if(pos == 4){
            return this.run.runCards;
        }else if(pos == 5){
            return this.highCard.highestCard;
        }
    }

    checkForYan(){
        //check to see if hand value is 5 or under to call yanith
        //returns 'YANITH' if the cards are below 5
        //returns -1 if the cards are greater than 5
        let yanith = check.yanith(this.cardHand);
        if(yanith == -1){
            return -1;
        } else {
            return 'YANITH';
        }
    }

    pickUpCard(card){
        //pick up card from either discardpile or shuffled deck
        this.cardHand.push(card);
    }

    compareHands(futureHand, toDiscard){
        //sends the two hands to a compare function
        //return true if hand contains the same cards
        //return false if the hand does not contain the same cards
        if(check.doesHandContain(futureHand, toDiscard)){
            return true;
        } else {
            return false;
        }
    }

    cardToPickup(){
        //checks to see if any future hands have a greater value than current hand
        //if it is it changes the state of this.discardpickup to true
        if(this.futureHand.pair.pairValue > this.pair.pairValue){
            this.discardPickup = true;
        } else if(this.futureHand.triple.tripleValue > this.triple.tripleValue){
            this.discardPickup = true;
        } else if (this.futureHand.quad.quadValue > this.quad.quadValue){
            this.discardPickup = true;
        } else if (this.futureHand.run.runValue > this.run.runValue){
            this.discardPickup = true;
        } else if (this.futureHand.lowCard.cardValue < 3){
            this.discardPickup = true;
        } else {
            this.discardPickup = false;
        }
    }
    
    get getCardHand(){
        //returns the current cardHand
        return this.cardHand;
    }
}

export { Player };