import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Find from './pages/Find'
import Order from './pages/Order'
import User from './pages/User'

export default () => (
    <Router>
        <div>
            <Route exact path="/" component={ Home }></Route>
            <Route path="/find" component={ Find }></Route>
            <Route path="/order" component={ Order }></Route>
            <Route path="/user" component={ User }></Route>
        </div>
    </Router>
)