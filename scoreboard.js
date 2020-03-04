class Scores {
    constructor(){
        this.userTotal = 0;
        this.userWinCount = 0;
        this.compTotal = 0;
        this.compWinCount = 0;
    }

    addScoreToUserBoard(userScore){
        let userBoard = document.getElementById('user-scores');
        let newUserScore = document.createElement('p');
        newUserScore.innerHTML = userScore;
        userBoard.appendChild(newUserScore);
        this.userTotal += Math.floor(userScore);
    }

    addScoreToCompBoard(compScore){
        let compBoard = document.getElementById('comp-scores');
        let newCompScore = document.createElement('p');
        newCompScore.innerHTML = compScore;
        compBoard.appendChild(newCompScore);
        this.compTotal += Math.floor(compScore);
    }

    compareScores(whoCalled, userScore, compScore){
        if(userScore < compScore && whoCalled == 'user'){
            this.addScoreToUserBoard(0);
            this.addScoreToCompBoard(compScore);
            this.userWinCount++;
            this.compWinCount = 0;
        }else if(compScore < userScore && whoCalled == 'comp'){
            this.addScoreToCompBoard(0);
            this.addScoreToUserBoard(userScore);
            this.compWinCount++;
            this.userWinCount = 0;
        }else if(userScore > compScore && whoCalled == 'user'){
            this.addScoreToUserBoard(userScore + 50);
            this.addScoreToCompBoard(0);
            this.compWinCount++;
            this.userWinCount = 0;
        }else if(compScore > userScore && whoCalled == 'comp'){
            this.addScoreToUserBoard(0);
            this.addScoreToCompBoard(compScore + 50);
            this.userWinCount++;
            this.compWinCount = 0;
        }else if(compScore = userScore){
            this.addScoreToUserBoard(0);
            this.addScoreToCompBoard(0);
            this.compWinCount++;
            this.userWinCount++;
        }
    }

    reduceScoreCheck(){
        if(this.userTotal == 100 ||this.userTotal == 200){
            this.userTotal = Math.floor(this.userTotal / 2);
        } else if(this.compTotal == 100 || this.compTotal == 200){
            this.compTotal = Math.florr(this.compTotal / 2);
        }
    }

    checkFourWins(){
        if(this.compWinCount != 0 && this.compWinCount % 4 == 0){
            this.compTotal = this.compTotal / 2;
        } else if(this.userWinCount != 0 && this.userWinCount % 4 == 0){
            this.userTotal = this.userTotal / 2;
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