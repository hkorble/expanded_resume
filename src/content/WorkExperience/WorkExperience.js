import React from 'react';
import './WorkExperience.css'
import { InfoLinkWeb } from '../InfoLinkWeb/InfoLinkWeb';
import korbleFlex from '../../Images/Korble Coaching Flex.png'
import chefRobo from '../../Images/Chef Robo Logo Image.png'
import zealLogo from '../../Images/Zeal Logo.png'
import studentSealingLogo from '../../Images/Student Sealing Logo.png'
import engineeringLogo from '../../Images/Engineering Tutors Logo.png'

export class WorkExperience extends React.Component{

constructor(props){
    super(props)
    this.state = {
        information: [[['Korble Coaching', 'Head Coach', 'November 2022 - Present'],"https://www.youtube.com/watch?v=t6JtjxlKjWU","https://www.korblecoaching.com/",korbleFlex],
        [["Chef Robo Culinary Robotics",'Head Chef','May 2022 - Present'],"https://www.youtube.com/watch?v=soorM_Z8GsI","https://www.chefrobo.tech/",chefRobo],
        [["Zeal Performance","Trainer","June 2022 - Present"],"https://www.youtube.com/watch?v=2Xbg5fshkN8","https://www.zealperformance.ca/",zealLogo],
        [["Student Sealing","Director of Operations", "August 2022 - September 2023"],"https://www.youtube.com/watch?v=samkCRP2OcU","https://www.studentsealing.ca/",studentSealingLogo],
        [["Engineering Tutors","Owner","September 2021 - Present"],"https://www.youtube.com/watch?v=-vc5Q4C2-pQ","https://www.engineeringtutors.ca/",engineeringLogo]
        ]

    }


}




    render(){
        return(
    <div>
        <h2>Work Experience</h2>
        {
        this.state.information.map(infoLinkWeb => 
            <InfoLinkWeb 
                information = {infoLinkWeb}/>
                )
    }
    </div>
    
    )}}