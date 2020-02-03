let Player = require('./player.js');
let Dealer = require('./dealer.js');

let dealer = new Dealer();
let player1 = new Player();
player1.recieveHand(dealer.compHand);

dealer.shuffle();
dealer.deal();

console.log(`${dealer.getUserHand} /// ${player1.getCardHand} ///${dealer.getShuffledDeck.length}`);

let discarded = player1.discard(1);
dealer.addToDiscard(discarded);
player1.pickUpCard(dealer.nextCard);

console.log(`${dealer.getUserHand} /// ${player1.getCardHand} /// ${dealer.getDiscardPile} /// ${dealer.getShuffledDeck.length}`);

console.log(player1.checkForHighCard());

console.log(player1.checkForPair());

console.log(player1.pair);
