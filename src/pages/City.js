import React from 'react'
import { Link } from 'react-router-dom'
import Citylist from '../components/Citylist'
import Hotcity from '../components/Hotcity'

import './City.css'
class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            queryStep:"城市选择",
            guessCity: [],
            inputValue: ''
        }
    }
    componentDidMount() {
        fetch('https://elm.cangdu.org/v1/cities?type=guess')
        .then(res => res.json())
        .then(data => this.setState({
            guessCity:data
        }))
    }
    componentWillUnmount (){
        clearInterval(this.time)
    }
    getAddress(e) {
        this.setState({
            inputValue:e.target.value
        })
        console.log(e.target.value)
    }
    render(){
        const { queryStep,guessCity } = this.state;
        return(
            <div className="City">
                <div className="cityHeader">
                    <i className="back"></i>
                    <div className="title">{queryStep}</div>
                </div>
            
                
                    <div className="guessCity">
                        <div className="guesshd"><span>当前定位城市</span><span>定位不准时,请在城市列表中选择</span></div>
                        <Link to="/address">
                            <div className="guessbd">{guessCity.name}</div>
                        </Link>
                        
                    </div>    
                    <Hotcity />
                    <Citylist />            
                
            </div> 
        )
    }
}

export default City;


/*
城市列表
点击 Location模块 => 城市列表页 
给城市列表父级盒子添加点击事件,通过时间委托,获取被点击的元素,从中取得该元素的值,将该值传递收获地址页
当用户选择了城市后 => 展示选择收货地址
检测输入框变化实时查询把查询结果展示以便用户选择
用户选择后跳转回首页
*/