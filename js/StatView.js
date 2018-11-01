class StatView{
    
    constructor( charmodel ){
        this.model = charmodel;
    }

    // code to draw the message area goes here
    draw(){
        document.getElementById("stats-x-pos").innerText = "X: " + this.model.x;
        document.getElementById("stats-y-pos").innerText = "Y: " + this.model.y;
    }
}
