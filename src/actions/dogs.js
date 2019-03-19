import { createAction } from 'promise-middleware-redux';
import { fetchDogsService } from '../services/dogs';

export const [
  fetchDogs,
  FETCH_DOGS,
  FETCH_DOGS_PENDING,
  FETCH_DOGS_FULFILLED,
  FETCH_DOGS_ERROR
] = createAction('FETCH_DOGS', fetchDogsService);
