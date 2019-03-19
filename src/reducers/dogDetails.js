import {
  FETCH_DOG_DETAILS
} from '../actions/dogDetails';

const initialState = {
  name: '',
  age: null,
  weight: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_DOG_DETAILS:
      return {
        ...state,
        name: action.payload.name,
        age: action.payload.age,
        weight: action.payload.weight
      };
    default:
      return state;
  }
}
