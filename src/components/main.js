import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import Row from './row'
import {GetTimeDiff} from '../time'
import {db} from '../firebase-config'
import {collection , getDocs} from "firebase/firestore"

import './Main.css'

export const ClickableContext = React.createContext() ; 

function Main(){

    const [clickable , setClickable] = useState(true) ;
    const [campaigns , setCampaigns] = useState([]) ;
    //Upcoming Campaign is Represented by 1 
    //Live Campaign is represented by 0 
    //Past Campaign is represented by -1 
    //Initialy Campaign is set to 1  
    const[campaignType , setCampaignType] = useState(1) ; 

    //This is to check if campaign date is changed 
    const[dataChanged , setDataChanged] = useState(false) ; 

    const campaignsCollectionRef = collection(db , "campaigns") ;
    
    useEffect(()=>{
        const getCampaigns = async() =>{
            const data = await getDocs(campaignsCollectionRef) ; 
            setCampaigns(data.docs.map((doc)=>({...doc.data() , id :doc.id}))) ; 
        }
        getCampaigns() ; 
    } ,[dataChanged])

    return(
        <ClickableContext.Provider value={setClickable}>
            <div className={clickable?"container":"non-clickable-container"}>
                <header >
                   <p>Manage Campaigns</p> 
                </header>
                <Nav handleCampaignType = {setCampaignType}/>
                <table className="main">
                    <thead>
                        <tr>
                            <th className='col'>DATE</th>
                            <th className='col'>CAMPAIGN</th>
                            <th className='col'>VIEW</th>
                            <th className='col'>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        campaigns.map(item=>{
                            if(compareParity(GetTimeDiff(new Date(item.createdOn) , new Date()), campaignType)){
                                return <Row key={item.id} data= {item} dataChanged= {dataChanged} setDataChanged={setDataChanged}></Row>
                            }
                            return null ;
                        })
                    }
                    </tbody>
                </table>
            </div>
        </ClickableContext.Provider>

    
        
    )
}

function compareParity(first , second){
    if(first === 0 && second ===0) return true ; 
    if(first === 0) return false ; 
    if(second === 0) return false ;

    var firstParity = first/Math.abs(first) ; 
    var secondParity = second/Math.abs(second) ; 
    if(firstParity === secondParity) return true ; 
    return false ;
}

export default Main ;