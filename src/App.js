import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    books: [],
    title: ''
  }

  componentDidMount(){
    BooksAPI.getAll().then((response)=>{
      this.setState({books: response})
      console.log(this.state.books)
    })
  }

  shelfChange  = (book, shelf)=>{
    BooksAPI.update(book, shelf).then((response) =>{
      book.shelf = shelf;
      let updatedBooks = this.state.books.filter((b)=>b.id !== book.id)
      updatedBooks.push(book)
      this.setState({books: updatedBooks})
    })
  }

  render() {
    return (
      <div className="app">
          <Route exact path='/search' render={()=>(
              <SearchPage books={this.state.books} shelfChange={this.shelfChange }/>)}/>
          <Route exact path='/' render={()=>(
              <Book books={this.state.books} shelfChange={ this.shelfChange }/>)} />
      </div>
    )
  }
}

export default BooksApp;