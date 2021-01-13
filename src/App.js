import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Appbar from './Common/Appbar';
import Home from './Screens/Home/Home';
import Welcome from './Screens/Welcome/Welcome';

function App() {
  return (
    <Router>
      <Appbar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
