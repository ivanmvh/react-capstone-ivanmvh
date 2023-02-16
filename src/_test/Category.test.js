import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Category from '../Pages/Category';
import '@testing-library/jest-dom';
import store from '../Redux/store';

describe('Category', () => {
  const tree = test('renders Category component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Category />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
