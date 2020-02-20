const cardDeck = {
    'AD': './svg/d1.svg',
    '2D': './svg/d2.svg',
    '3D': './svg/d3.svg', 
    '4D': './svg/d4.svg',
    '5D': './svg/d5.svg', 
    '6D': './svg/d6.svg',
    '7D': './svg/d7.svg',
    '8D': './svg/d8.svg',
    '9D': './svg/d9.svg',
    '10D': './svg/d10.svg',
    'JD': './svg/d11.svg',
    'QD': './svg/d12.svg',
    'KD': './svg/d13.svg',
    'AH': './svg/h1.svg',
    '2H': './svg/h2.svg',
    '3H': './svg/h3.svg',
    '4H': './svg/h4.svg',
    '5H': './svg/h5.svg',
    '6H': './svg/h6.svg',
    '7H': './svg/h7.svg',
    '8H': './svg/h8.svg',
    '9H': './svg/h9.svg',
    '10H': './svg/h10.svg',
    'JH': './svg/h11.svg',
    'QH': './svg/h12.svg',
    'KH': './svg/h13.svg',
    'AS': './svg/s1.svg',
    '2S': './svg/s2.svg',
    '3S': './svg/s3.svg',
    '4S': './svg/s4.svg',
    '5S': './svg/s5.svg',
    '6S': './svg/s6.svg',
    '7S': './svg/s7.svg',
    '8S': './svg/s8.svg',
    '9S': './svg/s9.svg',
    '10S': './svg/s10.svg',
    'JS': './svg/s11.svg',
    'QS': './svg/s12.svg',
    'KS': './svg/s13.svg',
    'AC': './svg/c1.svg',
    '2C': './svg/c2.svg',
    '3C': './svg/c3.svg',
    '4C': './svg/c4.svg',
    '5C': './svg/c5.svg',
    '6C': './svg/c6.svg',
    '7C': './svg/c7.svg',
    '8C': './svg/c8.svg',
    '9C': './svg/c9.svg',
    '10C': './svg/c10.svg',
    'JC': './svg/c11.svg',
    'QC': './svg/c12.svg',
    'KC': './svg/c13.svg',
    'R_JOK': './svg/joker_red.svg',
    'B_JOK': './svg/joker_black.svg'
};




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

// userInit(['AH', '2H', '3H', '4H', '5H']);

function userInit(cardArr = []){
    //user cards
    let card1 = document.getElementById('card1');
    card1.src = cardDeck[cardArr[0]];
    card1.style.width = cardWidth + 'px';
    let card2 = document.getElementById('card2');
    card2.src = cardDeck[cardArr[1]];
    card2.style.width = cardWidth + 'px';
    let card3 = document.getElementById('card3');
    card3.src = cardDeck[cardArr[2]];
    card3.style.width = cardWidth + 'px';
    let card4 = document.getElementById('card4');
    card4.src = cardDeck[cardArr[3]];
    card4.style.width = cardWidth + 'px';
    let card5 = document.getElementById('card5');
    card5.src = cardDeck[cardArr[4]];
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
}


//event listeners for user hand
card1.addEventListener('click', liftCards);
card2.addEventListener('click', liftCards);
card3.addEventListener('click', liftCards);
card4.addEventListener('click', liftCards);
card5.addEventListener('click', liftCards);

let playHandBtn = document.getElementById('play-hand');
let count = 0;
playHandBtn.addEventListener('click', function(){
    count++;
    moveToDiscard();
});

let cards = [card1, card2, card3, card4, card5];

function moveToDiscard(){
    
    for(let card of cards){
        if(card.style.bottom != '0px'){
            card.style.transition = 'all 1s';
            card.style.boxShadow = 'none';
            card.style.bottom = dCard2.style.bottom;
            card.style.left = dCard2.style.left;
            //count++;//dCard2.src = card.src;
            card.style.zIndex = 100 + count;
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




export { userInit };


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


