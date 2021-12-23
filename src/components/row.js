import React from 'react'
import Actions from './Actions'
import Campaign from './Campaign'
import CampaignDate from './CampaignDate';
import View from './View'

function Row({data , dataChanged , setDataChanged}){ 
    return (
        <tr className='row'>
            <CampaignDate ticks = {data.createdOn} />
            <Campaign name={data.name} region ={data.region} img_url = {data.img_url}/>
            <View price={data.price} />
            <Actions data={data} dataChanged={dataChanged} setDataChanged={setDataChanged} />
        </tr>
    )
}

export default Row ;