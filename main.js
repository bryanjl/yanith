let Player = require('./player.js');
let Dealer = require('./dealer.js');

let dealer = new Dealer();
let player1 = new Player();
//player1.recieveHand(dealer.compHand);

 player1.recieveHand(['AD', 'KD', 'JD', '1D', 'QD']);



dealer.shuffle();
dealer.deal();
//player1.recieveHand(dealer.getCompHand);


console.log(`${dealer.getUserHand} /// ${player1.getCardHand} ///${dealer.getShuffledDeck.length}`);

//let discarded = player1.discard(1);
//dealer.addToDiscard(discarded);
//player1.pickUpCard(dealer.nextCard);

console.log(`${dealer.getUserHand} /// ${player1.getCardHand} /// ${dealer.getDiscardPile} /// ${dealer.getShuffledDeck.length}`);

// console.log(player1.checkForHighCard());

// console.log(player1.checkForPair());

player1.checkForPair();
player1.checkForTriple();
player1.checkForQuad();
player1.checkForRun();


console.log(player1.pair);

console.log(player1.secondPair);

console.log(player1.triple);

console.log(player1.quad);

console.log(player1.run);
