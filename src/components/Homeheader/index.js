import React from 'react'
import Location from '../Location'
import './index.css'

const Search = () => (
    <div className="Search">
        <input type="text" placeholder="搜索饿了么商家 商品名称" />
    </div>
)


const HomeHeader = () => (
    <div className="HomeHeader">
        <Location />
        <Search />
    </div>
)
export default HomeHeader;