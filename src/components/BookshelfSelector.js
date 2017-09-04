import React, { Component } from 'react'


class BookshelfSelector extends Component{


	/* Render the widget for shelf selection in a book */
	render(){
		return (
			<div className="book-shelf-changer" >
				<select value={this.props.book.shelf} onChange={(event)=>(this.props.onShelfSelection(this.props.book, event.target.value))}>
					<option value="none" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>		
			)
	}
}

export default BookshelfSelector