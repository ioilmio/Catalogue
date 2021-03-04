import { Router, Switch } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import React from 'react';
import CocktailList from '../components/CocktailList';
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, screen } from '../../test-utils';
import store from '../redux/store';

it('Renders the connected app with initialState', () => {
  render(
    // <Provider store={store}>
    <CocktailList />
    // {/* <Provider /> */}
    , {
      cocktails: {
        loading: false,
        cocktails: [{
          idDrink: '17219', strDrink: 'Yellow Bird', strDrinkAlternate: null, strTags: 'IBA,NewEra', strVideo: null, strCategory: 'Cocktail', strIBA: 'New Era Drinks', strAlcoholic: 'Alcoholic', strGlass: 'Cocktail glass', strInstructions: 'Shake and strain into a chilled cocktail glass', strInstructionsES: null, strInstructionsDE: 'In ein gekühltes Cocktailglas schütteln und abseihen.', strInstructionsFR: null, strInstructionsIT: 'Shakerare e filtrare in una coppetta da cocktail ghiacciata', 'strInstructionsZH-HANS': null, 'strInstructionsZH-HANT': null, strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/2t9r6w1504374811.jpg', strIngredient1: 'White Rum', strIngredient2: 'Galliano', strIngredient3: 'Triple Sec', strIngredient4: 'Lime Juice', strIngredient5: null, strIngredient6: null, strIngredient7: null, strIngredient8: null, strIngredient9: null, strIngredient10: null, strIngredient11: null, strIngredient12: null, strIngredient13: null, strIngredient14: null, strIngredient15: null, strMeasure1: '3 cl', strMeasure2: '1.5 cl', strMeasure3: '1.5 cl', strMeasure4: '1.5 cl', strMeasure5: null, strMeasure6: null, strMeasure7: null, strMeasure8: null, strMeasure9: null, strMeasure10: null, strMeasure11: null, strMeasure12: null, strMeasure13: null, strMeasure14: null, strMeasure15: null, strImageSource: null, strImageAttribution: null, strCreativeCommonsConfirmed: 'No', dateModified: '2017-09-02 18:53:31',
        }, {
          idDrink: '12728', strDrink: 'Yoghurt Cooler', strDrinkAlternate: null, strTags: null, strVideo: null, strCategory: 'Other/Unknown', strIBA: null, strAlcoholic: 'Non alcoholic', strGlass: 'Highball Glass', strInstructions: 'Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up. Note: Use lots of ice in this one - great on hot days! To add ice: Remove the center of the cover while the blender is on - drop 3 or 4 ice cubs and blend until they\'re completely crushed.', strInstructionsES: null, strInstructionsDE: 'Alle Zutaten in den Mixer geben - abdecken und bei mittlerer Geschwindigkeit schaumig schlagen, bis sie gut vermischt sind. In ein großes, 2 mittlere oder 3 kleine Gläser füllen und geniessen. Hinweis: Verwenden Sie viel Eis in diesem Gerät - ideal an heißen Tagen! Um Eis hinzuzufügen: Entfernen Sie die Mitte der Abdeckung, während der Mixer eingeschaltet ist - lassen Sie 3 oder 4 Eiswürfel fallen und mischen Sie sie, bis sie vollständig zerkleinert sind.', strInstructionsFR: null, strInstructionsIT: 'Mettere tutti gli ingredienti nella caraffa del frullatore - coprire e montare a velocità media fino a quando non sono ben amalgamati.Nota: usa molto ghiaccio in questo - ottimo nelle giornate calde!Versare in un bicchiere alto, 2 medi o 3 piccoli e bere.Per aggiungere il ghiaccio: rimuovere il centro del coperchio mentre il frullatore è acceso - far cadere 3 o 4 cubetti di ghiaccio e frullare fino a quando non saranno completamente schiacciati.', 'strInstructionsZH-HANS': null, 'strInstructionsZH-HANT': null, strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/trttrv1441254466.jpg', strIngredient1: 'Yoghurt', strIngredient2: 'Fruit', strIngredient3: 'Ice', strIngredient4: null, strIngredient5: null, strIngredient6: null, strIngredient7: null, strIngredient8: null, strIngredient9: null, strIngredient10: null, strIngredient11: null, strIngredient12: null, strIngredient13: null, strIngredient14: null, strIngredient15: null, strMeasure1: '1 cup ', strMeasure2: '1 cup ', strMeasure3: null, strMeasure4: null, strMeasure5: null, strMeasure6: null, strMeasure7: null, strMeasure8: null, strMeasure9: null, strMeasure10: null, strMeasure11: null, strMeasure12: null, strMeasure13: null, strMeasure14: null, strMeasure15: null, strImageSource: null, strImageAttribution: null, strCreativeCommonsConfirmed: 'No', dateModified: '2015-09-03 05:27:46',
        }],
        error: '',
      },
      cocktail: { loading: false, cocktail: [], error: '' },
      filter: false,
    },
  );

  expect(screen.getByText(/Home/i)).toBeInTheDocument();
});

describe('CocktailList', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      // eslint-disable-next-line no-undef
      <Provider store={store}>
        <Router>
          <Switch>
            <CocktailList />
          </Switch>
        </Router>
      </Provider>,

    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('creates the app component', () => {
    render(
      <Provider>
        <Router>
          <Switch>
            <CocktailList />
          </Switch>
        </Router>
      </Provider>,
    );
    const element = screen.getByText('Home');
    expect(element).toBeInTheDocument();
  });
});
