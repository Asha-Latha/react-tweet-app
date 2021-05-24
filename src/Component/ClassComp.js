import React from 'react'

class ClassComp extends React.Component{
    render(){
        return <p>This is a Class Component using default export</p>
    }
}
export class ClassComp1 extends React.Component{
    render(){
        return <p>This is named export  Class Component</p>
    }
}

export default ClassComp;
