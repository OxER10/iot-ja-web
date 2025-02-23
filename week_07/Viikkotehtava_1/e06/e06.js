var beers = 99, count = 0;

while (count < 2) {
    if (beers == 0) {
        console.log("No more bottles of beer on the wall, no more bottless of beer.\nGo to the store and buy some more.");
        beers = 99;
        count++;
    }
    else {
        if (beers == 1) {
            console.log(beers, " bottle of beer on the wall, ", beers, " bottle of beer");
            beers--;
            console.log("Take one down and pass it around, no more bottles of beer on the wall.")
        }
        else {
        console.log(beers, " Bottles of beer on the wall, ", beers, " bottles of beer.");
        beers--;
        console.log("Take one down and pass it around, ", beers, " bottles of beer on the wall.")
        }
    }
}