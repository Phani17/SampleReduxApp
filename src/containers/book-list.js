import React ,{Component} from 'react'
import { connect } from 'react-redux'
import {selectBook } from '../actions/index'
import { bindActionCreators} from 'redux'

// this is converted from Component to container by using connect as react-redux
class BookList extends Component{

  renderList() {
    return this.props.books.map((book)=>{
      return (
        <li
          key={book.title}
          onClick={()=>this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      )
    })
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  //whatever is returned will show up as
  // props in this container
  return {
    books:state.books
  }
}

//anything retuned from this fucntion will end up as props
// on booklist container
function mapDispatchToProps(dispatch){
  //whenever selectbook is called , result(action(object) created by action creator)
  //shud be passed to all of reducers
  //key is our key, value is what we imported
  return bindActionCreators({selectBook:selectBook}, dispatch)
}

//promote booklist from Component to container
// it needs to knw about this new dispatch method selectBook
//make it available as prop
export default connect(mapStateToProps,mapDispatchToProps)(BookList)
