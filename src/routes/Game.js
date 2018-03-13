import React from 'react';
import Game from '../containers/Game'


export default class Screen extends React.Component {
  render() {
    return (
    <main id="page-wrap">
      <div style={{backgroundColor: "#f9f4f7", color: 'black'}}>
      <article className="post_mainland">
            <Game />
            <br />
      </article>
      </div>
    </main>
    );
  }
}
