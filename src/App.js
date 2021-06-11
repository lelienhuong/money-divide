import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Sandbox from './pages/Sandbox/Sandbox';
import Login from './pages/Login/Login';
import Layout from './components/layouts/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" render={(props) => <Login {...props} />}/>
            <Route exact="true" path="/sandbox">
              <Sandbox />
            </Route>
            <Route path="/app" component={Layout} />
        </Switch>
      </Router>
    </div>
  );
}
const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = localStorage.getItem('auth');
  return <Route {...rest} render={(props) => (
        auth !== null
          ? <Component {...props} />
          : <Redirect to={{
            pathname: "/login",
            state: { from: rest.path }
          }}
          />
      )}
      />
}


export default App;
