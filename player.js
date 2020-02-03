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
    constructor(cardHand = []){
        //create new player and recieve hand from dealer
        this.cardHand = cardHand;
    }

    discard(numOfCards){
        //Place one or more cards on to the discard pile
        //numOfCards(how many cards) position will always be at beginnning of array
        return this.cardHand.splice(0, numOfCards);
    }

    checkForPair(){
        //check hand to see if you are holding a pair
        //put the pairin array position 0 & 1 for discard
        //if two pairs which one is higher??
        for(let i = 0; i<this.cardHand.length; i++){
            for(let j = i+1; j<this.cardHand.length; j++){
                if(this.cardHand[i].charAt(0) == this.cardHand[j].charAt(0)){
                    return 'pair found'; //what to do wwhen pair found??
                }
            }
        }
        return 'No pairs'; //what to do with no pair found???
    }

    checkForTriple(){

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