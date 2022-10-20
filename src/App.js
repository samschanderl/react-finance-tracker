import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import pages
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
// import components
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
