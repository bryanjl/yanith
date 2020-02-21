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

//computer cards height and width
let cCard1 = document.getElementById('c-card1');
cCard1.style.width = cardWidth + 'px';
cCard1.style.height = (boardHeight/6) + 'px';
let cCard2 = document.getElementById('c-card2');
cCard2.style.width = cardWidth + 'px';
cCard2.style.height = (boardHeight/6) + 'px';
let cCard3 = document.getElementById('c-card3');
cCard3.style.width = cardWidth + 'px';
cCard3.style.height = (boardHeight/6) + 'px';
let cCard4 = document.getElementById('c-card4');
cCard4.style.width = cardWidth + 'px';
cCard4.style.height = (boardHeight/6) + 'px';
let cCard5 = document.getElementById('c-card5');
cCard5.style.width = cardWidth + 'px';
cCard5.style.height = (boardHeight/6) + 'px';
//computer hand divs position on the board
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


//discard pile height and width
let dCard1 = document.getElementById('d-card1');
dCard1.style.width = cardWidth + 'px';
dCard1.style.height = (boardHeight/6) + 'px';
let dCard2 = document.getElementById('d-card2');
dCard2.style.width = cardWidth + 'px';
dCard2.style.height = (boardHeight/6) + 'px';
//discard pile positioning on the board
dCard1.style.left = (boardWidth / 2) - cardWidth + 'px';
dCard2.style.left = (boardWidth / 2)  + 'px';

let backOfCardImg = document.createElement('img');
backOfCardImg.src = './svg/cardback_blue.svg';
dCard1.appendChild(backOfCardImg);
dCard1.firstChild.addEventListener('click', function(){
    addCardToHand('AH');
});



//player card div set up get the width and the height
//intialize the div names
let card1 = document.getElementById('card1');
card1.style.width = cardWidth + 'px';
card1.style.height = (boardHeight/6) + 'px';
let card2 = document.getElementById('card2');
card2.style.width = cardWidth + 'px';
card2.style.height = (boardHeight/6) + 'px';
let card3 = document.getElementById('card3');
card3.style.width = cardWidth + 'px';
card3.style.height = (boardHeight/6) + 'px';
let card4 = document.getElementById('card4');
card4.style.width = cardWidth + 'px';
card4.style.height = (boardHeight/6) + 'px';
let card5 = document.getElementById('card5');
card5.style.width = cardWidth + 'px';
card5.style.height = (boardHeight/6) + 'px';

//position the card divs on the board
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


let cards = [card1, card2, card3, card4, card5];



function userInit(cardArr = []){
    let pos = 0;
    for(let card of cardArr){
        let cardPicture = document.createElement('img');
        cardPicture.src = cardDeck[card];
        cards[pos].appendChild(cardPicture);
        pos++
    }
}

function discardInit(sentCard){
    let discardCard = document.createElement('img');
    discardCard.src = cardDeck[sentCard];
    dCard2.appendChild(discardCard);
}

function compInit(){
    let compDiv = [cCard1, cCard2, cCard3, cCard4, cCard5];
    for(let div of compDiv){        
        let compCard = document.createElement('img');
        compCard.src = './svg/cardback_blue.svg';
        div.appendChild(compCard);
    }
}

//event listeners for user hand
card1.addEventListener('click', liftCards);
card2.addEventListener('click', liftCards);
card3.addEventListener('click', liftCards);
card4.addEventListener('click', liftCards);
card5.addEventListener('click', liftCards);



//listen to the play hand button
//move the cards to discard -- the card on the right is always on top
//shift the cards in the user hand
let playHandBtn = document.getElementById('play-hand');
playHandBtn.addEventListener('click', function(){
    getSelectedCards(); 
    moveToDiscard();
     shiftCards();
});


//shift cards in user hand all the way to the left
function shiftCards(){
    for(let i = 0; i<4; i++){
        if(cards[i].firstChild == null && cards[i+1].firstChild != null){
            cards[i].appendChild(cards[i+1].firstChild);
            i = -1;
        } 
    }    
}

//move the selected cards to the discarded pile
function moveToDiscard(){    
    for(let card of cards){
        if(card.firstChild != null && card.firstChild.offsetTop != 0){
            card.firstChild.style.boxShadow = 'none';
            card.firstChild.style.bottom = '0px';
            dCard2.appendChild(card.firstChild);
        }
    }
}

// returns an array of the cards that are sent to the discard pile
function getSelectedCards(){
    let retArr = [];
    for(let card of cards){
        if(card.firstChild != null && card.firstChild.offsetTop != 0){
            let address = card.firstChild.src;    
            let pattern = address.match(/\w?\w\w\.svg/g);   
            retArr.push(Object.keys(cardDeck).find(key => cardDeck[key] === './svg/' + pattern));
        }
    }
    return retArr;
}

//lift cards for selection
function liftCards(){
    if(this.firstChild.style.bottom == '0px'){
        this.firstChild.style.bottom = '15px';
        this.firstChild.style.boxShadow = '5px 5px black';
    } else {
        this.firstChild.style.bottom = '0px';
        this.firstChild.style.boxShadow = 'none';
    }
}

//pickup card from deck
//sent a string of the card value
function addCardToHand(cardToPickUp){
    for(let card of cards){
        if (card.firstChild != null){
            continue;
        } else {
            let pickupCard = document.createElement('img');
            pickupCard.src = cardDeck[cardToPickUp];
            card.appendChild(pickupCard);
            break;
        }
    }
}

dCard2.addEventListener('click', function() {
    discardClick();
});

//moves the card over 150px
//need to send something to know that user wants to pick up this card
function discardClick(){    
    let pos = dCard2.firstChild.offsetLeft;
    dCard2.firstChild.style.left = (pos + 150) + 'px';
 }





export { userInit, discardInit, compInit };



