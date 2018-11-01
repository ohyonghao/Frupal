function buildModel() {
    var model = new FrupalModel();

    // This whole file should be generated from Warren's "exchange" format for Frupal maps and game states
    model.mapModel.name = 'Sample Frupal Game Map';
    model.mapModel.size = 25;
    model.charModel.x = 12;
    model.charModel.y = 12;
    model.charModel.energy = 103;
    model.charModel.whiffles = 1000;
    // TODO Inventory
    model.charModel.inventory.push('Axe');
    model.charModel.inventory.push('Axe');
    model.charModel.inventory.push('Shears');
    model.charModel.inventory.push('Pretty Rock');
    model.mapModel['12,12'] = new Tile(1, 12, 12, 1, null);
    model.mapModel['13,12'] = new Tile(1, 13, 12, 1, null);
    model.mapModel['14,12'] = new Tile(2, 14, 12, 0, null);

    return model;
}
