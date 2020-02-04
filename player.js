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

function cardValue(card){
    let cardNum = card.charAt(0);
    let cardVal = cardValues[cardNum];
    return cardVal;
}

class Player {
    constructor(){
        //create new player and recieve hand from dealer
        this.cardHand = [];  //dont recieve hand from dealer on insatnace creation
        this.pair = { exist: false,
                      pairCards: [],
                      pairValue: 0
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

    checkForPair(){
        //check hand to see if you are holding a pair
        //put the pairin array position 0 & 1 for discard
        //if two pairs which one is higher??
        for(let i = 0; i<this.cardHand.length; i++){
            for(let j = i+1; j<this.cardHand.length; j++){
                if(this.cardHand[i].charAt(0) == this.cardHand[j].charAt(0)){                    
                    if(this.pair.pairCards.length > 0){
                        this.secondPair.pairCards.push(this.cardHand[i]);
                        this.secondPair.pairCards.push(this.cardHand[j]);
                        this.secondPair.pairValue = cardValues[this.secondPair.pairCards[0].charAt(0)] * 2;  
                        this.secondPair.exist = true;
                        break;
                    } else {                    
                        this.pair.pairCards.push(this.cardHand[i]);
                        this.pair.pairCards.push(this.cardHand[j]);
                        //does this need to be a seperate function - gets error from calling within the statement see pairValuing() 
                        this.pair.pairValue = cardValues[this.pair.pairCards[0].charAt(0)] * 2;  
                        this.pair.exist = true;   
                        i++;                                   
                        break;
                    }
                    // return 'pair found'; //what to do wwhen pair found??
                }
            }
        }
    }



    checkForTriple(){
        //check hand to see if you are holding a pair
        //put the pairin array position 0 & 1 for discard
        //if two pairs which one is higher??
        for(let i = 0; i<this.cardHand.length; i++){
            for(let j = i+1; j<this.cardHand.length; j++){
                if(this.cardHand[i].charAt(0) == this.cardHand[j].charAt(0)){
                    for(let m = j+1; m<this.cardHand.length; m++){
                        if(this.cardHand[i].charAt(0) == this.cardHand[m].charAt(0)){
                            this.triple.tripleCards.push(this.cardHand[i]);
                            this.triple.tripleCards.push(this.cardHand[j]);
                            this.triple.tripleCards.push(this.cardHand[m]);

                            this.triple.tripleValue = cardValues[this.triple.tripleCards[0].charAt(0)] * 3;

                            this.triple.exist = true;
                            return;
                            //return 'triple found';
                        }    
                    }
                }
            }
        }
    }

    checkForQuad(){
        //check hand to see if you are holding a pair
        //put the pairin array position 0 & 1 for discard
        //if two pairs which one is higher??
        for(let i = 0; i<this.cardHand.length; i++){
            for(let j = i+1; j<this.cardHand.length; j++){
                if(this.cardHand[i].charAt(0) == this.cardHand[j].charAt(0)){
                    for(let m = j+1; m<this.cardHand.length; m++){
                        if(this.cardHand[i].charAt(0) == this.cardHand[m].charAt(0)){
                            for(let n = m+1; n < this.cardHand.length; n++){
                                if(this.cardHand[i].charAt(0) == this.cardHand[n].charAt(0)){
                                    this.quad.quadCards.push(this.cardHand[i]);
                                    this.quad.quadCards.push(this.cardHand[j]);
                                    this.quad.quadCards.push(this.cardHand[m]);
                                    this.quad.quadCards.push(this.cardHand[n]);

                                    this.quad.quadValue = cardValues[this.quad.quadCards[0].charAt(0)] * 4;

                                    this.quad.exist = true;
                                    break;
                                    //return 'quads found';
                                }
                            }
                        }    
                    }
                }
            }
        }
    }

    checkForRun(){
        //check hand to see if holding a run
        //put the run in array position 0, 1 & 2 for discard
        let tempArr = [];
        for(let i = 0; i<this.cardHand.length; i++){
            for(let j = i; j<this.cardHand.length; j++){
                let suit = this.carHand[i].charAt(1);
                if(suit == this.cardHand[j].charAt(1)){
                    count++;
                }
            }
        }
    }

    checkForHighCard(){
        //check to see what your highest card is
        //put card in array position 0 for discard
        let highest = 0;
        let highCardPos = 0;
        for(let i = 0; i<this.cardHand.length; i++){
            let cardVal = cardValue(this.cardHand[i]);
            if(cardVal > highest){
                highest = cardVal;
                highCardPos = i;
            }
        }
        return this.cardHand[highCardPos];

    }

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