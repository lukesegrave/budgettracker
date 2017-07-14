import React from 'react';
class Transactions extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			list:[]
		}
	}
	componentWillReceiveProps(nextProps){
		var arr = [...nextProps.array]
		this.setState({
			list:arr
		}),(err,done)=>{
			if(err) {
				console.log('err',err)
			}
			else{
				console.log('done')
			}
		}
	}
	render (){
		return ( <div>
					{this.state.list.map((item)=>{
						if(item.amount>=0){
							return <h3 style={{color:'blue'}}>{item.amount} {item.description}</h3>
						}else if(item.amount<=-1){
							return <h3 style={{color:'red'}}>{item.amount} {item.description}</h3>
						}
					})}
					</div>
		)
	}
}
module.exports = Transactions
