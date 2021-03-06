import axios from 'axios';
import CHANGE_QUERY from './InputTypes';
import { fetchCocktailsRequest, fetchCocktailsSuccess, fetchCocktailsFailure } from '../Cocktails/CocktailsActions';

export const changeQuery = value => ({ type: CHANGE_QUERY, value });

export const fetchQuery = query => dispatch => {
  dispatch(fetchCocktailsRequest);
  if (query) {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${query}`)
      .then(response => {
        const cocktails = response.data;
        dispatch(fetchCocktailsSuccess(cocktails.drinks));
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(fetchCocktailsFailure(errorMsg));
      });
  } else {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=t')
      .then(response => {
        const cocktails = response.data;
        dispatch(fetchCocktailsSuccess(cocktails.drinks));
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(fetchCocktailsFailure(errorMsg));
      });
  }
};

export default fetchQuery;
