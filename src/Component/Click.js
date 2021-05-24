import React from 'react';
import like1 from './like1.png';
import like2 from './like2.png';

export class Click extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            count:0,
            sub:"Edit",
            imageURL :like1
        };
    }
    UpdateClick =() =>{
        this.setState({count : this.state.count +1});
    } 
    ButtonChange=()=>{
        this.setState({
          message:"Edited Successfully",
        //   sub:"Edited"
        });
    }
    imageChange=()=>{
        this.setState({
            imageURL:like2
        });
    }
    render(){
        const {count} = this.state;
        return (
            <div>
                <button onClick={this.UpdateClick}>clicked {count} times</button>
                <h2>{this.state.message}</h2>
                <button onClick={this.ButtonChange}>{this.state.sub}</button>
                <p/>
                <img style={{width:"20px",height:"20px"}} 
                src={this.state.imageURL} 
                onClick={this.imageChange}
                
                alt=""/>
            </div>
        )
    }
}
