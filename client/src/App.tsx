import React, { Component } from 'react';
import Board from './components/board/Board';
import styles from './app.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          
        </header>
        <div className={styles.game}>
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
