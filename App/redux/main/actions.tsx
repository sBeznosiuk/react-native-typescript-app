import { createAction } from '@reduxjs/toolkit';

export const fetchImagesSuccess = createAction(
  'images/fetchImagesSuccess'
);
export const fetchImagesError = createAction(
  'images/fetchImagesError'
);
export const fetchImagesRequest = createAction(
  'images/fetchImagesRequest'
);

export const fetchOnRefreshSuccess = createAction(
  'images/fetchOnRefreshSuccess'
);
export const fetchOnRefreshError = createAction(
  'images/fetchOnRefreshError'
);
