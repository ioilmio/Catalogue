import React, { useEffect } from 'react';
import '../styles/css/cocktails.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCocktails } from '../redux/Cocktails/CocktailsActions';

function CocktailList({
  fetchCocktails, cocktails, filter,
}) {
  useEffect(() => {
    fetchCocktails();
  }, [filter]);
  const filteredCocktails = (!filter) ? cocktails.cocktails.filter(cocktail => cocktail.strAlcoholic === 'Alcoholic') : cocktails.cocktails;
  console.log('cocktails', cocktails.cocktails);
  console.log('filter', filter);
  console.log(cocktails.cocktails.filter(cocktail => cocktail.strAlcoholic === 'Alcoholic'));
  console.log('filteredcocktail', filteredCocktails);
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

CocktailList.defaultProps = {
  filter: false,
};

CocktailList.propTypes = {
  cocktails: PropTypes.instanceOf(Object).isRequired,
  fetchCocktails: PropTypes.func.isRequired,
  filter: PropTypes.bool,
};

const mapStateToProps = state => ({
  cocktails: state.cocktails,
});

const mapDispatchToProps = dispatch => ({
  fetchCocktails: () => dispatch(fetchCocktails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CocktailList);
