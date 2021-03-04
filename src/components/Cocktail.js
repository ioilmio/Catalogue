import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import About from './About';
import { fetchCocktail } from '../redux/Cocktail/CocktailActions';
import '../styles/css/cocktail.css';

function Cocktail({ fetchCocktail, cocktail, match }) {
  useEffect(() => {
    fetchCocktail(match.params.id);
  }, []);
  // eslint-disable-next-line no-restricted-globals
  if (location.pathname.match(/about/gi)) {
    return (
      <About />
    );
  }

  return (

    <div className="cocktail">
      <div className="cocktail-image">
        <img src={`${cocktail.cocktail.strDrinkThumb}/preview`} alt="" />
      </div>
      <div className="cocktail-info">
        <div className="cocktail-name">
          {cocktail.cocktail.strDrink}
        </div>
        <div className="cocktail-category">
          is a
          {' '}
          {cocktail.cocktail.strCategory}
          {' '}
          category
        </div>
        <div className="cocktail-glass">
          and is served in a
          {' '}
          {cocktail.cocktail.strGlass}
        </div>
        <div className="cocktail-ingredients">
          <h2>Ingredients</h2>
          <ul>
            {
              cocktail.cocktail.strIngredient1
              && cocktail.cocktail.strMeasure1
              && (
                <li>
                  {cocktail.cocktail.strMeasure1}
                  {' '}
                  -
                  {' '}
                  {cocktail.cocktail.strIngredient1}
                </li>
              )
            }
            {
              cocktail.cocktail.strIngredient2
              && cocktail.cocktail.strMeasure2
              && (
                <li>
                  {cocktail.cocktail.strMeasure2}
                  {' '}
                  -
                  {' '}
                  {cocktail.cocktail.strIngredient2}
                </li>
              )
            }
            {' '}
            {
              cocktail.cocktail.strIngredient3
              && cocktail.cocktail.strMeasure3
              && (
                <li>
                  {cocktail.cocktail.strMeasure3}
                  {' '}
                  -
                  {' '}
                  {cocktail.cocktail.strIngredient3}
                </li>
              )
            }
            {' '}
            {
              cocktail.cocktail.strIngredient4
              && cocktail.cocktail.strMeasure4
              && (
                <li>
                  {cocktail.cocktail.strMeasure4}
                  {' '}
                  -
                  {' '}
                  {cocktail.cocktail.strIngredient4}
                </li>
              )
            }
            {' '}
            {
              cocktail.cocktail.strIngredient5
              && cocktail.cocktail.strMeasure5
              && (
                <li>
                  {cocktail.cocktail.strMeasure5}
                  {' '}
                  -
                  {' '}
                  {cocktail.cocktail.strIngredient5}
                </li>
              )
            }
          </ul>
        </div>

        <div className="cocktail-instructions">
          <h2>Instructions:</h2>
          {cocktail.cocktail.strInstructions}
        </div>
      </div>
    </div>
  );
}

Cocktail.propTypes = {
  cocktail: PropTypes.instanceOf(Object).isRequired,
  fetchCocktail: PropTypes.func.isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  cocktail: state.cocktail,
});

const mapDispatchToProps = dispatch => ({
  fetchCocktail: id => dispatch(fetchCocktail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cocktail);
