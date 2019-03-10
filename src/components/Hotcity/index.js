import React from 'react'
import './idnex.css'
class Hotcity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Hotcity:[]
        }
    }
    componentDidMount() {
        fetch('https://elm.cangdu.org/v1/cities?type=hot')
        .then(res => res.json())
        .then(data => this.setState({
            Hotcity:data,
        }))
    }
    render(){
        const { Hotcity } = this.state;
        return(
            <div className="Hotcity">
                <div className="hotTitle">热门城市</div>
                <ul>
                {
                    Hotcity.map(item =>
                        <li key={item.id}>{item.name}</li>
                    )
                }
                </ul>
            </div>
        )
    }
}
export default Hotcity;