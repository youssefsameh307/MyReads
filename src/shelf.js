import React, {Component} from 'react'


class Shelf extends Component{
    render(){
      const {state,books} = this.props
      const options={'currentlyReading':'Currently Reading','wantToRead':'Want to Read','read':'Read','none':'none'}
      return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{options[state]}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          
          {books.map(book=>(
              
              <li key={book.id} id={book.id}>
              <div className="book" >
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:'imageLinks'in book?'url('+book['imageLinks']['thumbnail']+')'
                  :'url(https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg)' }}></div>
                  
                  <div className="book-shelf-changer">

                    <select defaultValue={state} id={book.id} onChange={(e)=>{this.props.update(book,e.target.value)}}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                    </select>
                  
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li> 

          ))}
          </ol>
        </div>
      </div>
      )
    }
  


}

export default Shelf 