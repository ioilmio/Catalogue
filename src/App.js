import './styles/css/app.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import CocktailList from './components/CocktailList';
import Cocktail from './components/Cocktail';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="main">
        <Switch>
          <Route path="/" exact component={CocktailList} />
          <Route path="/:id" component={Cocktail} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
