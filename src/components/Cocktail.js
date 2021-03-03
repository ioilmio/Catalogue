import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCocktail } from '../redux/Cocktail/CocktailActions';

function Cocktail({ fetchCocktail, cocktail, match }) {
  useEffect(() => {
    fetchCocktail(match.params.id);
  }, []);
  return (
    <div>
      <div className="cocktail-name">
        {cocktail.cocktail.strDrink}
      </div>
      <div className="cocktail-category">
        {cocktail.cocktail.strCategory}
      </div>
      <div className="cocktail-glass">
        {cocktail.cocktail.strGlass}
      </div>
      <div className="cocktail-image">
        <img src={`${cocktail.cocktail.strDrinkThumb}/preview`} alt="" />
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
