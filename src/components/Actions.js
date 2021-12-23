import React, { useState , useContext } from 'react'
import CalendarModel from '../models/CalenderModel'
import {updateDoc ,doc} from 'firebase/firestore'
import {db} from '../firebase-config'
import { ClickableContext } from '../components/main';
import { AiFillFile} from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";
import {FaCalendarAlt } from "react-icons/fa"
import './Actions.css'

function Actions({data, dataChanged ,setDataChanged}){
    //setClickable(false) is used to make Background div non clickable  
    const setClickable =  useContext(ClickableContext) ;
    const[calenderVis , setCalenderVis] = useState(false) ; 
    var handleDataChange = async (date)=>{
        const campaign = doc(db , 'campaigns' , data.id ) ;
        const newField = {createdOn : date.getTime()}; 
        await updateDoc(campaign ,newField) ;
        setDataChanged(!dataChanged) ;
        setCalenderVis(false);
    }
    return (
        <td className="col actions">
            <ul>
                <li><AiFillFile className='icon' size={20} color='lightgreen'/><a href={data.csv}>CSV</a></li>
                <li><IoStatsChart className='icon' size={20} color='orange'/><a href={data.report}>Report</a></li>
                <li>
                    <FaCalendarAlt className='icon' size={20} color='lightblue'/>
                    <button onClick={()=>{
                        setClickable(false);
                        setCalenderVis(!calenderVis);
                        }} className='schedule'>Schedule Again</button>
                    {calenderVis&&<CalendarModel date ={new Date(data.createdOn)} handleDataChange = {handleDataChange} />}
                </li>
            </ul>
        </td>
    )
}

export default Actions ; 