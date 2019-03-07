import React from 'react'
import './index.css'
class ShopList extends React.Component {
    render(){
        return(
            <div className="ShopList">
                <div className="shop-title">
                    推荐商家
                </div>
                {/* TODO:功能暂未实现 */}
                <div className="shop-filter">
                    <span>综合排序</span>
                    <span>距离最近</span>
                    <span>品质联盟</span>
                    <span>筛选</span>
                </div>
            </div>
        )
    }
}
export default ShopList;