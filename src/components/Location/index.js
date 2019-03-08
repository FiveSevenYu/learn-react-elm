import React from 'react'
import './index.css'
class Location extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userSelect: false,
            currentLoa: {
                name: "定位中..."
            },
        }
    }
    getLocation() {
        setTimeout(() => {
            if(window.lat) {
                fetch('https://elm.cangdu.org/v2/pois/'+window.lat+','+window.lng)
                .then(res => res.json())
                .then(data => this.setState({
                    currentLoa: data,
                }))
            }
        }, 4000);
    }
    componentDidMount() {
        if(this.state.userSelect !== true){
            this.getLocation();
        }
    }
    render(){
        const { currentLoa } = this.state;
        return(
            <div className="Location">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 31" className="Addressicon">
                <path fill="#FFF" fillRule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z" data-spm-anchor-id="a2ogi.12117543.0.i2">
                </path>
                </svg>
                <span>{currentLoa.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" className="pullDown"><path fill="#FFF" fillRule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"></path></svg>
            </div>
        )
    }
}
export default Location;