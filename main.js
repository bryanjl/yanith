import { Graphics } from './cards.js';
import { Dealer } from './dealer.js';
import { Player } from './player.js';
import { Checks } from './checks.js';
import { Scores } from './scoreboard.js'


//pointers to document elements 
//computer hand
let cCard1 = document.getElementById('c-card1');
let cCard2 = document.getElementById('c-card2');
let cCard3 = document.getElementById('c-card3');
let cCard4 = document.getElementById('c-card4');
let cCard5 = document.getElementById('c-card5');

//pointers to document elements 
//discard pile and deck
let dCard1 = document.getElementById('d-card1');
let dCard2 = document.getElementById('d-card2');


//pointers to document elements 
//user hand
let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let card4 = document.getElementById('card4');
let card5 = document.getElementById('card5');

//pointer for play hand button
let playHandBtn = document.getElementById('play-hand');
let yanithBtn = document.getElementById('yanith');
let newRoundBtn = document.getElementById('new-round');
let newGameBtn = document.getElementById('new-game');

//display yanith on screen
let displayYan = document.getElementById('declared-yan');

//intitialize graphics
//set init for comp, discard, user
let graphic = new Graphics();

//intialize checks module;
let check = new Checks();

//intialize scoreboard
let score = new Scores();

//some global variables
let handVal;
let compHand; 
let dealer;

newGameBtn.addEventListener('click', function(){
    
});

newRoundBtn.addEventListener('click', function() {
    graphic.removeUserChilds();
    graphic.removeCompChilds();
    graphic.removeDiscardChilds();

    //new dealer
    //shuffle and deal to user and comp
    displayYan.style.display = 'none';
    dealer = new Dealer();

    dealer.shuffle();
    dealer.deal();

    compHand = dealer.getCompHand;
    graphic.cardToUser();
    graphic.cardToComp();
    setTimeout(() => {
        graphic.userInit(dealer.getUserHand);
        graphic.discardInit(dealer.getDiscardPile[0]);
        graphic.compInit();
        graphic.removeDeckChilds();
        console.log(score.compWinCount);
        console.log(score.userWinCount);
        if(score.compWinCount > score.userWinCount){
            setTimeout(() => {
                compTurn(compHand);
            }, 1000);            
        } else {
            turnOnListeners();
        }
    }, 600);
    
});

function userTurn(){
    
    let userArr = graphic.getSelectedCards(); 
    //console.log(userArr);
    if(userArr.length == 0){
        alert('Please Select Cards to Play');
    } else {            
        handVal = check.checkAll(userArr);
        if (handVal == -1){
            alert('You Cannot Play Those Cards Together')
        } else {               
            if(graphic.getDiscardClicked == false){
                dealer.addToDiscard(graphic.getSelectedCards());
                graphic.moveToDiscard();
                graphic.shiftCards();
                console.log('shuffled deck: ' + dealer.getShuffledDeck);
                let dealersNextCard = dealer.nextCard;
                let newestCard = graphic.addCardToHand(dealersNextCard);
                //this allows you to click the newest card dealt
                //if its the same as the discardpil top card
                //youre allowed to lay it down
                newestCard.addEventListener('click', newCardClick);
                function newCardClick() {
                    if(dealersNextCard.charAt(0) === dealer.getDiscardPile[0].charAt(0)){
                        dealer.addToDiscard(dealersNextCard);
                        dCard2.appendChild(newestCard.firstChild);
                    }                    
                }
                setTimeout(() => {
                    newestCard.removeEventListener('click', newCardClick);
                }, 1500);
            } else {
                dealer.removeTopCard();
                dealer.addToDiscard(graphic.getSelectedCards());
                graphic.moveToDiscard();
                graphic.setDiscardClicked(false);
                graphic.shiftCards();
                graphic.addDiscardToHand();     
            }
            setTimeout(() => {
                dealer.updateUserHand(graphic.getUnselectedCards());
                turnOffListeners();
                compTurn(compHand);
            }, 1500);
        }
    } 
}

function userYanith(){
    if(check.handValue(graphic.getUnselectedCards()) < 6){
        console.log('YANITH');
        displayYan.style.display = 'block';
        displayYan.style.top = '400px';
        
        graphic.showCompHand(compHand);
        score.compareScores('user', check.handValue(dealer.getUserHand), check.handValue(compHand));
        score.checkFourWins();
        score.reduceScoreCheck();
        graphic.setUserTotal(score.getUserTotal);
        graphic.setCompTotal(score.getCompTotal);
        turnOffListeners();
    } else {
        alert('You cant call Yanith yet');
    }
}

function discClick(){
    graphic.discardClick();
}

function turnOnListeners(){
    //play hand button event listener
    //listen to the play hand button
    //move the cards to discard -- the card on the right is always on top
    //shift the cards in the user hand
    playHandBtn.addEventListener('click', userTurn);

    yanithBtn.addEventListener('click', userYanith);
    
    //event listeners for user hand
    //lifts the cards the user selects
    card1.addEventListener('click', graphic.liftCards);
    card2.addEventListener('click', graphic.liftCards);
    card3.addEventListener('click', graphic.liftCards);
    card4.addEventListener('click', graphic.liftCards);
    card5.addEventListener('click', graphic.liftCards);

    //event listener for a user click to the discard pile
    dCard2.addEventListener('click', discClick);
}


