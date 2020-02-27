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
let cCards = [cCard1, cCard2, cCard3, cCard4, cCard5];
let spaceArr = [card1Space, card2Space, card3Space, card4Space, card5Space];

let movedCard;

class Graphics {
    //sets up user cards graphics
    userInit(cardArr = []){
        console.log('cardArr userINIT' + cardArr);
        this.discardClicked = false;
        let pos = 0;
        for(let card of cardArr){
            let cardPicture = document.createElement('img');
            cardPicture.src = cardDeck[card];
            cards[pos].appendChild(cardPicture);
            pos++
        }
    }

    //sets up discard graphics
    discardInit(sentCard){
        let discardCard = document.createElement('img');
        discardCard.src = cardDeck[sentCard];
        dCard2.appendChild(discardCard);
    }

    //sets up computer grahics
    compInit(){
        let compDiv = [cCard1, cCard2, cCard3, cCard4, cCard5];
        for(let div of compDiv){       
            if(div.firstChild != null){
                div.removeChild(div.firstChild);
            } 
            let compCard = document.createElement('img');
            compCard.src = './svg/cardback_blue.svg';
            div.appendChild(compCard);
        }
    }


    //shift cards in user hand all the way to the left
    shiftCards(){
        for(let i = 0; i<4; i++){
            if(cards[i].firstChild == null && cards[i+1].firstChild != null){
                cards[i].appendChild(cards[i+1].firstChild);
                i = -1;
            } 
        }            
    }

    hideCompCards(length){
        for(let i = 0; i<5; i++){
            if(i>=length && cCards[i].firstChild != null){
                cCards[i].firstChild.style.display = 'none';
            }
        }
    }

    showCompCards(length){
        for(let i = 0; i<5; i++){
            if(i>=length && cCards[i].firstChild != null){
                cCards[i].firstChild.style.display = 'block';
            }
        }
    }

    removeCompCards(length){
        for(let i = 0; i<5; i++){
            if(i >= length && cCards[i].firstChild != null){
                cCards[i].removeChild(cCards[i].firstChild);
            }
        }
    }

    moveCompToDiscard(compDiscard){
        let compDis = document.createElement('img');
        compDis.src = cardDeck[compDiscard];
        dCard2.appendChild(compDis);
    }

    //move the selected cards to the discarded pile
    moveToDiscard(){    
        for(let card of cards){
            if(card.firstChild != null && card.firstChild.offsetTop != 0){
                card.firstChild.style.boxShadow = 'none';
                
                //add animation here
                // card.firstChild.style.transition = 'all 1s';
                // card.firstChild.style.top = dCard2.offsetTop + 'px';
                // card.firstChild.style.left = dCard2.offsetLeft + 'px';
                //this.userToDiscard(card);
                //timeout here
                card.firstChild.style.bottom = '0px';
                    dCard2.appendChild(card.firstChild);
                
                
            }
        }
    }

    // returns an array of the cards that are sent to the discard pile
    getSelectedCards(){
        let retArr = [];
        for(let card of cards){
            //console.log(`first child:${card.firstChild}  ******  off set top ${card.firstChild.offsetTop}` );
            if(card.firstChild != null && card.firstChild.offsetTop != 0){
                let address = card.firstChild.src;    
                let pattern = address.match(/\w?\w\w\.svg/g);   
                retArr.push(Object.keys(cardDeck).find(key => cardDeck[key] === './svg/' + pattern));
            }
        }
        return retArr;
    }

    // returns an array of the cards that are left in the hand
    getUnselectedCards(){
        let retArr = [];
        for(let card of cards){
            if(card.firstChild != null && card.firstChild.offsetTop == 0){
                let address = card.firstChild.src;    
                let pattern = address.match(/\w?\w\w\.svg/g);  
                if(pattern == 'red.svg'){
                    pattern = 'joker_red.svg';
                }  else if (pattern == 'ack.svg'){
                    pattern = 'joker_black.svg';
                }
                retArr.push(Object.keys(cardDeck).find(key => cardDeck[key] === './svg/' + pattern));
            }
        }
        return retArr;
    }

