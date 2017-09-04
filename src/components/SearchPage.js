import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookList from './BookList'
import * as BooksAPI from '../BooksAPI'

class SearchPage extends Component{

	state = {
		bookResults: [],
		query:""
	}


	/* Process typing of search terms for the query */
	updateQuery = (query) => {

		this.setState({query: query.trim()})
		this.findBooks(query)
	}


	/* Do request to the server to find mathching books */
	findBooks = (query) => {

		BooksAPI.search(query, 20).then((books)=>{
			console.log("Searched:"+query)
			console.log("Found:", books)
			this.setState({
				bookResults: books.map((b)=>{
					let found = this.props.books.filter((mybook)=>(mybook.id === b.id))
					console.log()
					if(found.length > 0){
						b.shelf = found[0].shelf
						console.log("Did find it!")
					}else{
						console.log("Didd't find it!")
						b.shelf = 'none'
					}
					return b
				})
			})
		})
	}


	/* Clear the search terms */
	clearQuery = () => {
		this.setState({query: ''})
	}


	/* Render the Search interface and search results */
	render(){

		const { query } = this.state
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">
						{/*
							NOTES: The search from BooksAPI is limited to a particular set of search terms.
							You can find these search terms here:
							https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

							However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
							you don't find a specific author or title. Every search is limited by search terms.
						*/}
						<input 
							type="text" 
							placeholder="Search by title or author"
							value={query} 
							onChange={(event)=>this.updateQuery(event.target.value)}
						/>

					</div>
				</div>
				<div className="search-books-results">
					<BookList 
							listTitle="Search Results" 
							onShelfSelection={this.props.onShelfSelection}
							books={this.state.bookResults} 
						/>
				</div>
			</div>
			)
	}
}

export default SearchPage