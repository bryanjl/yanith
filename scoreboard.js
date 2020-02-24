class Scores {
    addScoreToUserBoard(userScore){
        let userBoard = document.getElementById('user-scores');
        let newUserScore = document.createElement('p');
        newUserScore.innerHTML = userScore;
        userBoard.appendChild(newUserScore);
    }

    addScoreToCompBoard(compScore){
        let compBoard = document.getElementById('comp-scores');
        let newCompScore = document.createElement('p');
        newCompScore.innerHTML = compScore;
        compBoard.appendChild(newCompScore);
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
        }
    }
}

export { Scores };