let Player = require('./player.js');
let Dealer = require('./dealer.js');

let dealer = new Dealer();

//player1.recieveHand(dealer.compHand);

 //player1.recieveHand(['AD', 'KD', 'JD', '1D', 'QD']);



dealer.shuffle();
dealer.deal();

console.log(dealer.getCompHand);
let player1 = new Player(dealer.getCompHand);
//console.log(getCardHand);
//console.log(player1.pair);

//player1.recieveHand(dealer.getCompHand);



