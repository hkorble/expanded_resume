import React from 'react';
import {WhoIAm} from './WhoIAm/WhoIAm.js'
import { WorkExperience } from './WorkExperience/WorkExperience.js';
import { Education } from './Education/Education.js';
import {HunterZone} from './Hunter/Hunter.js';
import './home-page.css'

export default class HomePage extends React.Component{




render(){
    return(
<div className='HomePage'>
    <h1>Hunter Korble Expanded Resume</h1>
<div className='Head'></div>
<div className='WhoIAm'>
<WhoIAm/>

</div>
<div className='Meat'> 
        
<div className='Experience'>

<WorkExperience/>
</div>
<div className='HunterZone'>
<HunterZone/>

</div>
</div>
<div className='Education'>

<Education/>

</div>
</div>

)}}