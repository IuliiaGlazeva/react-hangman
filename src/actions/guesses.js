export const LETTER_GUESS = 'LETTER_GUESS'

export const guessLetter = (text='.') => {

  return {
    type: LETTER_GUESS,
    text
  }
}
