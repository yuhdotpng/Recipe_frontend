import { render } from '@testing-library/react';
import RecipePage from '../Recipes';
import { describe } from 'vitest';
import { BrowserRouter} from 'react-router-dom';


const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};
describe('Recipe page', () => {
  test('renders without crashing', () => {
    renderWithRouter(
      <RecipePage/>
    );
  });
});