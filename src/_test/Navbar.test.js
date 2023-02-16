import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import '@testing-library/jest-dom';
import store from '../Redux/store';

describe('Navbar', () => {
  const tree = test('renders Navbar component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
