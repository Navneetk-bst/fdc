import React, { useContext } from 'react'
import { ClickableContext } from '../components/main';

function PriceModel({handleVisiblity}){
    const setCliclable =  useContext(ClickableContext) ;
    return(

        <div className = "priceModel model">
            Price Information; 
            <div className="close" onClick={()=>{
                    handleVisiblity(false);
                    setCliclable(true);
                }}>Close</div>
        </div>
    )
}

export default PriceModel ;