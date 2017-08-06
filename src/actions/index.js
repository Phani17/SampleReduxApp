export function selectBook(book){
  //select book is an actioncreator , returns an actioncreator
  // an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
