//
// Author: zhongyu
// 

// 用户信息

import React, { Component } from 'react';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import action from '../../../actions';

import { List } from 'antd-mobile';

const Item = List.Item;

class Home extends Component {
	constructor(props, context) {
		super(props, context);
	}
	componentDidMount() {
	}
	render() {
		return (
			<div>我的财富</div>
		);
	}
}

export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(Home);