import React, { useContext, useState } from 'react'
import PriceModel from '../models/PriceModel';
import { ClickableContext } from './main';
import { AiFillDollarCircle } from "react-icons/ai";

import './View.css'

function View(props){
    const [priceModelVis , setPriceModelVis] = useState(false) ; 
    const setClickable =  useContext(ClickableContext) ;
    return (
        <td className="col view">
            <a href ="#" onClick={(event)=>{
                event.preventDefault() ; 
                setPriceModelVis(true);
                setClickable(false);
                }} >  
            <AiFillDollarCircle className='priceIcon icon' color='yellow' size={20}/>View Pricing</a>
            {priceModelVis && <PriceModel handleVisiblity= {setPriceModelVis}/>}
        </td>
    )
}
export default View ; 