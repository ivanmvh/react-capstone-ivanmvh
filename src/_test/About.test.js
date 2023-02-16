import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import About from '../Pages/About';
import '@testing-library/jest-dom';
import store from '../Redux/store';

describe('About', () => {
  const tree = test('renders About component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <About />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
