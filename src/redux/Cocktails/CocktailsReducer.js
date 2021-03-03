import { FETCH_COCKTAILS_REQUEST, FETCH_COCKTAILS_SUCCESS, FETCH_COCKTAILS_FAILURE } from './CocktailsTypes';

const initialState = {
  loading: false,
  cocktails: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COCKTAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COCKTAILS_SUCCESS:
      return {
        loading: false,
        cocktails: action.payload,
        error: '',
      };
    case FETCH_COCKTAILS_FAILURE:
      return {
        loading: false,
        cocktails: [],
        error: action.payload,
      };
    default: return state;
  }
};

export default reducer;
