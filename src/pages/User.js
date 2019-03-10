import React from 'react'
import Showcard from '../components/Showcard'
import Menucard from '../components/Menucard'
class User extends React.Component {
    render(){
        return(
            <div className="User">
               <Showcard />
               <Menucard />
            </div>
        )
    }
}

export default User;