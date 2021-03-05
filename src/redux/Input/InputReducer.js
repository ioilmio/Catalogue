import CHANGE_QUERY from './InputTypes';

const inputReducer = (state = 't', action) => {
  switch (action.type) {
    case CHANGE_QUERY:
      return action.value;
    default:
      return state;
  }
};

export default inputReducer;
