import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import  Home  from './Home';
import  Summary  from './Dashboard';
import BackTesting from './BackTesting';
import AlgoTrading from './AlgoTrading';
import { NoMatch } from './NoMatch';

class App extends Component {

  render(){
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/summary" component={Summary} />
            <Route path="/backtesting" component={BackTesting} />
            <Route path="/algo" component={AlgoTrading} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    ) 
  }
}

export default App;
