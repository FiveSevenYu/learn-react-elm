import React from 'react'
import './index.css'
class FoodNav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            navList: [],
        }
    }
    componentDidMount() {
        fetch('https://elm.cangdu.org/v2/index_entry')
        .then(res => res.json())
        .then(data => this.setState({
            navList: data
        }))
    }
    render(){
        const { navList } = this.state;
        return (
            <div className="FoodNav">
                <div className="slider-container">
                    {
                        navList.map(i => 
                            <a key={i.id} className="figure" href={i.link}>
                                 <img src={"https://fuss10.elemecdn.com/"+i.image_url} alt={i.description}/>
                                 <figcaption className="nav-dec">{i.title}</figcaption> 
                            </a>    
                        )
                    }
                </div>
            </div>
        )
    }
}

export default FoodNav;