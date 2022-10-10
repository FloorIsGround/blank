class game {
    constructor(){
        this.score = 0;
    }
    get myScore(){
        return Math.trunc(this.score);
    }

    set updateScore(newscore){
        this.score = this.score + newscore;
        this.ping();
    }
    ping(){
        const para = document.getElementById("ourScore");
        para.textContent = this.score;
    }
}

class bignumbergame extends game {
    constructor(){
        super();
        this.multiplier = 1;
        this.cost = 10;
    }

    get mult(){
        return this.multiplier.toFixed(3);
    }

    set increaseMult(num){
        this.multiplier = this.multiplier * num;
        this.ping();
    }

    // calcCost(){
    //     this.cost = 
    // }

    ping(){
        const para = document.getElementById("ourScore");
        para.textContent = this.score;
        const mult = document.getElementById("ourMult");
        mult.textContent = this.mult;
    }
}

let newsave = new bignumbergame;

let btn = document.getElementById("input");
btn.addEventListener('click', event => {
    newsave.updateScore = 1 * newsave.mult;
})
let multbtn = document.getElementById("upgradeMultiplier");
multbtn.addEventListener('click', event => {
    newsave.increaseMult = 1.1;
})


