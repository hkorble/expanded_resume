import React from 'react';
import './Education.css'
import { InfoLink } from '../InfoLink/InfoLink';
import { InfoLinkWeb } from '../InfoLinkWeb/InfoLinkWeb';
import westernLogo from '../../Images/Western Logo.png'
import TRULogo from '../../Images/TRU Logo.png';
import TETLogo from '../../Images/TET Logo.png';
import WCSLogo from '../../Images/WCS Logo.png';
import WQCLogo from '../../Images/WQC Logo.png';

export class Education extends React.Component{

constructor(props){
    super(props)
    this.state = {
        information: [[['Mechatronics Systems Engineering', '90.35% Average', 'September 2021 - Present'],"https://www.youtube.com/watch?v=_thQ_DiYakM","https://www.eng.uwo.ca/img/undergraduate/FINAL_mechatronic_2018.pdf",westernLogo],
        [["Artificial Intelligence Systems Engineering",'90.35% Average','September 2021 - Present'],"https://www.youtube.com/watch?v=D0gAHbtGDdI","https://www.eng.uwo.ca/electrical//undergraduate/Programs/artificial-intelligence-systems-engineering.html",westernLogo],
        [["Biology / Life Sciences","Grades not yet determined","May 2023 - Present"],"https://www.youtube.com/watch?v=8Yt1T8epZZ0","https://www.tru.ca/distance/programs/bachelor-of-science-major-program.html",TRULogo]],
        information1: [["Dean's Honours List","https://drive.google.com/file/d/1RrvW6MR3HqSZSlv0tXFVE5xiiY1bYghI/view?usp=sharing"],["Personal Trainer Certification","https://drive.google.com/file/d/1b3zI-00i47wlV0LH0Ga3AnjOLll0NFfU/view?usp=sharing"],['C++ for Programmers',"https://drive.google.com/file/d/145I8mdEV1dAiTl-B4e00ftu58iJYy2f-/view?usp=sharing"],['CPR and AED',"https://drive.google.com/file/d/16fPZ_QCfnYE20abcMM8ctZgsvU0urqKx/view?usp=sharing"],
['Cryptography 1',"https://drive.google.com/file/d/1ZaXWpW77XsXQScgaVMTSCukkMtYV_aHI/view?usp=sharing"],["JavaScript Websites","https://drive.google.com/file/d/186n7EtnvADP_JMKVSKIvkg3t_tR0GLRo/view?usp=sharing"],
["Learn Command Line","https://drive.google.com/file/d/1-dcOEubdHsZMsr8a2N4pkuUh3XFSryiR/view?usp=sharing"],["Learn Git and GitHub","https://drive.google.com/file/d/1M0VODHCipFjYRGsGaKotmKQLoY1qJevU/view?usp=sharing"],["Learn HTML","https://drive.google.com/file/d/1Eju0eFLbMwkcWGSXmn_m2co06IjPyLf_/view?usp=sharing"]],
    information2 : [["Resident of the Year","https://docs.google.com/document/d/1Skl2lEWNMKYvVtqCmlHa2Kf_KPfU9Cu7gns5vUz4xg8/edit?usp=sharing"],['Learn JavaScript',"https://drive.google.com/file/d/1VnFjXxdI5RVDub2-CNFSIJeZp2xL_JGw/view?usp=sharing"],["Learning How to Learn","https://drive.google.com/file/d/1Dss1O01RbzF0DeRoViD7-GuhOCqzqzYC/view?usp=sharing"],["Modern Physics I","https://drive.google.com/file/d/1lc1FGnZmx2oFDEbGVqgxNOrBXe3gyJSH/view?usp=sharing"],
    ['Neurobiology of Everyday Life',"https://drive.google.com/file/d/1g92ZRYKisHqaEUVgEOMBScUiG7umdffA/view?usp=sharing"],["Oil and Gas Industry Operations and Markets","https://drive.google.com/file/d/1Fq38MldK-kTGiz2-GbS_FS7gqxyrc6T6/view?usp=sharing"],
    ["Chimpanzee Behavior","https://drive.google.com/file/d/1qIz1a5ozmRo3ycvuUd1_pk_JYJtlF4gE/view?usp=sharing"],["SOLIDWORKS Design","https://drive.google.com/file/d/1EZ09VORnBmWph7dozMN4XO4D7b-n5ohM/view?usp=sharing"],["Soph of the Year","https://docs.google.com/document/d/17d1BGOWzD-_z6X2myCOTXA7tsxHmLyQWMcW8Ai3zn1M/edit?usp=sharing"]],
    information3 : [[['Western Quantum Club', 'VP of Research and Technology', 'October 2022 - Present'],"https://www.youtube.com/watch?v=k_FAQ4cD1dg","https://wequantum.wixsite.com/western-quantum-club/projects-research",WQCLogo],
    [['Soph (Orientation Leader)', 'Medsyd Soph of the Year 2023', 'August 2022 - May 2023'],"https://www.youtube.com/watch?v=8UyTnV9O85o","https://www.oweek.ca/sophs/",westernLogo],
    [['Western Cyber Society', 'Director of Cryptography', 'November 2022 - Present'],"https://www.youtube.com/watch?v=onXdo_sO78k","https://www.westerncybersociety.com/",WCSLogo],
    [["Trinity Engineering Team","Mechatronics Team","January 2023 - Present"],"https://www.youtube.com/watch?v=F8Lza-9n324","",TETLogo]]
    
    

    }


}





    render(){
        return(
    <div className='Education'>
    <div className='Formal Education'><h2>Formal Eduation</h2>
            
    <div>
        
        {
        this.state.information.map(infoLinkWeb => 
            <InfoLinkWeb 
                information = {infoLinkWeb}/>
                )
    }
    </div>
    <div className='Extracurricular'> <h2>Extracurriculars</h2>
    
    
    <div>
            {
        
        this.state.information3.map(infoLink => 
            <InfoLinkWeb
                information = {infoLink}/>
                )
    }
    
    
    </div>
    </div>
    </div>
    <h2>Other Education, Awards, and Distinctions</h2>
    <div className='Main'>
        <div className='Child'>
            {
        
        this.state.information1.map(infoLink => 
            <InfoLink 
                information = {infoLink}/>
                )
    }
    </div>
    <div className='Child'>
            {
        
        this.state.information2.map(infoLink => 
            <InfoLink 
                information = {infoLink}/>
                )
    }
    </div>

    </div>
    </div>
    )}}