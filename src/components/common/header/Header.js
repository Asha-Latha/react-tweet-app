import React from   'react';
import Navbars from '../navbar/Navbars';

import logo from '../logo.png';
export class  Header extends React.Component {
    constructor(props){
        super(props);
        this.state ={
             imageURL :logo
        };
    }
    
    render() {
        return(
            <section className="header">
                <section className="header-top">
                    <section className="header-top-logo">
                    <img style={{width:"20px",height:"20px"}} 
                    src={this.state.imageURL} 
                    alt=""/>
                    </section>
                    <section className="header-top-navbar">
                      <section className="header-top__navigation">
                          <Navbars/>
                       </section>
                       <hr className="header-top__seperator" />
                    
                    </section>
                </section>
                
    
            </section>
        )
    }
    
}
