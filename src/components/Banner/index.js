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
            <img src="https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/" />
        </div>
        <div className="carousel">
            <div className="slider-container">
                <img src="https://fuss10.elemecdn.com/4/48/37fce9a4ffbec79293357f68ecfcbjpeg.jpeg?imageMogr/format/webp/thumbnail/568x/" />
            </div>
        </div>
    </div>
)
export default Banner;