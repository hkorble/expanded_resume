import React from 'react';
import {WhoIAm} from './WhoIAm/WhoIAm.js'
import { WorkExperience } from './WorkExperience/WorkExperience.js';
import { Education } from './Education/Education.js';

export default class HomePage extends React.Component{




render(){
    return(
<div>
    <h1>Hunter Korble Expanded Resume</h1>
<div className='Head'></div>
<div className='WhoIAm'>
<WhoIAm/>

</div>
<div className='Experience'>
<WorkExperience/>

</div>
<div className='Education'>

<Education/>

</div>
</div>

)}}