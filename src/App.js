import React, { Component } from 'react'
import Register from './FrontEnd/Register'
import Login from './FrontEnd/Login'
import { BrowserRouter as Router, Route} from "react-router-dom";
class App extends Component {
  render() {
    return (
     <Router>
       <Route exact path='/' component={Register}/>
       <Route exact path='/personel/login' component={Login}/>
     </Router>
    )
  }
}

export default App