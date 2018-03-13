import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { RandomWord } from '../lib/words'
import { isWinner, wrongGuessCount, showGuess }from '../lib/gameLogic'
import Input from '../components/Input'


class Game extends PureComponent {
  static propTypes = {
    guess: PropTypes.arrayOf(PropTypes.string)
  }

  render() {
    console.log(RandomWord);

    if (isWinner(RandomWord,this.props.guess)) {
      console.log(RandomWord);
      return (
        <div id="win">
          <p>YOU WON!!!</p>
        </div>
      )
    }
    if (wrongGuessCount(RandomWord,this.props.guess)>=6)
    {
      return (
        <div className="Game">
          <div className='image'>
            <div className='im'id={`img-${wrongGuessCount(RandomWord,this.props.guess)}`}></div>
          </div>
          <div id="lose">
            <p>YOU LOSE!!!</p>
            <h3>The word was "{RandomWord.toUpperCase()}"</h3>
          </div>
        </div>
      )
    }


    return (
      <div className="Game">
        <div className='image'>
          <div className='im' id={`img-${wrongGuessCount(RandomWord,this.props.guess)}`}></div>
        </div>
        <div className='guessed'>
          <h2>
          {showGuess(RandomWord,this.props.guess)}
          </h2>
        </div>
        <div className="input">
          <Input/>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    guess: state.guessWord
  }
}

export default connect(mapStateToProps)(Game)