    //lift cards for selection
    liftCards(){
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
    addCardToHand(cardToPickUp){
        console.log('dealer.getnextcard ' + cardToPickUp);
        for(let card of cards){
            if (card.firstChild != null){
                continue;
            } else {
                let pickupCard = document.createElement('img');
                pickupCard.src = cardDeck[cardToPickUp];
                //add animation here
                this.dealUserCard(card);
                setTimeout(() => {
                    this.removeSingleDeckChilds();
                    card.appendChild(pickupCard);
                    
                }, 600);
                return card;
                //break;
            }
        }
    }

    addDiscardToHand(){
        let pos = 0;
        for(let card of cards){
            if (card.firstChild != null){
                pos++;
                continue;
            } else {
               // movedCard.style.right = (spaceArr[pos] + 150) + 'px';
                card.appendChild(movedCard);
                card.firstChild.style.left = (card.firstChild.offsetLeft - 150) + 'px';
                break;
                //movedCard = undefined;
            }
        }
    }

    //moves the card over 150px
    //need to send something to know that user wants to pick up this card
    discardClick(){ 
        
        if (this.discardClicked == false){
            this.discardClicked = true;
            movedCard = dCard2.lastChild;  
            let pos = movedCard.offsetLeft;
            movedCard.style.left = (pos + 150) + 'px';
        } else {
            this.discardClicked = false;
            movedCard.style.left = (movedCard.offsetLeft - 150) + 'px';
            movedCard = undefined;
        }
    }

    showCompHand(cardArr){
        let pos = 0;
        for(let card of cardArr){
            let cardPicture = document.createElement('img');
            cardPicture.src = cardDeck[card];
            cCards[pos].appendChild(cardPicture);
            pos++
        }
    }

    removeUserChilds(){
        for(let card of cards){
            if (card.firstChild != null){
                card.removeChild(card.firstChild);
            }
        }
    }

    removeCompChilds(){
        for(let card of cCards){
            if(card.firstChild != null){
                card.removeChild(card.firstChild);
            }
        }
    }

    removeDiscardChilds(){
        while(dCard2.firstChild != null){
            dCard2.removeChild(dCard2.firstChild);    
        }
    }

    removeDeckChilds(){
        console.log(dCard1.childElementCount);
        let toDel = document.getElementById('board-table');
        for(let i = 0; i<10; i++){
            toDel.removeChild(toDel.lastChild);
        }
    }

    removeSingleDeckChilds(){
        let toDel = document.getElementById('board-table');
        toDel.removeChild(toDel.lastChild);
    }

    get getDiscardClicked(){
        return this.discardClicked;
    }
    
    setDiscardClicked(val){
        this.discardClicked = val;
    }

    setUserTotal(score){
        document.getElementById('user-total-disp').innerHTML = score;
    }

    setCompTotal(score){
        document.getElementById('comp-total-disp').innerHTML = score;
    }

    cardToUser(){
        for(let card of cards){        
            let moveCard = document.createElement('img');
            moveCard.src = './svg/cardback_blue.svg';
            moveCard.style.width = cardWidth + 'px';
            moveCard.style.height = (boardHeight/6) + 'px';
            moveCard.style.position = 'absolute';
            moveCard.className = 'del';
            document.getElementById('board-table').appendChild(moveCard);
            let dCardPosTop = dCard1.offsetTop;
            let dCardPosLeft = dCard1.offsetLeft;
            moveCard.style.top = dCardPosTop + 'px';
            moveCard.style.left = dCardPosLeft + 'px';
            moveCard.style.transition = 'all 1s';

            let posToTop = card.offsetTop;
            let posToLeft = card.offsetLeft;

            moveCard.style.left = posToLeft + 'px';
            moveCard.style.top = posToTop + 'px';

            moveCard.style.opacity = '0';
        }
    }

    cardToComp(){
        for(let card of cCards){        
            let moveCard = document.createElement('img');
            moveCard.src = './svg/cardback_blue.svg';
            moveCard.style.width = cardWidth + 'px';
            moveCard.style.height = (boardHeight/6) + 'px';
            moveCard.style.position = 'absolute';
            document.getElementById('board-table').appendChild(moveCard);
            let dCardPosTop = dCard1.offsetTop;
            let dCardPosLeft = dCard1.offsetLeft;
            moveCard.style.top = dCardPosTop + 'px';
            moveCard.style.left = dCardPosLeft + 'px';
            moveCard.style.opacity = '1';
            moveCard.style.transition = 'all 1s';

            let posToTop = card.offsetTop;
            let posToLeft = card.offsetLeft;

            moveCard.style.left = posToLeft + 'px';
            moveCard.style.top = posToTop + 'px';
            // moveCard.style.transition = 'all 1s';
            //moveCard.style.opacity = '0';

            
        }
    }

    dealUserCard(card){
        let moveCard = document.createElement('img');
        moveCard.src = './svg/cardback_blue.svg';
        moveCard.style.width = cardWidth + 'px';
        moveCard.style.height = (boardHeight/6) + 'px';
        moveCard.style.position = 'absolute';
        document.getElementById('board-table').appendChild(moveCard);
        let dCardPosTop = dCard1.offsetTop;
        let dCardPosLeft = dCard1.offsetLeft;
        moveCard.style.top = dCardPosTop + 'px';
        moveCard.style.left = dCardPosLeft + 'px';
        moveCard.style.opacity = '1';
        moveCard.style.transition = 'all 1s';

        let posToTop = card.offsetTop;
        let posToLeft = card.offsetLeft;

        moveCard.style.left = posToLeft + 'px';
        moveCard.style.top = posToTop + 'px';
        moveCard.style.opacity = '0';
    }


    dealCompCard(pos){
        let card = cCards[pos];
        let moveCard = document.createElement('img');
        moveCard.src = './svg/cardback_blue.svg';
        moveCard.style.width = cardWidth + 'px';
        moveCard.style.height = (boardHeight/6) + 'px';
        moveCard.style.position = 'absolute';
        document.getElementById('board-table').appendChild(moveCard);
        let dCardPosTop = dCard1.offsetTop;
        let dCardPosLeft = dCard1.offsetLeft;
        moveCard.style.top = dCardPosTop + 'px';
        moveCard.style.left = dCardPosLeft + 'px';
        moveCard.style.opacity = '1';
        moveCard.style.transition = 'all 1s';

        let posToTop = card.offsetTop;
        let posToLeft = card.offsetLeft;

        moveCard.style.left = posToLeft + 'px';
        moveCard.style.top = posToTop + 'px';
        moveCard.style.opacity = '0';
    }

    userToDiscard(sentCard){
        let posToTop = dCard2.offsetTop;
        let posToLeft = dCard2.offsetLeft;
        console.log(`${sentCard} // ${posToTop}  //  ${posToLeft}`)
        
        sentCard.firstChild.style.transition = 'all 1s';
        sentCard.firstChild.style.top = posToTop + 'px';
        sentCard.firstChild.style.left = posToLeft + 'px';
    }
}

export { Graphics };



