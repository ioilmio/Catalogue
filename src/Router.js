import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Cocktail from './components/Cocktail';
import CocktailList from './components/CocktailList';
import About from './components/About';

function RouterComponent() {
  return (

    <div>
      <Router>
        <Nav />
        <div className="main">
          <Switch>
            <Route path="/" exact component={CocktailList} />
            <Route path="/:id" component={Cocktail} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default RouterComponent;
