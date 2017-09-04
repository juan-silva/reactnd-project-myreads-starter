import React, { Component } from 'react'
import BookList from './BookList'
import { Link } from 'react-router-dom'


class MyReadsPage extends Component{

	/* Render the main page with the shelves */
	render(){
		
		const { books, onShelfSelection } = this.props
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<BookList 
							listTitle="Currently Reading" 
							onShelfSelection={onShelfSelection}
							books={books.filter((b) =>(b.shelf==="currentlyReading"))} 
						/>
						<BookList 
							listTitle="Want to Read" 
							onShelfSelection={onShelfSelection}
							books={books.filter((b)=>(b.shelf==="wantToRead"))} 
						/>
						<BookList 
							listTitle="Read" 
							onShelfSelection={onShelfSelection}
							books={books.filter((b)=>(b.shelf==="read"))} 	
						/>
					</div>
				</div>
				<div className="open-search">
					<Link to="/search">Add a book</Link>
				</div>
			</div>
		)
	}
}

export default MyReadsPage