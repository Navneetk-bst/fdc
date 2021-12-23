import React from 'react'
import './Campaign.css'

function Campaign({name , region , img_url}){
    return (
        <td className="col campaign">
            <table>
                <tbody>
                    <tr className="campaignRow">    
                        <td className='campaignImg' rowSpan= "2"><img src={img_url} /></td>
                        <td className='game-name'><p>{name}</p></td>
                    </tr>
                    <tr className="campaignRow">
                        <td className='region'>{region}</td>
                    </tr>
                </tbody>
            </table>
        </td>
    )
}

export default Campaign ; 