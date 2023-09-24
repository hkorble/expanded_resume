import React from 'react';
import './WhoIAm.css'
import { InfoLink } from '../InfoLink/InfoLink';

export class WhoIAm extends React.Component{

constructor(props){
    super(props)
    this.state = {
        information1: [['Leader',"https://www.youtube.com/watch?v=kRjAfbNfFEc"],["Entrepreneur","https://www.youtube.com/watch?v=B4DTqFVmaNI"],['Personal Trainer',"https://www.youtube.com/watch?v=I6l_3RFFxn4"],
            ['Robot Inventor',"https://www.youtube.com/watch?v=cDTFftlg3vs"],["Software Developer","https://www.youtube.com/watch?v=wx_-tK0CTSY"]],
    information2 : [['Salesman',"https://www.youtube.com/watch?v=zNHy-SlZNOw"],["Body Builder","https://www.youtube.com/watch?v=yyGXpNdxAFM"],["Content Creator","https://www.youtube.com/watch?v=ArBxwEQGO1U"],['Writer',"https://www.youtube.com/watch?v=3ADSjnuPbvg"],["Teacher","https://www.youtube.com/watch?v=iSKrWZRpINI"]]
    

    }


}





    render(){
        return(
    <div>
        <h2>Who I am</h2>
    <div className='MainTitles'>
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