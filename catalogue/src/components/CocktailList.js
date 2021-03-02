import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCocktails } from '../redux/Cocktails/CocktailsActions';

function CocktailList({
  fetchCocktails, cocktails,
}) {
  useEffect(() => {
    fetchCocktails();
  }, []);
  return (

    <div className="cocktail-list-item">
      {cocktails.cocktails.map(cocktail => (
        <li key={cocktail.strDrink}>
          <Link to={`/${cocktail.idDrink}`}>
            <div className="cocktail-name">
              {cocktail.strDrink}
            </div>
          </Link>
          <Link to={`/${cocktail.idDrink}`}>
            <img src={`${cocktail.strDrinkThumb}/preview`} alt={cocktail.strDrink} />
          </Link>
        </li>
      ))}
    </div>
  );
}

CocktailList.propTypes = {
  cocktails: PropTypes.instanceOf(Object).isRequired,
  fetchCocktails: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cocktails: state.cocktails,
});

const mapDispatchToProps = dispatch => ({
  fetchCocktails: () => dispatch(fetchCocktails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CocktailList);
