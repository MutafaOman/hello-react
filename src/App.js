import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import HomeLayout from './layout/homeLayout';

//component 
import Hello from './component/Hello';
import Blog from './component/Blog';

class App extends Component {
  render() {
    return (
      <div>
        <HomeLayout>
          <Switch>
            <Route exact path="/" component={Hello}  />
            <Route exact path="/Blog" component={Blog} />
            <Redirect from='*' to='/' />
          </Switch>
        </HomeLayout>
      </div>
    );
  }
}

export default App;
