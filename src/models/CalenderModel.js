import React, { useContext, useEffect } from 'react' 
import { Button } from 'react-bootstrap';
import Calendar from 'react-calendar'
import { ClickableContext } from '../components/main';

function CalendarModel({date ,handleDataChange , handleCalendarVis}){
    //setClickable(true) is used to make Background div clickable  
    const setClickable =  useContext(ClickableContext) ;

    useEffect(()=>{
        window.addEventListener('click' , handleClick) ; 

        return ()=>{
            window.removeEventListener('click', handleClick)
        }
    },[])

    var handleClick = ()=>{
        setClickable(true); 
        handleCalendarVis() ;
    }
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