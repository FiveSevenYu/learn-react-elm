import React,{ Component } from 'react'
import {  NavLink as Link } from 'react-router-dom'
import '../../assets/fonts/iconfont.css'
import './index.css'


class TabBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        const url = window.location.href;
        return(
            <div className="TabBar">
                    <Link exact to="/" className={'TabBar-item '+(/\/$/.test(url) ? 'active' : '')}>
                        <div className="iconfont icon-shouye"></div>
                        <span>首页</span>
                    </Link>
                    <Link to="/find" className={'TabBar-item '+(url.indexOf("/find") >-1 ? 'active' : '')}>
                        <div className="iconfont icon-faxian"></div>
                        <span>发现</span>
                    </Link>
                    <Link to="/order" className={'TabBar-item '+(url.indexOf("/order") >-1 ? 'active' : '')}>
                        <div className="iconfont icon-dingdan"></div>
                        <span>订单</span>
                    </Link>
                    <Link to="/user" className={'TabBar-item '+(url.indexOf("/user") >-1 ? 'active' : '')}>
                        <div className="iconfont icon-weibiaoti2fuzhi12"></div>
                        <span>我的</span>
                    </Link>
            </div>
        )
    }
}

export default TabBar;