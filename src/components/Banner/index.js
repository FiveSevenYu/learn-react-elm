import React from 'react'
import './index.css'
const Banner = () => (
    <div className="Banner">
        <div className="comboEnter">
            <div className="leftInfo">
                <h3>品质套餐</h3>
                <div className="desc">搭配齐全吃得好</div >
                < div className = "buy-button" >
                    立即抢购 &gt;
                </div>
            </div>
            <img src={require('./images/kaorou.jpeg')} alt=".." />
        </div>
        <div className="carousel">
            <div className="slider-container">
                <img src={require('./images/juan.jpeg')} alt=".." />
            </div>
        </div>
    </div>
)
export default Banner;