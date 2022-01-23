import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


import NavBar from './Navbar';
import LandingPage from './LandingPage';
class App extends Component {

  state = {
    mainRoute: '/',

    healthRoutes: [
      '/'
    ],

    medicareRoutes: [
      '/'
    ],

    healthPostData: {

    },

    medicarePostData: {

    }
  }

  changeRoute = () => {
    this.setState({
      route: ''
    });
  };


  render() {
    return (
      <BrowserRouter>
        <div>
      <NavBar />
          <Switch>
            <Route path='/' exact>
            <LandingPage />
              </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;