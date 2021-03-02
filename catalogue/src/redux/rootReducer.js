import { combineReducers } from 'redux';
import CocktailsReducer from './Cocktails/CocktailsReducer';
import CocktailReducer from './Cocktail/CocktailReducer';

const rootReducer = combineReducers({
  cocktails: CocktailsReducer,
  cocktail: CocktailReducer,
});

export default rootReducer;
