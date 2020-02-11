let Player = require('./player.js');
let Dealer = require('./dealer.js');

let dealer = new Dealer();

//player1.recieveHand(dealer.compHand);

 //player1.recieveHand(['AD', 'KD', 'JD', '1D', 'QD']);



dealer.shuffle();
dealer.deal();


//console.log(getCardHand);
//console.log(player1.pair);

//player1.recieveHand(dealer.getCompHand);


function newRound(){

}

function compTurn(compHand){
    //inttiate new player with hand from previous hand
    let player1 = new Player(compHand, dealer.getTopCard);

    console.log(player1.pair);
    console.log(player1.secondPair);
    console.log(player1.triple);
    console.log(player1.quad);
    console.log(player1.run);
    console.log(player1.highCard);


    
    console.log(player1.cardHand);
    console.log(player1.futureHand);

    if(player1.checkForYan() == -1){

        let highestHand = player1.highestHand();
        //console.log(highestHand);
        let toDiscard = player1.getHandToDiscard(highestHand);
        let toPile = player1.discard(toDiscard);
        dealer.addToDiscard(toPile);
        player1.pickUpCard(dealer.nextCard);
        
        compHand = player1.getCardHand;
    } else {
        return 'Yanith';
    }

    
        //player module does checks and determines what to do
        //!!!!does main do discarding or player module??  --game recieves cards to discard and puts in pile??
        //!!!!does main do pick up or player module??? --game picks up card and hands it to comp??
    //recieve hand at end of comp turn to hold for next turn
}

function userTurn(){

}

//console.log(dealer.getCompHand);
//let player1 = new Player(dealer.getCompHand);
let compHand = dealer.getCompHand;
console.log(compHand);
console.log(dealer.getDiscardPile);


compTurn(compHand);
    

//console.log(compHand);


// compTurn(compHand);

// console.log(compHand);
// console.log(dealer.getDiscardPile);