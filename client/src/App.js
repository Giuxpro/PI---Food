import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LandingPage from "./Components/LandingPage"
import Home from './Components/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/home" component={Home}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
