import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
class Search extends Component{
    state={
        books:[]
    }
    componentDidMount=()=>{
        this.setState(()=>({books:[]}))
    }
    updateQuery=(query)=>{
        var newquery;
        query===''?newquery=' ':newquery=query
        BooksAPI.search(newquery)
            .then((newbooks)=>{
                newbooks===undefined?
                this.setState(()=>({
                    books:[]
                })):
                this.setState(()=>({
                    books:newbooks
                }))
    })
    }

    render(){
        var{shelvedbooks}=this.props
        var {books}=this.state
        return(
            <div className="search-books">
            <div className="search-books-bar">
                <Link to='/MyReads./'>
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" defaultValue='' onChange={(event)=> this.updateQuery(event.target.value)}/>

              </div>
              
            </div>
            <div className="search-books-results">
              <ol className="books-grid">


              {books.length>0?books.map(book=>(
              
              <li key={book.id} id={book.id}>
              <div className="book" >
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:'imageLinks'in book?'url('+book['imageLinks']['thumbnail']+')'
                  :'url(https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg)' }}></div>
                  
                  <div className="book-shelf-changer">

                    <select defaultValue={shelvedbooks.filter((e)=>{return e.id===book.id}).length>0
                    ?shelvedbooks.filter((e)=>{return e.id===book.id})[0].shelf
                    :'none'
                        
                        } id={book.id} onChange={(e)=>{this.props.update(book,e.target.value)}}>
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

          )):<p></p>}


              </ol>
            </div>
          </div>
        )
    }
}
export default Search
