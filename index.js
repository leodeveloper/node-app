//generate random number 
function getRandomInt(min, max) {   
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let winningnumber = getRandomInt(1,100);
//console.log(winningnumber);

function  main() {
    let guessNumber = 0;
    while (guessNumber != winningnumber) {
        guessNumber++;
    }
    //console.log(guessNumber);
    //console.log(winningnumber);
    return guessNumber;
}

//main();

process.on('message', (message) => {
    if (message === 'run') {
      const guessNumber = main();
      process.send(guessNumber);
    }
  });