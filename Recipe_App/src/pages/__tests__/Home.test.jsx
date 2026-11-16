import { render } from '@testing-library/react';
import Home from '../Home';
import { describe } from 'vitest';
import { BrowserRouter} from 'react-router-dom';


const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};
describe('Home', () => {
  test('renders without crashing', () => {
    renderWithRouter(
      <Home />
    );
  });
});