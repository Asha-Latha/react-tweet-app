import React from 'react';
import {Link} from 'react-router-dom';

class Logout extends React.Component{
    state = {  }
    render() { 
        return ( 
            <div>   
                <Link to='/' ></Link> &nbsp;     
            </div>
         );
    }
}
export default Logout;