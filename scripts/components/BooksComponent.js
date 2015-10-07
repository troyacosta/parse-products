var React = require('react');
var ProductModel = require('../models/ProductModel');

module.exports = React.createClass({
	getInitialState: function() {
		return({
			products: []
		});
	},
	componentWillMount: function() {
		var query = new Parse.Query(ProductModel);
		query.equalTo('category', 'books');
		query.find().then(
			(products) => {
				this.setState({products: products});
			},
			(error) => {
				console.log(error);
			}
			)
	},
	render: function() {
		var books = this.state.products.map(function(book) {
			return(
				<tr>
					<td>{book.get('name')}</td>
					<td>{book.get('description')}</td>
					<td>{'$ '+ book.get('price')}</td>
				</tr>
				)
		});
		return (
			<div className="container">
				<div className="row">
					<h1>Books</h1>
						<table>
							<tr>
								<th>NAME</th>
								<th>ABOUT</th>
								<th>PRICE</th>
							</tr>
							{books}
						</table>
				</div>
			</div>
		);
	},
});