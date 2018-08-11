import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import '../content/App.css';
import Login from '../views/Login';
import Main from '../views/Main';
import Familias from '../views/Familias';
import Doacoes from '../views/Doacoes';
import Financeiro from '../views/Financeiro';
import Eventos from '../views/Eventos';
import AddFamilia from '../views/AddFamilia';

class App extends Component {
  render() {
    return (
      <Router history={ createBrowserHistory }>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/login" component={Login} />
            <Route exact path="/familias" component={Familias} />
            <Route exact path="/familias/add" component={AddFamilia} />
            <Route exact path="/familias/add/:id" component={AddFamilia} />
            <Route path="/doacoes" component={Doacoes} />
            <Route path="/financeiro" component={Financeiro} />
            <Route path="/eventos" component={Eventos} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
