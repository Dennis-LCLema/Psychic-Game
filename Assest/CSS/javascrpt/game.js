var won = 0;
var lost = 0;
var usedArray = []
var attempts = 10;
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

ranLetter = letters[Math.floor(Math.random() * letters.length)].toLowerCase();
// console.log(ranLetter);

//i used the fride in class activity to help me get started.  it was a lot of help!!!!!!!!

function jsGuess() {
      ranLetter = letters[Math.floor(Math.random() * letters.length)].toLowerCase();
      // console.log(ranLetter);
      return ranLetter;

}

// not ganna lie but this war preety hard i used a lot of in class activity as reference. 
//but i also used google to help me with this part

document.onkeyup = function (event) {
      var playerGuess = event.key;
      console.log('#########')
      console.log('playerGuess', playerGuess)
      console.log('ranLetter', ranLetter)
      console.log('#########')

      if (playerGuess === ranLetter) { 
        won++;
        attempts = 10;
        jsGuess();
        return;
      }

      if (playerGuess !== ranLetter) {
            attempts--; }

      if (attempts == 0) {
            lost++;
            attempts = 10;
            jsGuess();
            return;
      }

      if (usedArray.indexOf(playerGuess) >= 0) {

        } else {
            usedArray.push(playerGuess);
            document.getElementById('playerGuess').innerHTML = usedArray;
            // console.log(usedArray);

      }
      // this part was the hardest for some reason it was because the {} brackets 
      // it took me so long like almost an hour to realize that i didnt use {} to close
      document.getElementById('won').innerHTML = won;
      document.getElementById('lost').innerHTML = lost;
      document.getElementById('attempts').innerHTML = attempts;

}
//my program didnt want to work because of that curly bracket like what the?? 
//almost had a heath attack !!!!!
