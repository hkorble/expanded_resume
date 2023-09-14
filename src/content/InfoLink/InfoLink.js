import React from 'react';
import './InfoLink.css'

export class InfoLink extends React.Component{

    constructor(props){
        super(props)
    this.title = this.props.information[0] 
    this.link = this.props.information[1]
    }



render(){
    return(
<div className='OuterBox'>
    <div className='Title'><strong>{this.title}</strong></div>
    <div className='Link'> 
        <a href={this.link} target="_blank" rel="noreferrer">See more </a>
    </div>
</div>

)}}