import CHANGE_FILTER from './FiltersTypes';

const filterReducer = (state = false, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.value;
    default:
      return state;
  }
};

export default filterReducer;
