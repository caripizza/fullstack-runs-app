import { FETCH_DOGS } from '../actions/dogs';

const initialState = {
  list: []
};

export default function reducer(
  state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_DOGS:
      return {
        ...state,
        list: payload
      };
    default:
      return state;
  }
}
