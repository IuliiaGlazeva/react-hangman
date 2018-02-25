import {combineReducers} from 'redux';
import HangStepsReducers from './hangSteps';
import WordsReducers from './words';

const allReducers = combineReducers ({
  steps: HangStepsReducers,
  words: WordsReducers
});

export default allReducers
