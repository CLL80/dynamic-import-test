import React, { Component } from 'react'
import logo from './logo.svg'

class Main extends Component {
  state = {
    theme: {}
  }
  componentDidMount = () => {
    import(`./Main.module.css?theme=themename`).then((result) => {
      this.setState({ theme: result })
    })
  }
  render = () => {
    const { theme } = this.state
    return (
      <div>
        <header className={theme.header}>
          <img src={logo} className={theme.logo} alt="logo" />
          <h1 className={theme.title}>Welcome to React</h1>
        </header>
        <p className={theme.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Main
