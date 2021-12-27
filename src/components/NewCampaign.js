import React, { useState } from "react";
import ReactDOM from 'react-dom';
import {db} from '../firebase-config'
import {addDoc, collection, updateDoc , } from "firebase/firestore"
import './NewCampaign.css'
function createObj(name ,createdOn ,region , image_url , csv , report , weekPrice , halfYearPrice , oneYearPrice){
    return(
        {
            name : name , 
            createdOn: createdOn,
            region: region ,
            image_url: image_url ,
            csv: csv ,
            report: report ,
            price:{weekPrice:weekPrice , halfYearPrice:halfYearPrice , oneYearPrice:oneYearPrice}
        }
    )
}
function NewCampaign ({onClose , handleDataChanged}){
    const[campaign , setCampaign] = useState("");
    const[date, setDate] = useState(new Date());
    const[region , setRegion] = useState("IN");
    const[img , setImg] = useState("");
    const[csv , setCSV] = useState("");
    const[report, setReport] = useState("");
    const[weekPrice , setWeekPrice] = useState(0);
    const[halfYearPrice , setHalfYearPrice] = useState(0);
    const[oneYearPrice , setOneYearPrice] = useState(0);

    var addCampaign = async()=>{
        const campaignsCollectionRef = collection(db , "campaigns") ;
        var millisec = date.getTime();
        var doc = createObj(campaign , millisec , region , img , csv , report , weekPrice , halfYearPrice , oneYearPrice) ;
        await addDoc(campaignsCollectionRef, doc) ;

        //Refresh the page on Adding new Data 
        handleDataChanged();
        //Close the window after adding new Campaign
        onClose() ;
    }

    return(
        ReactDOM.createPortal(
        <div className="overlay">
            <div className="new-campaign">
                <header>
                    <p>
                        New campaign
                    </p>
                </header>
                <form className="new-campaign-body"> 
                    <div className="form-elem">
                        <label>Campaign</label>
                        <input type="text" value={campaign} onChange={(e)=>setCampaign(e.target.value)}/>
                    </div>
                    <div className="form-elem">
                        <label>Date</label>
                        <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
                    </div>
                    <div className="form-elem">
                        <label>Region</label>
                        <input type="text" value={region} onChange={(e)=>setRegion(e.target.value)}/>
                    </div>
                    <div className="form-elem">
                        <label>Image URL</label>
                        <input type="text" value={img} onChange={(e)=>setImg(e.target.value)}/>
                    </div>
                    <div className="form-elem">
                        <label>CSV</label>
                        <input type="text" value={csv} onChange={(e)=>setCSV(e.target.value)}/>
                    </div>
                    <div className="form-elem">
                        <label>Report</label>
                        <input type="text" value={report} onChange={(e)=>setReport(e.target.value)}/>
                    </div>
                    <h4 className="pricing-header">Pricing</h4>
                    <div>
                        <div className="form-elem">
                            <label>1 Week - 1 Month</label>
                            <input type="number" value={weekPrice} onChange={(e)=>setWeekPrice(e.target.value)}/>
                        </div>
                        <div className="form-elem">
                            <label>6 Months</label>
                            <input type="number" value={halfYearPrice} onChange={(e)=>setHalfYearPrice(e.target.value)}/>
                        </div>
                        <div className="form-elem">
                            <label>1 year</label>
                            <input type="number" value={oneYearPrice} onChange={(e)=>setOneYearPrice(e.target.value)}/>
                        </div>
                    </div>
                </form>
                <div className="footer">
                    <div onClick={addCampaign} className="button">Add</div>
                    <div onClick={onClose} className="button">Close</div>
                </div>
            </div> 
        </div>, document.getElementById('modal-root'))
        
    )
}

export default NewCampaign;