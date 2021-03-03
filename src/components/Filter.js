import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({
  changeFilter,
}) => {
  const selectCat = React.useRef(null);
  return (
    <div>
      <label htmlFor="alcoholic">
        Alcoholic?
        <input
          type="checkbox"
          className="nav-filter"
          ref={selectCat}
          name="alcoholic"
          onClick={() => changeFilter(selectCat.current.value)}
        />
      </label>
    </div>
  );
};

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
