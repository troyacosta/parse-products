var React = require('react');
var ProductModel = require('../models/ProductModel');

module.exports = React.createClass({
	getInitialState: function() {
		return({
			clothes: []
		});
	},
	componentWillMount: function() {
		var query = new Parse.Query(ProductModel);
		query.equalTo('category', 'clothing');
		query.find().then(
			(clothes) => {
				this.setState({clothes: clothes});
			},
			(error) => {
				console.log(error);
			}
			)
	},
	render: function() {
		var clothing = this.state.clothes.map(function(clothes) {
			return(
				<tr>
					<td>{clothes.get('name')}</td>
					<td>{clothes.get('description')}</td>
					<td>{clothes.get('price')}</td>
				</tr>
				);
		});
		return (
			<div className="container">
				<div className="row">
					<h1>Clothing</h1>
					<table>
							<tr>
								<th>NAME</th>
								<th>ABOUT</th>
								<th>PRICE</th>
							</tr>
							{clothing}
						</table>
				</div>
			</div>
		);
	}
});