var React = require('react');
var ProductModel = require('../models/ProductModel');

module.exports = React.createClass({
	getInitialState: function() {
		return { error: null };
	},
	render: function() {
		var errorElement = null;
		if(this.state.error) {
			errorElement = (
				<p className="red">{this.state.error}</p>
			);
		}
		return (
			<div className="container">
				<div className="row">
					<form className="col s12" onSubmit={this.onAddProduct}>
						<h1>Add Product</h1>
						{errorElement}
						<div className="row">
							<div className="input-field col s12">
								<input type="text" ref="productName" className="validate" />
								<label>Product Name</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<textarea id="textarea1" ref="productDescription" className="materialize-textarea"></textarea>
								<label>Description</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<input type="number" ref="price" className="validate" />
								<label>Price</label>
							</div>
							<div className="input-field col s6">
								<select className="browser-default" ref="category">
									<option value="" disabled selected>Category</option>
									<option value="books">Books</option>
									<option value="electronics">Electronics</option>
									<option value="clothing">Clothing</option>
								</select>
							</div>
						</div>
						<div className="row">
							<button className="waves-effect waves-light btn">Add Product</button>
						</div>
					</form>
				</div>
			</div>
		);
	},
	onAddProduct: function(e) {
		e.preventDefault();
		var product = new ProductModel({
			name: this.refs.productName.getDOMNode().value,
			description: this.refs.productDescription.getDOMNode().value,
			price: this.refs.price.getDOMNode().value,
			category: this.refs.category.getDOMNode().value,
			user: Parse.User.current()
		});
		product.save();

	}
});