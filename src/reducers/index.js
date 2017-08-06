import { combineReducers } from 'redux';
import BooksReducer from './books_reducer'
import ActiveBook from './active_book_reducer'

const rootReducer = combineReducers({
  //state: (state = {}) => state
  activeBook:ActiveBook,
  books:BooksReducer
});

export default rootReducer;
