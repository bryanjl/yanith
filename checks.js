const cardValues = {
    'A': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '1': 10,
    'J': 10,
    'Q': 10,
    'K': 10,
    'B': 0,
    'R': 0
};

const cardPos = {
    'A': 14,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '1': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'B': 0,
    'R': 0
};



class Checks {
    checkAll(sentArr){
        //takes the user array of cards and checks all the 
        let paArr = this.pairs(sentArr);
        let tArr = this.triples(sentArr);
        let qArr = this.quads(sentArr);
        let sArr = this.suit(sentArr);
        let rArr = [];
        if (sArr.length > 0){
            rArr = this.runs(sArr);
        }

        if(paArr.length > 0 && sentArr.length == 2){
            let handVal = this.handValue(paArr[0]);
            return handVal;
        } else if (tArr.length > 0 && sentArr.length == 3){
            let handVal = this.handValue(tArr);
            return handVal;
        } else if (qArr.length > 0 && sentArr.length == 4){
            let handVal = this.handValue(qArr);
            return handVal;
        } else if (rArr.length > 0){
            let handVal = this.handValue(rArr);
            return handVal;
        } else if(sentArr.length == 1){
            let handVal = this.handValue(sentArr)
            return handVal;
        } else {
            return -1;
        }
    }

    pairs(sentArr = []){
        //cheks for pairs in an array
        //return an array of pairs [[],[]]
        let x = 0;
        let pairArr = [];
        for(let i = 0; i<sentArr.length; i++){
            for(let j = i+1; j<sentArr.length; j++){
                if(sentArr[i].charAt(0) == sentArr[j].charAt(0)){
                    pairArr[x] = new Array(2);
                    pairArr[x][0] = sentArr[i];
                    pairArr[x][1] = sentArr[j];
                    x += 1;
                }
            }
        }
        return pairArr;
    }

    triples(sentArr = []){
        //checks for triples in an array
        //returns an array of the triples [ , , ]
        let tripArr = [];
        for(let i = 0; i<sentArr.length; i++){
            for(let j = i+1; j<sentArr.length; j++){
                if(sentArr[i].charAt(0) == sentArr[j].charAt(0)){
                   for(let m = j+1; m<sentArr.length; m++){
                       if(sentArr[i].charAt(0) == sentArr[m].charAt(0)){
                            tripArr.push(sentArr[i]);
                            tripArr.push(sentArr[j]);
                            tripArr.push(sentArr[m]);
                       }
                   }
                }
            }
        }
        return tripArr;
    }

    quads(sentArr = []){
        //checks for 4 of a kind in an array
        //returns an array of the cards [ , , , ]
        let quadArr = [];
        for(let i = 0; i<sentArr.length; i++){
            for(let j = i+1; j<sentArr.length; j++){
                if(sentArr[i].charAt(0) == sentArr[j].charAt(0)){
                   for(let m = j+1; m<sentArr.length; m++){
                       if(sentArr[i].charAt(0) == sentArr[m].charAt(0)){
                           for(let n = m+1; n<sentArr.length; n++){
                               if(sentArr[i].charAt(0) == sentArr[n].charAt(0)){
                                   quadArr.push(sentArr[i]);
                                   quadArr.push(sentArr[j]);
                                   quadArr.push(sentArr[m]);
                                   quadArr.push(sentArr[n]);
                               }
                           }
                       }
                   }
                }
            }
        }
        return quadArr;
    }

    highCard(sentArr = []){
        //returns the highest card in thearray that was sent
        sentArr.sort((a,b) => cardValues[b.charAt(0)] - cardValues[a.charAt(0)]);
        let highCardArr = new Array(1);
        highCardArr[0] = sentArr[0];
        return highCardArr;
    }

    secondHighCard(sentArr){
        sentArr.sort((a,b) => cardValues[b.charAt(0)] - cardValues[a.charAt(0)]);
        let retArr = [];
        retArr.push(sentArr[1]);
        return retArr;
    }

    lowCard(sentArr = []){
        //returns the lowest card from the array that was sent
        sentArr.sort((a,b) => cardValues[a.charAt(0)] - cardValues[b.charAt(0)]);
        let lowCardArr = new Array(1);
        lowCardArr[0] = sentArr[0];
        return lowCardArr;
    }

    yanith(sentArr= []){
        //checks to see if the array is 5 or under
        //returns -1 if greater than 5 and returns sum if 5 or lower
        let count = 0;
        for(let i = 0; i<sentArr.length; i++){
            count += cardValues[sentArr[i].charAt(0)];
        }
        return count > 5 ? -1 : count;
    }

    suit(sentArr = []){
        //gathers all the same suited cards together in an array
        //return an array of the same suited cards 
        //returns an empty array if not enough cards the same suit
        let tempArr = [];
        for(let i = 0; i<sentArr.length; i++){
            tempArr.push(sentArr[i]);
            for(let j = i+1; j<sentArr.length; j++){
                let suit = tempArr[0].charAt(tempArr[0].length - 1);
                if(suit == sentArr[j].charAt(sentArr[j].length - 1)){
                    tempArr.push(sentArr[j]);
                }                
            }
            if(tempArr.length >= 3){
                break;
            } else {
                tempArr = [];
            }
        }
        return tempArr;
    }

    runs(sentArr = []){
        //checks to see if the array has a position run
        //returns a sorted array of the run if true
        //returns empty array if no run found
        sentArr.sort((a,b) => cardPos[a.charAt(0)] - cardPos[b.charAt(0)]);
        
        //need to be able to use aces for low runs and high runs
        //how to do?
        
        if(sentArr.length >= 3){
            let x = cardPos[sentArr[0].charAt(0)];   
            //check to see if you can use the ace as a low card for run
            if(x === 2 && cardPos[sentArr[sentArr.length-1].charAt(0)] === 14){
                let temp = sentArr[sentArr.length-1];
                sentArr.pop();
                sentArr.unshift(temp);
                x = 1;
            }
            //check for the run using card positions
            for(let i = 1; i<sentArr.length; i++){
                let y = cardPos[sentArr[i].charAt(0)];
                if (y == x+1){
                    x = y;
                } else {
                    return [];
                }
            }
            return sentArr;
        } else {
            return [];
        }        
    }

    handValue(sentArr = []){
        //counts the values of the hand
        //returns the value of the hand
        //returns -1 if no array sent
        if(sentArr.length == 0){
            return -1;
        } else {
            let count = 0;
            for(let i = 0; i<sentArr.length; i++){
                count += cardValues[sentArr[i].charAt(0)];
            }
            return count;
        }
    }

    doesHandContain(futureHand = [], toDiscard = []){
        //check to see if the cards to discard are needed for the next turn
        //return true if hand does contain the same card
        //return false if hand doesn't contain any of the same cards
        for(let i = 0; i<futureHand.length; i++){
            for(let j = 0; j<toDiscard.length; j++){
                if(futureHand[i] == toDiscard[j]){
                    return true;
                }    
            }            
        }
        return false;
    }

}

export { Checks };