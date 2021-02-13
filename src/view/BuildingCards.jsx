import React from 'react'
import {useSelector} from 'react-redux';

import {selectBuildings} from '../model/state/selector.js';
import BuildingCard from './BuildingCard.jsx';

function BuildingCards() {
    const buildings = useSelector(selectBuildings);

    return(
        <div className='deck'>
            {buildings && buildings.map(building => {
                return <BuildingCard key={building.id} building={building} />
            })}
        </div>
    )
}

export default BuildingCards;
