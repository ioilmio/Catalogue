import axios from 'axios';
import { FETCH_COCKTAILS_REQUEST, FETCH_COCKTAILS_SUCCESS, FETCH_COCKTAILS_FAILURE } from './CocktailsTypes';

export const fetchCocktailsRequest = () => ({

  type: FETCH_COCKTAILS_REQUEST,
});

export const fetchCocktailsSuccess = cocktail => ({

  type: FETCH_COCKTAILS_SUCCESS,
  payload: cocktail,
});

export const fetchCocktailsFailure = error => ({
  type: FETCH_COCKTAILS_FAILURE,
  payload: error,
});

export const fetchCocktails = query => dispatch => {
  dispatch(fetchCocktailsRequest);
  axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${query}`)
    .then(response => {
      const cocktails = response.data;
      dispatch(fetchCocktailsSuccess(cocktails.drinks));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchCocktailsFailure(errorMsg));
    });
};
