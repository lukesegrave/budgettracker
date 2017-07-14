import React from 'react';

class AddMoney extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			total:[]
		}
	}
	//add things in
	componentWillReceiveProps(nextProps){
		var sum = 0;
		nextProps.array.map((item)=>{
			sum+=item.amount
			console.log(sum)
		})
		this.setState({total: sum},(err,done)=>{
			if(err) {
				console.log('err',err)
			}
			else{
				console.log('done')
			}
		})
	}
	render(){
		if(this.state.total<=500){
		return (
			<div className="container">
				<h1>TOTAL: <span style={{color:'red'}}>{this.state.total}</span></h1>
			</div>
			)
		}else if(this.state.total>=501){
			return (
				<div className="container">
					<h1>TOTAL: {this.state.total}</h1>
				</div>
				)
		}
	}
}
module.exports = AddMoney
