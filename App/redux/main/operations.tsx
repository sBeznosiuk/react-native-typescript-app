import {
  fetchImagesError,
  fetchImagesRequest,
  fetchImagesSuccess,
  fetchOnRefreshError,
  fetchOnRefreshSuccess,
} from './actions';
import axios from 'axios';

export const fetchImages = page => async dispatch => {
  dispatch(fetchImagesRequest());

  try {
    const { data } = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=5`
    );

    dispatch(fetchImagesSuccess(data));
  } catch (e) {
    dispatch(fetchImagesError(e));
  }
};

export const fetchOnRefresh = page => async dispatch => {
  try {
    const { data } = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=5`
    );

    dispatch(fetchOnRefreshSuccess(data));
  } catch (e) {
    dispatch(fetchOnRefreshError(e));
  }
};
