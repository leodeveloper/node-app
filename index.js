//generate random number 
function getRandomInt(min, max) {   
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let winningnumber = getRandomInt(1,100);
//console.log(winningnumber);

function  main() {
    let guess = getRandomInt(1,100);
    let guesscount = 0;
    let guesslist = [];
    while (guess != winningnumber) {
        guesscount++;
        guesslist.push(guess);
        guess = getRandomInt(1,100);
    }
    console.log(guesslist);
    console.log(guesscount);
}

main();