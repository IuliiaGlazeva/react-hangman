import React from 'react';
import GameScreen from '../components/GameScreen'

export default class Screen extends React.Component {
  render() {
    return (
    <main id="page-wrap">
      <div style={{backgroundColor: "#f9f4f7", overflow: "scroll", color: 'black'}}>
      <article className="post_mainland">
            <GameScreen />
            <br />
      </article>
      </div>
    </main>
    );
  }
}
