import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const CategoryFilter = ({
  changeFilter, location,
}) => {
  const selectCat = React.useRef(null);
  if (location.pathname.match(/[\w]/gi)) {
    return null;
  }
  return (
    <div>
      <form>
        <label htmlFor="alcoholic">
          Alcoholic?
          <input
            type="checkbox"
            className="nav-filter"
            ref={selectCat}
            name="alcoholic"
            value
            onChange={() => {
              changeFilter(selectCat.current.checked);
            }}
          />
        </label>
      </form>
    </div>
  );
};

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};
const Filter = withRouter(CategoryFilter);
export default Filter;
