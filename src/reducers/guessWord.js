import { LETTER_GUESS } from '../actions/guesses'

const guessWord = []
export default (state = guessWord, action) => {
  switch (action.type) {
  case LETTER_GUESS :
   return state.concat(action.text)

   default :
   return state
  }
}
