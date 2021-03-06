import { combineReducers } from 'redux';
import CocktailsReducer from './Cocktails/CocktailsReducer';
import CocktailReducer from './Cocktail/CocktailReducer';
import FilterReducer from './Filter/FilterReducer';
import QueryReducer from './Input/InputReducer';

const rootReducer = combineReducers({
  cocktails: CocktailsReducer,
  cocktail: CocktailReducer,
  filter: FilterReducer,
  query: QueryReducer,
});

export default rootReducer;
