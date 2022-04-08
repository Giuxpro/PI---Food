import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LandingPage from "./Components/LandingPage"
import Home from './Components/Home';
import RecipeCreate from "./Components/RecipeCreate"
import RecipeDetail from "./Components/RecipeDetail"


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/home" component={Home}/>
        <Route path="/recipe" component={RecipeCreate}/>
        <Route path="/home/id" component={RecipeDetail}/>
        <Route path="*" component={Home}/> 
      </Switch>
    </div>
    </Router>
  );
}

export default App;
