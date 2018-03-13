
export function showGuess(word, guesses) {
  return word
  .split('')
  .map(char => (guesses.includes(char)? char: '_'))
  .join(' ')

}


export function isWinner(word, guesses) {
    let newWord = showGuess(word, guesses)
      if (newWord.indexOf("_") === -1 ) return true;
      return false;

}

export function wrongGuessCount(word, guesses) {
  let uniqueArray = (arrArg) => {
    return arrArg.filter((elem, pos, arr) => {
      return arr.indexOf(elem) === pos;
    });
  }
  let guess=uniqueArray(guesses)
  return guess
    .filter(g => word.indexOf(g)===-1)
    .length
}
