import React, { useEffect } from 'react';
import '../styles/css/cocktails.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCocktails } from '../redux/Cocktails/CocktailsActions';
import changeFilter from '../redux/Filter/FiltersActions';

function CocktailList({
  fetchCocktails, cocktails, filter,
}) {
  const filteredCocktails = (filter) ? cocktails.cocktails.filter(cocktail => cocktail.strAlcoholic === 'Alcoholic') : cocktails.cocktails;
  useEffect(() => {
    fetchCocktails();
  }, []);
  return (
    <div className="cocktail-list-item-container">
      {filteredCocktails.map((cocktail, index) => (
        <li key={cocktail.strDrink} className="cocktail-list-item">
          <div className="item-container">
            <Link className="cocktail-link" to={`/${cocktail.idDrink}`}>
              <div className="cocktail-list-name">
                {cocktail.strDrink}
                {index}
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

CocktailList.propTypes = {
  cocktails: PropTypes.instanceOf(Object).isRequired,
  fetchCocktails: PropTypes.func.isRequired,
  filter: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  cocktails: state.cocktails,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  fetchCocktails: () => dispatch(fetchCocktails()),
  changeFilter: () => dispatch(changeFilter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CocktailList);
