let board = document.getElementById('board-table');
let boardWidth = board.offsetWidth;
let boardHeight = board.offsetHeight;
let cardWidth = boardWidth / 11;



//for computer hand top = =0
//user hand bottom = 0
let card1Space = cardWidth * 3;
let card2Space = cardWidth * 4;
let card3Space = cardWidth * 5;
let card4Space = cardWidth * 6;
let card5Space = cardWidth * 7;

//computer cards
let cCard1 = document.getElementById('c-card1');
cCard1.style.width = cardWidth + 'px';
let cCard2 = document.getElementById('c-card2');
cCard2.style.width = cardWidth + 'px';
let cCard3 = document.getElementById('c-card3');
cCard3.style.width = cardWidth + 'px';
let cCard4 = document.getElementById('c-card4');
cCard4.style.width = cardWidth + 'px';
let cCard5 = document.getElementById('c-card5');
cCard5.style.width = cardWidth + 'px';

cCard1.style.top = 0;
cCard1.style.left = card1Space + 'px';
cCard2.style.top = 0;
cCard2.style.left = card2Space + 'px';
cCard3.style.top = 0;
cCard3.style.left = card3Space + 'px';
cCard4.style.top = 0;
cCard4.style.left = card4Space + 'px';
cCard5.style.top = 0;
cCard5.style.left = card5Space + 'px';


//discard pile
let dCard1 = document.getElementById('d-card1');
dCard1.style.width = cardWidth + 'px';
let dCard2 = document.getElementById('d-card2');
dCard2.style.width = cardWidth + 'px';

dCard1.style.left = (boardWidth / 2) - cardWidth + 'px';
dCard2.style.left = (boardWidth / 2)  + 'px';


//user cards
let card1 = document.getElementById('card1');
card1.style.width = cardWidth + 'px';
let card2 = document.getElementById('card2');
card2.style.width = cardWidth + 'px';
let card3 = document.getElementById('card3');
card3.style.width = cardWidth + 'px';
let card4 = document.getElementById('card4');
card4.style.width = cardWidth + 'px';
let card5 = document.getElementById('card5');
card5.style.width = cardWidth + 'px';

card1.style.bottom = 0;
card1.style.left = card1Space + 'px';
card2.style.bottom = 0;
card2.style.left = card2Space + 'px';
card3.style.bottom = 0;
card3.style.left = card3Space + 'px';
card4.style.bottom = 0;
card4.style.left = card4Space + 'px';
card5.style.bottom = 0;
card5.style.left = card5Space + 'px';



//event listeners for user hand
card1.addEventListener('click', liftCards);
card2.addEventListener('click', liftCards);
card3.addEventListener('click', liftCards);
card4.addEventListener('click', liftCards);
card5.addEventListener('click', liftCards);

let playHandBtn = document.getElementById('play-hand');
playHandBtn.addEventListener('click', moveToDiscard);

let cards = [card1, card2, card3, card4, card5];

function moveToDiscard(){
    for(let card of cards){
        if(card.style.bottom != '0px'){
            card.style.transition = 'all 1s';
            card.style.boxShadow = 'none';
            card.style.bottom = dCard2.style.bottom;
            card.style.left = dCard2.style.left;
        }
    }
}

//lift cards for selection
function liftCards(){
    if(this.style.bottom == '0px'){
        this.style.bottom = '15px';
        this.style.boxShadow = '5px 5px black';
    } else {
        this.style.bottom = '0px';
        this.style.boxShadow = 'none';
    }
}







// card5.addEventListener('click',function(){
//     let topPos = dCard2.offsetTop;
//     let leftPos = dCard2.offsetLeft;
//     let cardtopPos = card5.offsetTop;
//     let cardleftPos = card5.offsetLeft;
//     let timer = setInterval(move, 10);

//     function move(){
        


//         if (cardtopPos == topPos && cardleftPos == leftPos){
//             clearInterval(timer);
//         } else if(cardtopPos <= ) {
//             cardtopPos--;
//             cardleftPos--;  
//             card5.style.top = cardtopPos + 'px';
//             card5.style.left = cardleftPos + 'p x';
//         }
//     }
// });


