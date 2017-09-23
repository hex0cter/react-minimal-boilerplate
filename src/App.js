import React from "react"
import { HashRouter, Route } from 'react-router-dom'
import Home from './home'
import About from './about'

export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
        <Route path='//' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        </div>
      </HashRouter>
    )
  }
}
