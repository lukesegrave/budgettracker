import React from 'react';
import AddMoney from './AddMoney';
import Transactions from './ShowTransactions';
import axios from 'axios'

class Main extends React.Component{
	constructor(props){
		super();
		this.state = {
			array:[],
			message:'Please use the - sign to indicate an expense'
		}
	}
changeAmount(){
	var amount	= Number(this.refs.amount.value)
	var description	= this.refs.description.value
	var obj = {
		amount:amount,
		description:description
	}
	var newArr = this.state.array
	var hello = newArr.concat(obj)

	axios.post('/pushToSchema',{amount:amount, description:description})
	.then((res)=>{
		debugger
	}).catch((err)=>{
		debugger
	})

	this.setState({
		array:hello
	},(err, done)=>{
		if(err) {
			console.log('err', err)
		}
		else {
			console.log('done')
		}
	})
}
componentDidMount() {
	setTimeout(()=>{
		this.setState({
			message:''
		})
	}, 5000)
}

	render(){
		return (
			<form name="mainForm" method="post">
			<div>
				<h3>{this.state.message}</h3>
			</div>
				<div className="container">
					<div className="form-group">
  					<label>Amount:</label>
  					<input type="number" className="form-control" ref="amount"/>
					</div>
					<div className="form-group">
						<label>Description:</label>
						<input type="text" className="form-control" ref="description"/>
					</div>
					<div>
						<button type="button" className="btn btn-default" onClick={this.changeAmount.bind(this)}>Submit</button>
						<AddMoney array={this.state.array}/>
						<Transactions array={this.state.array}/>
					</div>
				</div>
			</form>
			)
	}
}

module.exports = Main