//turn off all the user's event listeners
function turnOffListeners(){
    //play hand button event listener
    playHandBtn.removeEventListener('click', userTurn);

    //yanith button listener
    yanithBtn.removeEventListener('click', userYanith);
    
    //event listeners for user hand
    card1.removeEventListener('click', graphic.liftCards);
    card2.removeEventListener('click', graphic.liftCards);
    card3.removeEventListener('click', graphic.liftCards);
    card4.removeEventListener('click', graphic.liftCards);
    card5.removeEventListener('click', graphic.liftCards);

    //event listener for a user click to the discard pile
    dCard2.removeEventListener('click', discClick);
}

function compTurn(compHand){
    //inttiate new player with hand from previous hand
    //let compHand = dealer.getCompHand;
    console.log(dealer.getUserHand);
    let player1 = new Player(compHand, dealer.getTopCard);
    //check to see if using the discard card in the future will make a higher value
    //sets the state of discardPickup to true
    player1.cardToPickup();

    console.log('pair in hand: ' + player1.pair.pairCards);
    console.log('potential pair' + player1.futureHand.pair.pairCards);
    // console.log(player1.secondPair);
    // console.log(player1.triple);
    // console.log(player1.quad);
    // console.log(player1.run);
    // console.log(player1.highCard);


    
    console.log('player1.cardHand: ' + player1.cardHand);
    console.log('player1.potHand: ' + player1.potHand);
    console.log('player1.futureHand: ' + player1.futureHand);
    
    console.log('player1.discardPickup: ' + player1.discardPickup);

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
           // console.log('comparehands:  ' + player1.compareHands(futureCards, toDiscard));
           // console.log(`future cards:  ${futureCards} ${futureCards.length}, toDiscard: ${toDiscard} ${toDiscard.length}`);
            if(player1.compareHands(futureCards, toDiscard)){
                //if true is recieved --> need to go back to get next highest hand to discard
                //turn into loop and keep trying until the hand is not the same;
                //send the position its not allowed to be
                
                
                highestHand = player1.highestHand(highestHand);
                //use position to get an array of cards with highest value
                
               // console.log(`tempcard ${tempCard}`);
                if(highestHand == -1 && compHand.length > 1) {
                    console.log(`toDiscard ${toDiscard}`);
                    toDiscard = check.secondHighCard(compHand);
                    console.log(`toDiscard ${toDiscard}`);
                } else {
                    toDiscard = player1.getHandToDiscard(highestHand);
                }

                console.log('im here');
                //discard the hand if false is recieved
                let toPile = player1.discard(toDiscard);
                //pickup from discard pile
                player1.pickUpCard(dealer.getTopCard);
                //remove the card from the discardpile
                dealer.removeTopCard();
                //add the discarded cards to the discard pile
                dealer.addToDiscard(toPile);
                
                //console.log(`to pile: ${toPile[0]}`);
                graphic.removeCompCards(player1.getCardHand.length);
                graphic.moveCompToDiscard(toPile[0]);            
                //set compHand to the current hand in player for next turn
                compHand = player1.getCardHand;
                console.log(`comp hand:  ${compHand}`);
                
                
            } else { //if compareHands is false
                //discard the hand if false is recieved
                let toPile = player1.discard(toDiscard);
                //pickup from discard pile
                player1.pickUpCard(dealer.getTopCard);
                //remove the card from the discardpile
                dealer.removeTopCard();
                //add the discarded cards to the discard pile
                dealer.addToDiscard(toPile);
                
                //console.log(`to pile: ${toPile[0]}`);
                graphic.removeCompCards(player1.getCardHand.length);
                graphic.moveCompToDiscard(toPile[0]);            
                //set compHand to the current hand in player for next turn
                compHand = player1.getCardHand;
                console.log(`comp hand:  ${compHand}`);
            }
        } else { //if player.discard pick up = false
            //discard highest hand
            //pickup card from deck
            let toPile = player1.discard(toDiscard);
            dealer.addToDiscard(toPile);
            graphic.moveCompToDiscard(toPile[0]);
            player1.pickUpCard(dealer.nextCard);            
            //set compHand to the current hand for next turn
            graphic.hideCompCards(player1.getCardHand.length-1);
            graphic.dealCompCard(player1.getCardHand.length-1);
            setTimeout(() => {
                graphic.removeCompCards(player1.getCardHand.length);
                graphic.showCompCards(player1.getCardHand.length-1);
            }, 600);
            compHand = player1.getCardHand;   
            console.log(`comp hand:  ${compHand}`);         
        }
    } else { //if yanith is called
        //The current hand is under 5 and yanih is declared
        displayYan.style.display = 'block';
        
        displayYan.style.top = '150px';
        graphic.showCompHand(compHand);
        console.log('Computer Calls Yanith');
        score.compareScores('comp', check.handValue(dealer.getUserHand), check.handValue(compHand));
        score.checkFourWins();
        score.reduceScoreCheck();
        graphic.setUserTotal(score.getUserTotal);
        graphic.setCompTotal(score.getCompTotal);
        turnOffListeners();
    }
    turnOnListeners();
}
