import React from 'react'
import {NumberOfDaysDiff} from '../time'

import './CampaignDate.css'

function ConvertDateFormat(ticks){
    //Return Date in format MMM YYYY, dd (oct 2019 , 28)
    var date = new Date(ticks) ; 
    //toDateString Return Date in format (Day Month Date Year)
    var dateStr = date.toDateString().split(' ') ; 
    var result = dateStr[1] + ' ' + dateStr[3] + ',' + dateStr[2] ; 
    return result ; 
    
}
function CampaignDate({ticks}){
    var date = ConvertDateFormat(ticks) ; 

    //Get the number of milliseconds elapsed since January 1, 1970
    var now = new Date() ; 
    var daysDiff = NumberOfDaysDiff(now , new Date(ticks)) ;
    const ahead = "Ahead" ; 
    const ago = "Ago" ;
    var message = ' Days ' + ((ticks >= now )?ahead:ago) ;
    return (
        <td className='col campaignDate'>
            <div>{date}</div>
            <div className='days-diff'>{daysDiff} {message} </div>
        </td>
    )
}

export default CampaignDate ;   