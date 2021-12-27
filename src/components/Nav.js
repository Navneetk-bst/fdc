import React, { useEffect, useRef, useState } from 'react'
import './Nav.css'
import NewCampaign from './NewCampaign';

function Nav({handleCampaignType , handleDataChanged}){
    const [openNewCampaignForm , setOpenNewCampaignForm] = useState(false) ;
    const upcomingCampaignRef  = useRef(null) ;
    const link = 'link' ; 
    const clickedLink = "clicked-link" ;
    useEffect(()=>{
        upcomingCampaignRef.current.classList.add( clickedLink);
    },[])

    var handleClick = (e , val)=>{
        e.preventDefault() ; 
        handleCampaignType(val) ;

        //Change the classList of links 
        var links = document.getElementsByClassName(link) ;
        console.log(links); 
        for(var i = 0; i <links.length ; ++i){
            links[i].classList.remove(clickedLink) ;
        }
        e.target.classList.add(clickedLink);
    }
    return(
        <nav className="navBar">
            <a href="#" onClick={(e)=>{handleClick(e,1)}}className='link' ref={upcomingCampaignRef}>Upcoming Campaings</a>
            <a href="#" onClick={(e)=>{handleClick(e,0)}} className='link' >Live Campaigns</a>
            <a href="#" onClick={(e)=>{handleClick(e,-1)}} className='link' >Past Campaings</a>
            <button className='add-campaign' onClick={()=>setOpenNewCampaignForm(true)}>+</button>
            {openNewCampaignForm&& <NewCampaign handleDataChanged={handleDataChanged} onClose={()=>{setOpenNewCampaignForm(false)}}></NewCampaign>}
        </nav>
    )
}

export default Nav ;