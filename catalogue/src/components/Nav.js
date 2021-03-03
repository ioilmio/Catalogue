import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/css/nav.css';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Filter from './Filter';
import changeFilter from '../redux/Filter/FiltersActions';

function Nav({ changeFilter }) {
  return (
    <>
      <nav>
        <div className="nav-logo">
          Bubble
          <img src="" alt="" />
        </div>
        <div className="filter">
          <Filter changeFilter={changeFilter} />
        </div>
        <div className="nav-links">
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="/about">
            <div>About</div>
          </Link>
        </div>
      </nav>
    </>
  );
}

Nav.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeFilter: category => {
    dispatch(changeFilter(category));
  },
});

export default connect(null, mapDispatchToProps)(Nav);
