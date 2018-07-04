import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component{
    state = {
        books: [],
        query: ''
    }

    input(query){
        if(query){
            BooksAPI.search(query).then((response)=>{
                this.setState({books: response})
                console.log(this.state.books)
            })
        }else if(query === ''){
            this.setState({books: []})
        }
    }

  render(){
    return(
      <div className="search-books">
    <div className="search-books-bar">
        <Link className="close-search" to='/'>Close</Link>
        <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={ (event)=>this.input(event.target.value)}/>
        </div>
    </div>
    <div className="search-books-results">
        <ol className="books-grid">
            {this.state.books.map((book, i) => (
            <li key={i} width="140px">
                {book.imageLinks !== undefined ? (
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, 
                          backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select onChange={ (event)=>this.props.shelfChange(book, event.target.value)}>
                                <option value="none">Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none" disabled>None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.author}</div>
                </div>
                ): (
                <div className="book">
                    <div className="book-top">
                        <div>
                            <div className="book-cover" style={{ width: 128, height: 193, 
                              backgroundImage: `` }}></div>
                            <div className="book-shelf-changer">
                                <select onChange={ (event)=>this.props.shelfChange(book, event.target.value)}>
                                    <option value="none">Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none" disabled>None</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.author}</div>
                </div>
                )}
            </li>
            ))}
        </ol>
    </div>
</div>
      )
  }
}

export default SearchPage;