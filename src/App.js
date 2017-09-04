import React from 'react'
import './App.css'
import MyReadsPage 	from './components/MyReadsPage'
import SearchPage 	from './components/SearchPage'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
	
	state = {
		books: []
	}

	/* Load books from the back end when the App component is loaded */
	componentDidMount(){

		BooksAPI.getAll().then((books)=>{
			this.setState({ books })
			console.log("Initial Load:", this.state.books)
		})
	}

	/* Process the action of changing the shelf selection for a book */
	onShelfSelection = (book, shelf) => {

		// check if the book is on the list
		let found = this.state.books.filter((b)=>(b.id === book.id))

		// check if we are trying to delete it from the list
		if(shelf === 'none'){
			this.setState((state)=>({
				books: state.books.filter((b)=>b.id !== book.id)
			}))
			console.log("Deleted book from list:", book)

		}else if(found.length === 0){
			// we were not trying to delete, and is not there, add it
			book.shelf = shelf
			this.setState(state=>({
				books: state.books.concat([book])
			}))
			console.log("Added book to list:", book)

		}else{
			// it is in the list and we are updating the category
			this.setState((state)=>({
				books: state.books.map((b)=>{
					if(b.id === book.id){
						b.shelf = shelf
						return b
					}else{
						return b
					}
				})
			}))
			console.log("Uodated book in list:", book)
		}

		// update the server
		BooksAPI.update(book, shelf)	
		console.log(this.state.books)
	}

	/* Render the component */
	render(){
		
		return (
			<div className="app">
				<Route 
					exact path="/" 
					render={()=>(
						<MyReadsPage 
							books={this.state.books}
							onShelfSelection={this.onShelfSelection}
						/>
					)}
				/>
				<Route 
					exact path="/search" 
					render={()=>(
						<SearchPage 
							books={this.state.books}
							onShelfSelection={this.onShelfSelection}
						/>
					)}
				/>
			</div>
		)
	}
}

export default BooksApp
