//Code is taken from: https://stackoverflow.com/questions/48662701/is-my-js-code-right-for-99-bottles-of-beer-on-the-wall-song
var count = 99;
while (count > 0) {
    console.log(count + " " + getBottleWord(count) + " of beer on the wall");
    console.log(count + " " + getBottleWord(count) + " of beer,");
    console.log("Take one down, pass it around,");
    count = count - 1;
    if (count > 0) {
        console.log(count + " " + getBottleWord(count) + " of beer on the wall.");
    } else {
        console.log("No more " + getBottleWord(count) + " of beer on the wall.");
    }
}

function getBottleWord(count) {
    return count === 1 ? "bottle" : "bottles";
}
