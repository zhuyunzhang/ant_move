//
// Author: leafsoar
// Date: 2017-07-25 15:01:45
// 

// 用户信息

import React, { Component } from 'react';
import { Carousel, Grid, WhiteSpace, Card } from 'antd-mobile';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import action from '../../actions';
import './player.css';

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: ['', '', ''],
            initialHeight: 80,
        };
    }
    componentDidMount() {
    }

    toGrid(el, index){
        const {history} = this.props;
        if(el.to != null){
            history.push(el.to);
        } 
    }
	
	render() {
		// var {state} = this.props;
		// var {login} = state;
        const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
        const data1 = [
            {
                icon: require("./img/icon_1.png"),
                text: "代理列表",
                to: "/userlist"
            },
            {
                icon: require("./img/icon_2.png"),
                text: "开通代理",
            },
            {
                icon: require("./img/icon_3.png"),
                text: "玩家信息",
            },
            {
                icon: require("./img/icon_4.png"),
                text: "游戏信息",
            }
        ];

        var cItem = (item, i) => {
            return(
                <a href="#" key={i} style={hProp}>
                    <img
                      src={require(`./img/tou_${i+1}.jpg`)}
                      alt=""
                      style={{width: '100%', height: "150px"}}
                      onLoad={() => {
                        window.dispatchEvent(new Event('resize'));
                        this.setState({
                            initialHeight: null,
                        });
                    }}/>
                </a>
            )
        }
		return (
			<div>
			 	<Carousel
                  className="my-carousel"
                  autoplay={false}
                  infinite
                  autoplay
                  style={{height: '150px'}}
                  selectedIndex={1}
                  swipeSpeed={35}
                  beforeChange={(from, to) => {}}
                  afterChange={(index) => {}}>
                    {this.state.data.map(cItem)}
                </Carousel>
                <div style={{ padding: '5px 0' }} >
                    <Grid data={data1} square={false} columnNum={2} className="not-square-grid" onClick={(el, index)=>{this.toGrid(el, index)}}/>
                </div>
                <WhiteSpace size="sm"/>
                <div>
                    <Card full>
                        <Card.Header
                          title="张三"
                          thumbStyle={{width:'64px',height:'64px'}}
                          thumb={require("./img/tx_1.jpg")}
                          extra={<a className="xq" href="#">详情</a>}/>
                        <Card.Body>
                            <div>我是张三、家住：安徽省合肥市包河区、联系电话：19090909090</div>
                        </Card.Body>
                    </Card>
                    <WhiteSpace size="xs"/>
                    <Card full>
                        <Card.Header
                          title="李四"
                          thumbStyle={{width:'64px',height:'64px'}}
                          thumb={require("./img/tx_2.jpg")}
                          extra={<a className="xq" href="#">详情</a>}/>
                        <Card.Body>
                            <div>我是李四，家住：安徽省合肥市蜀山区、联系电话：18289088908</div>
                        </Card.Body>
                    </Card>
                    <WhiteSpace size="xs" />
                    <Card full>
                        <Card.Header
                          title="王五"
                          thumbStyle={{width:'64px',height:'64px'}}
                          thumb={require("./img/tx_3.jpg")}
                          extra={<a className="xq" href="#">详情</a>}/>
                        <Card.Body>
                            <div>我是王五，家住：安徽省合肥市蜀山区、联系电话：13234255687</div>
                        </Card.Body>
                    </Card>
                </div>
			</div>
		);
	}
}

export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(Home);