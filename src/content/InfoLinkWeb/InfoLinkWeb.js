import React from 'react';
import './InfoLinkWeb.css'


export class InfoLinkWeb extends React.Component{

    constructor(props){
        super(props)
    this.title = this.props.information[0][0]
    this.position = this.props.information[0][1]
    this.dates = this.props.information[0][2]
    this.link = this.props.information[1]
    this.webLink = this.props.information[2]
    this.webLink ? this.webString = "Website" : this.webString = "No Website"
    this.image = this.props.information[3]
    }



render(){
    return(
<div className='OuterBoxInfo'>
<div className='Image'>
  <img src={this.image} />
</div>
    <div className='Info'><strong>{this.title}</strong><br></br><br></br>{this.position}<br></br><br></br>{this.dates}</div>
    <div className='Link2'> 
        <a href={this.link} target="_blank" alt="No Website">See more</a>
    </div>
 
    <div className='WebLink'> 
        
        <a href={this.webLink} target="_blank">{this.webString}</a>
    </div>
 
</div>

)}}