import React, { Component } from 'react'
import Book from './Book'

class BookList extends Component{

	/* Render a list of books */
	render(){

		const { books, onShelfSelection } = this.props
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.listTitle}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{books.map(book => (
							<li key={book.id}>
								<Book 
									book={book}
									onShelfSelection={onShelfSelection}
								/>
							</li>
						))}
						{books.length === 0 && (
							<li>No books found.</li>
						)}
					</ol>
				</div>
			</div>			
		)
	}
}

export default BookList