var React = require('react');
var ProductModel = require('../models/ProductModel');

module.exports = React.createClass({
	getInitialState: function() {
		return({
			gadgets: []
		});
	},
	componentWillMount: function() {
		var query = new Parse.Query(ProductModel);
		query.equalTo('category', 'electronics');
		query.find().then(
			(gadgets) => {
				this.setState({gadgets: gadgets});
			},
			(error) => {
				console.log(error);
			}	
			)
	},
	render: function() {
		var electronics = this.state.gadgets.map(function(gadgets) {
			return(
				<tr>
					<td>{gadgets.get('name')}</td>
					<td>{gadgets.get('description')}</td>
					<td>{gadgets.get('price')}</td>
				</tr>
				);
		});
		return (
			<div className="container">
				<div className="row">
					<h1>Electronics</h1>
					<table>
							<tr>
								<th>NAME</th>
								<th>ABOUT</th>
								<th>PRICE</th>
							</tr>
							{electronics}
						</table>
				</div>
			</div>
		);
	}
});