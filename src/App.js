import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './shelf'
import Search from './search'
import {Route,Link} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books:[],
    showSearchPage: true
  }

  componentDidMount(){
    BooksAPI.getAll()
    .then((books)=>{
      this.setState(()=>({
        books:books
      }))
    })
  }
  updatebook=(book,shelf)=>{
    var book2 = book
    book2.shelf=shelf
    this.setState((currentstate)=>({
      books:currentstate.books.filter((c)=>{
        return c.id!==book.id
      }).concat(book2)
    }))

    BooksAPI.update(book,shelf)
  }
  render() {   
    return (
      <div className="app">
        <Route exact path='/search' render ={()=>(
          <Search
          shelvedbooks={this.state.books}
          update={this.updatebook}/>
        )}></Route>
        
        
        <Route exact path='/' render ={()=>(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              <Shelf books={this.state.books.filter((e)=>{
                return e.shelf ==="currentlyReading"
              })}
              update={this.updatebook}
              state='currentlyReading'/>

              <Shelf books={this.state.books.filter((e)=>{
                return e.shelf ==="wantToRead"
              })}
              update={this.updatebook}
               state='wantToRead'/>

              <Shelf books={this.state.books.filter((e)=>{
                return e.shelf ==="read"
              })}
              update={this.updatebook}
               state='read'/>

              </div>
            </div>
            <Link to='/search'>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
            </Link>
          </div>
        )}></Route>
      </div>
    )
  }
}

export default BooksApp
