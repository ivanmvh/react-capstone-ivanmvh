import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Profile from '../Pages/Profile';
import '@testing-library/jest-dom';
import store from '../Redux/store';

describe('Profile', () => {
  const tree = test('renders Profile component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
