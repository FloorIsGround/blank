import Toast from "./extras.js";
class game {
    constructor(nm){
        this.score = 0;
        this.multiplier = 1;
        this.savename = nm;
        this.cost = 10;
        this.level = 0;
        this.os = 0;
        this.os_int = 1.1;
    }

    get getScore(){
        return this.score.toFixed(2);
    }

    updateScore(newscore){
        if(newscore > 0) {
            this.score = this.score + (1 * this.mult);
        }else{
        this.score = this.score + newscore;
        }
        UI.displayScore(this);
    }

    get mult(){
        return Number(this.multiplier).toFixed(2);
    }

    increaseMult(){
        this.multiplier = this.multiplier * (1 + (this.level / 10));
        this.level = this.level + 1;
        UI.displayScore(this);
        return;
    }

    increaseCost(){
        let iter = this.level;
        this.cost = (this.cost * iter + 20) - 5 * iter;
        UI.displayScore(this);
       
    }

    buyMult(){
        if(!(this.score >= this.cost)) return Toast("Upgrade is too expensive!", "warning"); 
        this.updateScore(-(this.cost))
        this.increaseMult();
        this.increaseCost();
    }

    async save(){
        localStorage.setItem(this.savename, JSON.stringify(this));
        await Toast("Save was successfully saved.", "success")
        UI.displayScore(this);
        console.log("Save was successful.")
    }

    async loadSave(){
        let loadedSave = JSON.parse(localStorage.getItem(this.savename));
        if(loadedSave === null) return this.save(), await Toast("Save was not found, new save created!", "warning");
        this.score = loadedSave.score;
        this.multiplier = loadedSave.multiplier;
        for(let [keys, values] of Object.entries(loadedSave)){
            if(keys != "savename") {
                this.keys = values;
                console.log(`${keys} ${values}`);
            }
            
        }
        
        UI.displayScore(this);
        await Toast("Save was succesfully loaded.", "success");
    }
    //unused
    static saveExist(){
        if(localStorage.getItem(this.savename) === null) return false;
        return true;
    }
}

class UI {
    static displayScore(obj){
        const menu = document.querySelector("#main-menu");
        menu.innerHTML = `<div class="card-header"> Money: $ ${obj.getScore} </div>
                          <div class="card-body"> Multiplier: ${obj.mult} </div>`
        const upgrademenu = document.querySelector("#upgrade-item-1");
        upgrademenu.innerHTML = 
        `<div class="card-header">Level: ${obj.level} 
        <br> cost: ${obj.cost.toFixed(2)}</div>
            <div class="card-body">
            <h4 class="card-title">Invest</h4>
            <p class="card-text">Invest your money into better clicking equipment.</p>
        </div>`;
        
    }
}
let newsave = new game("save");
let btn = document.querySelector("#input");
btn.addEventListener('click', event => {newsave.updateScore(1)});

let multbtn = document.querySelector("#upgrade-item-1");
multbtn.addEventListener('click', event => {newsave.buyMult()});

let savebtn = document.querySelector("#save");
savebtn.addEventListener('click', event => {
    newsave.save();
})
document.addEventListener("DOMContentLoaded", newsave.loadSave());






