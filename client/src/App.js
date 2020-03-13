import './App.css'
import React,{ Component } from 'react';
import Nav from './components/main_frame/Nav';
import Home from './components/home/Home';
import Professional from './components/professional/Professional';
import AboutMe from './components/aboutMe/AboutMe';
import Contact from './components/contact/Contact';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <div className='App'>
             <Router>
                <Nav />
                <Switch >
                    <Route exact path='/' component={Home} />
                    <Route path='/professional' component={Professional} />
                    <Route path='/aboutMe' component={AboutMe} />
                    <Route path='/contact' component={Contact} />
                </Switch>
              </Router>
          </div>
      );
  }
}

export default App;
