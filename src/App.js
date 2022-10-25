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

        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>

      </div>
  );
}

export default App;
