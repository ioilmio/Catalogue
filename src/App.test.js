import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('creates the app component', () => {
    render(<App />);
    const element = screen.getByText('Home');
    expect(element).toBeInTheDocument();
  });
});
