import React, { useContext } from 'react' 
import Calendar from 'react-calendar'
import { ClickableContext } from '../components/main';

function CalendarModel({date ,handleDataChange}){
    //setClickable(true) is used to make Background div clickable  
    const setClickable =  useContext(ClickableContext) ;
    return(
        <div className="calendarModel model">
            <Calendar value={date} onChange={(date)=>{
                handleDataChange(date);
                setClickable(true);
                }}/>
        </div>
    )
}

export default CalendarModel ;