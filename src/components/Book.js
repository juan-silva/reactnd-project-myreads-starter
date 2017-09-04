import React, { Component } from 'react'
import BookshelfSelector from './BookshelfSelector'
class Book extends Component{


	/* Render a single book entry */
	render(){

		const { book } = this.props
		return (
			<div className="book">
				<div className="book-top">
					<div 
						className="book-cover" 
						style={{ 
							width: 128, 
							height: 193, 
							backgroundImage: 'url("'+book.imageLinks.thumbnail+'")' 
						}}>
					</div>
					<BookshelfSelector book={book} onShelfSelection={this.props.onShelfSelection} />
				</div>
				<div className="book-title">{book.title}</div>
				{book.authors && (
					<div className="book-authors">{book.authors[0]}</div>
				)}
				
			</div>
			)
	}
}

export default Book