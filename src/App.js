import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TabBar from './components/TabBar'
import Home from './pages/Home'
import City from './pages/City'
import Addsearch from './pages/Addsearch'
import Find from './pages/Find'
import Order from './pages/Order'
import User from './pages/User'
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
            <Route exact path="/" component={ Home }></Route>
            <Route path="/city" component={ City }></Route>
            <Route path="/address" component={ Addsearch }></Route>  
            <Route path="/find" component={ Find }></Route>
            <Route path="/order" component={ Order }></Route>
            <Route path="/user" component={ User }></Route>
            <TabBar />
        </div>
    </Router>
    );
  }
}

export default App;
