import { combineReducers} from 'redux';
import post from '../../reducers/postReducer'
import book from '../../reducers/bookReducer'
import image from '../../reducers/imageReducer'

const rootReducer = combineReducers({
  post,
  book,
  image
});

export default rootReducer;