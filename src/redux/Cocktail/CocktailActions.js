import axios from 'axios';
import { FETCH_COCKTAIL_REQUEST, FETCH_COCKTAIL_SUCCESS, FETCH_COCKTAIL_FAILURE } from './CocktailTypes';

export const fetchCocktailRequest = () => ({

  type: FETCH_COCKTAIL_REQUEST,
});

export const fetchCocktailSuccess = cocktail => ({

  type: FETCH_COCKTAIL_SUCCESS,
  payload: cocktail,
});

export const fetchCocktailFailure = error => ({
  type: FETCH_COCKTAIL_FAILURE,
  payload: error,
});

export const fetchCocktail = id => dispatch => {
  dispatch(fetchCocktailRequest);
  axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => {
      const cocktail = response.data;
      dispatch(fetchCocktailSuccess(cocktail.drinks[0]));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchCocktailFailure(errorMsg));
    });
};
