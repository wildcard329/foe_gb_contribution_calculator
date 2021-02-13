import React from 'react';
import {Link} from 'react-router-dom';

function Dashboard() {
    return(
        <div className='dashboard'>
            <Link to='/form'>Add a building</Link>
            <Link to='/buildings'>View Buildings</Link>
        </div>
    )
}

export default Dashboard;
