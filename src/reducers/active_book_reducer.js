//here,state is not app state, but only this reducer is responsble for
export default function(state=null,action){
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload
  }
  return state
}
