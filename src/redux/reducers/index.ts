import {combineReducers} from 'redux';
import movieReducer from './movieReducer';
import favoriteReducer from './favoriteReducer';
import searchReducer from './searchReducer';
import artistReducer from './artistReducer';
import globalReducer from './globalStateReducer';

const rootReducer = combineReducers({
  movie: movieReducer,
  favorite: favoriteReducer,
  search: searchReducer,
  artist: artistReducer,
  globalState: globalReducer,
});

export default rootReducer;
