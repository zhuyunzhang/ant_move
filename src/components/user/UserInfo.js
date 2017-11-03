//
// Author: leafsoar
// Date: 2017-07-25 15:01:45
// 

// 用户信息

import React, { Component } from 'react';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import action from '../../actions';

import { List } from 'antd-mobile';

const Item = List.Item;

class UserInfo extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
	    return (
	    	<div style={{padding: '0', margin: '0'}}>
				<List style={{padding: '0', margin: '0'}}>
					<Item arrow="horizontal" multipleLine style={{height: '100px',backgroundColor: "#0091EA"}} onClick={() => {}}>
		        		<img style={{height: '65px', width: '65px', borderRadius: "5px", float: "left"}} src={require("./img/tx_1.jpg")}/>
		        		<div style={{float: "left", marginLeft: "10px", marginTop: "10px", color: "#FFF"}}>
		        			*三……
		        			<br/>
		        			<span style={{fontSize: "12px", color: "#BDBDBD"}}>152******56</span>
		        		</div>
		        	</Item>
		      	</List>
		      	<List renderHeader={() => ''} className="my-list">
		      		<Item arrow="horizontal" onClick={() => {}}>账单</Item>
		        	<Item extra="10000.00" arrow="horizontal" onClick={() => {}}>余额</Item>
		      	</List>
	    	</div>
	    );
  }
}

export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(UserInfo);
