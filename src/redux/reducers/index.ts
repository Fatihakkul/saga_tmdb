import {combineReducers} from 'redux';
import movieReducer from './movieReducer';
import favoriteReducer from './favoriteReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  movie: movieReducer,
  favorite: favoriteReducer, 
  search: searchReducer
});

export default rootReducer;
