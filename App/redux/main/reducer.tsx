import {
  combineReducers,
  createReducer,
} from '@reduxjs/toolkit';
import { logoutSuccess } from '../auth/actions';
import {
  fetchImagesError,
  fetchImagesRequest,
  fetchImagesSuccess,
  fetchOnRefreshError,
  fetchOnRefreshSuccess,
} from './actions';

const images = createReducer([], {
  [fetchImagesSuccess]: (state, { payload }) => [
    ...state,
    ...payload,
  ],
  [fetchOnRefreshSuccess]: (_, { payload }) => payload,
  [logoutSuccess]: () => [],
});

const loading = createReducer(false, {
  [fetchImagesSuccess]: () => false,
  [fetchImagesError]: () => false,
  [fetchImagesRequest]: () => true,
  [fetchImagesError]: () => console.warn(payload),
  [fetchOnRefreshError]: () => console.warn(payload),
});

const mainReducer = combineReducers({
  images,
  loading,
});

export default mainReducer;
