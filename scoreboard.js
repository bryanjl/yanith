class Scores {
    constructor(){
        this.userTotal = 0;
        this.compTotal = 0;
    }

    addScoreToUserBoard(userScore){
        let userBoard = document.getElementById('user-scores');
        let newUserScore = document.createElement('p');
        newUserScore.innerHTML = userScore;
        userBoard.appendChild(newUserScore);
        this.userTotal += userScore;
    }

    addScoreToCompBoard(compScore){
        let compBoard = document.getElementById('comp-scores');
        let newCompScore = document.createElement('p');
        newCompScore.innerHTML = compScore;
        compBoard.appendChild(newCompScore);
        this.compTotal += compScore;
    }

    compareScores(whoCalled, userScore, compScore){
        if(userScore < compScore && whoCalled == 'user'){
            this.addScoreToUserBoard(0);
            this.addScoreToCompBoard(compScore);
        }else if(compScore < userScore && whoCalled == 'comp'){
            this.addScoreToCompBoard(0);
            this.addScoreToUserBoard(userScore);
        }else if(userScore > compScore && whoCalled == 'user'){
            this.addScoreToUserBoard(userScore + 50);
            this.addScoreToCompBoard(0);
        }else if(compScore > userScore && whoCalled == 'comp'){
            this.addScoreToUserBoard(0);
            this.addScoreToCompBoard(compScore + 50);
        }else if(compScore = userScore){
            this.addScoreToUserBoard(0);
            this.addScoreToCompBoard(0);
        }
    }

    addToUserTotal(score){
        this.userTotal += score;
    }

    get getUserTotal(){
        return this.userTotal;
    }

    addToCompTotal(score){
        this.compTotal += score;
    }

    get getCompTotal(){
        return this.compTotal;
    }

    clearTotals(){
        this.userTotal = 0;
        this.compTotal = 0;
    }
}

export { Scores };