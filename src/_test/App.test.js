import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Category from '../Pages/Category';
import store from '../Redux/store';

it('Categories renders correctly', () => {
  const categories = renderer
    .create(<Provider store={store}><Category /></Provider>)
    .toJSON();
  expect(categories).toMatchSnapshot();
});
