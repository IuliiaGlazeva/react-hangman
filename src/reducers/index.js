import {combineReducers} from 'redux';
import HangStepsReducers from './hangSteps';
import WordsReducers from './words';
import TitleReducers from './title.js';

const allReducers = combineReducers ({
  steps: HangStepsReducers,
  words: WordsReducers,
  title: TitleReducers
});

export default allReducers
