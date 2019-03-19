import { createAction } from 'promise-middleware-redux';
import { fetchDogService } from '../services/dogs';

export const [
  fetchDogDetails,
  FETCH_DOG_DETAILS,
  FETCH_DOG_DETAILS_PENDING,
  FETCH_DOG_DETAILS_FULFILLED,
  FETCH_DOG_DETAILS_ERROR
] = createAction('FETCH_DOG_DETAILS', fetchDogService);
