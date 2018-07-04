import React, { Component } from 'react';

class ListOfBooks extends Component{
    render() {
		return(
		  <div className="list-books-content">
				<div className="bookshelf">
						<h2 className="bookshelf-title">{this.props.title}</h2>
						<div className="bookshelf-books">
								<ol className="books-grid">
										{this.props.books.map((book, i) => (
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
																				<option value="none">None</option>
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
																						<option value="none">None</option>
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
		</div>
		)
	}
}

export default ListOfBooks;