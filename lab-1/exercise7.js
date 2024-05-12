
/*<---------------------------------------------------------------------------------------------------->*/

const basketballGame = {
    score: 0,
    fouls: 0,
    foul() {
        this.fouls++;

        return this;
    },
    freeThrow() {
        this.score++;

        return this;
    },
    basket() {
        this.score += 2;

        return this;
    },
    threePointer() {
        this.score += 3;

        return this;
    },
    halfTime() {
        console.log('Halftime score is ' + this.score);
        console.log('There have been ' + this.fouls + ' fouls');

        return this;
    },
    fullTime() {
        console.log('Final score is ' + this.score);
        console.log('There were ' + this.fouls + ' fouls this game');
    }
}
//modify each of the above object methods to enable function chaining as below:
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
basketballGame.basket().foul().freeThrow().basket().halfTime().basket().foul().freeThrow().threePointer().fullTime();