/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchQuery } from '../redux/Input/InputActions';

const Input = ({
  fetchQuery, location,
}) => {
  if (location.pathname.match(/[\w]/gi)) {
    return null;
  }
  return (
    <div>
      <form>
        <label htmlFor="alcoholic">
          Search by first letter...
          <input
            type="text"
            className="nav-filter"
            name="alcoholic"
            onChange={e => {
              e.target.value = e.target.value ? e.target.value[e.target.value.length - 1] : '';
              fetchQuery(e.target.value);
            }}
          />
        </label>
      </form>
    </div>
  );
};

// Input.defaultProps = {
//   query: '',
// };

Input.propTypes = {
  fetchQuery: PropTypes.func.isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  // query: PropTypes.string,
};

const mapStateToProps = state => ({
  query: state.query,
  filter: state.filter,
  cocktails: state.cocktails,

});

const mapDispatchToProps = dispatch => ({
  fetchQuery: query => dispatch(fetchQuery(query)),
});

const InputComponent = withRouter(Input);

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);
