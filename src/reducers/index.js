import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
import ActiveVideo from './reducer_active_video';
import VideosReducer from './reducer_videos';

// Here is how the Application's state is generated
const rootReducer = combineReducers({
  videos: VideosReducer,
  books: BooksReducer,
  activeBook: ActiveBook,
  activeVideo: ActiveVideo
});

export default rootReducer;
