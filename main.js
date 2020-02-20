// let Player = require('./player.js');
// let Dealer = require('./dealer.js');
// let userInit = require('./cards.js');

import { userInit } from './cards';
import { Dealer } from './dealer';
import { Player } from './player';

let dealer = new Dealer();

//player1.recieveHand(dealer.compHand);

 //player1.recieveHand(['AD', 'KD', 'JD', '1D', 'QD']);



dealer.shuffle();
dealer.deal();

userInit(dealer.getUserHand);

//console.log(getCardHand);
//console.log(player1.pair);

//player1.recieveHand(dealer.getCompHand);


function newRound(){

}

function compTurn(compHand){
    //inttiate new player with hand from previous hand
    let player1 = new Player(compHand, dealer.getTopCard);
    //check to see if using the discard card in the future will make a higher value
    //sets the state of discardPickup to true
    player1.cardToPickup();

    console.log(player1.pair);
    console.log(player1.secondPair);
    console.log(player1.triple);
    console.log(player1.quad);
    console.log(player1.run);
    console.log(player1.highCard);


    
    console.log(player1.cardHand);
    console.log(player1.potHand);
    console.log(player1.futureHand);
    
    console.log(player1.discardPickup);

    if(player1.checkForYan() == -1){
        //get the position of thehighest hand value
        let highestHand = player1.highestHand();
        //use position to get an array of cards with highest value
        let toDiscard = player1.getHandToDiscard(highestHand);
        //if discardPickup is true then compare the current hand and future hand for the same card
        if(player1.discardPickup == true){
            //get the cards in an array for the future hand 
            let futureHighHandPos = player1.futureHighestHand();
            let futureCards = player1.getFutureHandToDiscard(futureHighHandPos);
            //compare the hands to see if they contain the same hands
            //gets boolean of true if hands contain the same card
            //gets boolean false if hands do not contain the same card
            if(player1.compareHands(futureCards, toDiscard)){
                //if true is recieved --> need to go back to get next highest hand to discard
                //turn into loop and keep trying until the hand is not the same;
                for(let i = 0; i<6; i++){
                    if(player1.compareHands(futureCards, toDiscard)){
                        //if sending the a value to this function it shouldnt count it in its calcs
                        //this way it can find the next highest hand
                        //get the position of thehighest hand value
                        highestHand = player1.highestHand(highestHand);
                        //use position to get an array of cards with highest value
                        toDiscard = player1.getHandToDiscard(highestHand);
                    } else {
                        break;
                    }
                }
            } else {
                //discard the hand if false is recieved
                let toPile = player1.discard(toDiscard);
                //pickup from discard pile
                player1.pickUpCard(dealer.getTopCard);
                //remove the card from the discardpile
                dealer.removeTopCard();
                //add the discarded cards to the discard pile
                dealer.addToDiscard(toPile);            
                //set compHand to the current hand in player for next turn
                compHand = player1.getCardHand;
            }
        } else {
            //discard highest hand
            //pickup card from deck
            let toPile = player1.discard(toDiscard);
            dealer.addToDiscard(toPile);
            player1.pickUpCard(dealer.nextCard);            
            //set compHand to the current hand for next turn
            compHand = player1.getCardHand;            
        }
    } else {
        //The current hand is under 5 and yanih is declared
        return 'Yanith';
    }
}

function userTurn(){

}

//console.log(dealer.getCompHand);
//let player1 = new Player(dealer.getCompHand);
let compHand = dealer.getCompHand;
//console.log(compHand);
//console.log(dealer.getDiscardPile);

for(let i = 0; i<10; i++){
    let yan = compTurn(compHand);
    console.log(i);
    console.log('discard: ' + dealer.getDiscardPile);
    if(yan == 'Yanith'){
        console.log('YANITH');
        break;
    }
}

console.log('final hand: ' + compHand);


// compTurn(compHand);

// console.log(compHand);
// console.log(dealer.getDiscardPile);