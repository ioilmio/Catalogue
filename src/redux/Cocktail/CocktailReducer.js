import { FETCH_COCKTAIL_REQUEST, FETCH_COCKTAIL_SUCCESS, FETCH_COCKTAIL_FAILURE } from './CocktailTypes';

const initialState = {
  loading: false,
  cocktail: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COCKTAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COCKTAIL_SUCCESS:
      return {
        loading: false,
        cocktail: action.payload,
        error: '',
      };
    case FETCH_COCKTAIL_FAILURE:
      return {
        loading: false,
        cocktail: [],
        error: action.payload,
      };
    default: return state;
  }
};

export default reducer;
