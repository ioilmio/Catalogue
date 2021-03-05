/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import '../styles/css/cocktails.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCocktails } from '../redux/Cocktails/CocktailsActions';
import { fetchQuery } from '../redux/Input/InputActions';
import changeFilter from '../redux/Filter/FiltersActions';

function CocktailList({
  fetchCocktails, cocktails, filter, query,
}) {
  const filteredCocktails = (filter) ? cocktails.cocktails.filter(cocktail => cocktail.strAlcoholic === 'Alcoholic') : cocktails.cocktails;
  useEffect(() => {
    fetchCocktails(query);
  }, []);
  if (filteredCocktails) {
    return (
      <div className="cocktail-list-item-container">
        {filteredCocktails && filteredCocktails.map((cocktail, index) => (
          <li key={cocktail.strDrink} className="cocktail-list-item">
            <div className="item-container">
              <Link className="cocktail-link" to={`/${cocktail.idDrink}`}>
                <div className="cocktail-list-name">
                  {index}
                  {' '}
                  -
                  {' '}
                  {cocktail.strDrink}
                </div>
              </Link>
              <Link to={`/${cocktail.idDrink}`}>
                <img className="cocktail-list-image" src={`${cocktail.strDrinkThumb}/preview`} alt={cocktail.strDrink} />
              </Link>
            </div>
          </li>
        ))}

      </div>
    );
  }
  return (
    <p
      className="error"
      style={{
        fontSize: '3rem',
        padding: '3rem',
        margin: '3rem',
        fontFamily: 'sans-serif',
      }}
    >
      There is no cocktail starting with this letter
    </p>
  );
}

CocktailList.defaultProps = {
  query: 't',
};

CocktailList.propTypes = {
  cocktails: PropTypes.instanceOf(Object).isRequired,
  fetchCocktails: PropTypes.func.isRequired,
  filter: PropTypes.bool.isRequired,
  query: PropTypes.string,
};

const mapStateToProps = state => ({
  cocktails: state.cocktails,
  filter: state.filter,
  query: state.query,
});

const mapDispatchToProps = dispatch => ({
  fetchCocktails: query => dispatch(fetchCocktails(query)),
  changeFilter: () => dispatch(changeFilter()),
  fetchQuery: query => dispatch(fetchQuery(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CocktailList);
