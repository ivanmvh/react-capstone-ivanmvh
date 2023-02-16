import { combineReducers, configureStore } from '@reduxjs/toolkit';
import photosSlice from './PhotosSlice';

const photosReducers = combineReducers({
  Photos: photosSlice,
});

const store = configureStore({
  reducer: photosReducers,
});

export default store;
