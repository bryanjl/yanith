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
                    //if there is already a pair set the second pair to a new status                
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
        //check for a three of a kind
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
        //Check for a 4 of a kind
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
        
        //find the cards with same suit and put them in a temp array
        let tempArr = [];   
        for(let i = 0; i<this.cardHand.length; i++){
            tempArr.push(this.cardHand[i]);
            for(let j = i+1; j<this.cardHand.length; j++){
                let suit = tempArr[0].charAt(1);
                if(suit == this.cardHand[j].charAt(1)){
                    tempArr.push(this.cardHand[j]);
                }                
            }
            //if tempArr is greater than three there is a possibility of a run
            if(tempArr.length >= 3){
                tempArr.sort((a,b) => cardPos[a.charAt(0)] - cardPos[b.charAt(0)]);
                console.log(tempArr);
                break;
            } else {            //if less than three reset the temp arr
                tempArr = [];
            }
        }
        //tempArr.sort()
        //console.log(tempArr);
        // (a,b) => cardPos[a.charAt(0)] > cardPos[b.charAt(0)] ? b : a

        //sort to get all cards in order based on card position map
        // for(let i = 0; i<tempArr.length-1; i++){
        //     //check for J, Q, K, A
        //     if(cardPos[tempArr[i].charAt(0)] > cardPos[tempArr[i+1].charAt(0)]){
        //         let tempHold = tempArr[i];
        //         tempArr[i] = tempArr[i+1];
        //         tempArr[i+1] = tempHold;
        //         i=0;
        //     }

        // }

        console.log(tempArr);


        //check to see if the run exists by comparing the value of card
        //!!!!!!!!!!!!!!!!!!!how to get Ace to be either postion 1 or last position based on what you want to do for the run!!!!!!!!!!!!!!!!
        
        
        if(tempArr.length>=3){
            let x = cardPos[tempArr[0].charAt(0)];
            console.log(x);
            //let y = 0;
            for(let i = 1; i<tempArr.length; i++){
                // //check for J, Q, K, A
                // if (tempArr[i].charAt(0) == 'J'){
                //     y = 11;
                // } else if (tempArr[i].charAt(0) == 'Q'){
                //     y = 12;
                // } else if (tempArr[i].charAt(0) == 'K'){
                //     y = 13;
                // } else if (tempArr[i].charAt(0) == 'A'){
                //     y = 14;
                // } else {
                //     y = cardPos[tempArr[i].charAt(0)];
                // }

                let y = cardPos[tempArr[i].charAt(0)];

                
                if (y == x+1){
                    x = y;
                } else {
                    return;
                }
            }


            //set the status perimeiters
            this.run.runCards = tempArr;
            this.run.exist = true;

            //count the cards
            let count = 0;
            for(let i = 0; i<this.run.runCards.length; i++){
                count += cardValues[this.run.runCards[i].charAt(0)];
            }
            this.run.runValue = count; 
        } else {
            return;
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