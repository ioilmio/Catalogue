import { combineReducers } from 'redux';
import CocktailsReducer from './Cocktails/CocktailsReducer';
import CocktailReducer from './Cocktail/CocktailReducer';
import FilterReducer from './Filter/FilterReducer';

const rootReducer = combineReducers({
  cocktails: CocktailsReducer,
  cocktail: CocktailReducer,
  filter: FilterReducer,
});

export default rootReducer;
