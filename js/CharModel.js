class CharModel{
    constructor(X,Y, Energy, Whiffles){
        this.x = X;
        this.y = Y;
        this.energy = Energy;
        this.whiffles = Whiffles;
        this.inventory = new Array();
        // hasFoundRoyalDiamonds is a simple flag for now. Later, we might replace it 
        // with a getter function that checks the inventory for Royal Diamonds
        this.hasFoundRoyalDiamonds = false;
    }
    move( X, Y, EnergySpent ){
        this.x = X;
        this.y = Y;
        this.energy = this.energy - EnergySpent;
    }
    isDead( ){
        if( this.energy < 1 ){
            return true;
        }else{
            return false;
        }
    }
}

// itemTypeToPriceMap associates an inventory item type name with its price.
// This is a weak location for the definition. Although it is close to the
// inventory objects that use this map, it would be better to organize it
// somewhere else like an Item.js file.
let itemTypeToPriceMap = {
    "Axe": 5,
    "Pretty Rock": 1,
    "Shears": 20,
    "Binoculars": 50,
    "Power Bar": 20
};
