import React, { useEffect, useRef } from 'react'
import './Nav.css'

function Nav({handleCampaignType}){
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
        </nav>
    )
}

export default Nav ;