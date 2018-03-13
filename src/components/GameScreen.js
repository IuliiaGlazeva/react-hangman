import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

class GameScreen extends PureComponent {
  render (){
    return (
      <div className="gameScreen">
          <p>GameScreen</p>
      </div>
    )
  }
}
const mapStateToProps = ({ GameScreen }) => ({ GameScreen })

export default connect(mapStateToProps)(GameScreen)
