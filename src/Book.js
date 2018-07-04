import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListOfBooks from './ListOfBooks';

class Book extends Component{
	state = {
		shelf: ''
	}

	onShelfChange = (book, shelf)=>{
		this.setState({shelf: shelf})
		this.props.shelfChange(book,shelf)
	}

  render(){
		return(
			<div className="list-books">
		      <div className="list-books-title">
		        <h1>MyReads</h1>
		      </div>
					<ListOfBooks title={'Currently Reading'} shelfChange = {this.onShelfChange}
							books={this.props.books.filter((book) => book.shelf === 'currentlyReading')} />
					<ListOfBooks title={'Want to Read'} shelfChange = {this.onShelfChange}
							books={this.props.books.filter((book) => book.shelf === 'wantToRead')}  />
					<ListOfBooks title={'Read'} shelfChange = {this.onShelfChange}
							books={this.props.books.filter((book) => book.shelf === 'read')}/>
				  <div className="open-search">
	          <Link to='/search'>Add a book</Link>
	        </div>
		  </div>        
		)
	}
}

export default Book;