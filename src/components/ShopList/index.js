import React from 'react'
import Shopitem from '../Shopitem'
import './index.css'
class ShopList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shopList: []
        }
    }
    componentDidMount() {
        fetch('https://elm.cangdu.org/shopping/restaurants?latitude='+window.lat+'&longitude='+window.lng)
            .then(res => res.json())
            .then(data => this.setState({
                shopList: data
            }))
            .then(() => console.log(this.state.shopList))
    }
    render(){
        const { shopList } = this.state;
        return(
            <div className="ShopList">
                <div className="shop-title">
                    推荐商家
                </div>
                {/* TODO:筛选功能暂未实现 */}
                <div className="shop-filter">
                    <span>综合排序</span>
                    <span>距离最近</span>
                    <span>品质联盟</span>
                    <span>筛选</span>
                </div>
                {
                    shopList.map(i =>
                        <Shopitem key={i.id} data={i} />
                    )
                }
            </div>
        )
    }
}
export default ShopList;