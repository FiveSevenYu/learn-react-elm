import React from 'react'
import './index.css'
const WordCity =(props) => (
    <div className="WordCity">
        <div className="wordTitle">{props.data}</div>
            <ul>
                {props.list[props.data].map(item =>
                    <li key={item.id}>{item.name}</li>    
                )}
            </ul>
    </div>
)

class Citylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Citylist:{},
        }
        
    }
    componentDidMount() {
        fetch('https://elm.cangdu.org/v1/cities?type=group')
        .then(res => res.json())
        .then(data => this.setState({
            Citylist:data
        }))
    }
    // 获取字母序列表
    getList(data,arr) {
        for (let key in data) {
            arr.push(key);
        }
        return arr.sort();
    }
    render(){
        const { Citylist } = this.state;
        const arr = [];
        return(
            <div className="Citylist">
                {
                    this.getList(Citylist,arr).map(item =>
                        <WordCity key={item} data={item} list={Citylist} />    
                    )
                    
                }  
            </div>
        )
    }
}
export default Citylist;