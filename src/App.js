import React, { Component } from 'react';
import styles from './App.module.css';
// import Main from './Main';
import Main from './Main-no-var';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Main themeName={'themename'} />
      </div>
    );
  }
}

export default App;
