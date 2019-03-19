import { combineReducers } from 'redux';
import dogs from './dogs';
import dogDetails from './dogDetails';

export default combineReducers({
  dogs,
  dogDetails
});
