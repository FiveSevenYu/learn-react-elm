import React from 'react'
import HomeHeader from '../components/Homeheader'
import FoodNav from '../components/FoodNav'
import Banner from '../components/Banner'
import ShopList from '../components/ShopList'
class Home extends React.Component {
    render(){
        return(
            <div>
                <HomeHeader />
                <FoodNav />
                <Banner />
                <ShopList />
            </div>
        )
    }
}

export default Home;