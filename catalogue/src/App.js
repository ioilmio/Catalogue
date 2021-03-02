import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './redux/store';

import Nav from './components/Nav';
import Cocktail from './components/Cocktail';
import CocktailList from './components/CocktailList';
import About from './components/About';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={CocktailList} />
            <Route path="/:id" exact component={Cocktail} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
