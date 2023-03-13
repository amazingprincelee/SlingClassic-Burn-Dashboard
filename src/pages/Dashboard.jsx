import React from 'react';
import DisplayBoxes from '../components/DisplayBoxes';
import Tables from '../components/Tables';
import { HashLink as Link } from 'react-router-hash-link';
import SupplyDisplay from '../components/SupplyDisplay';

// import '../pages/BurnHistory'





const Dashboard = () => {

    return (
        <div className='dashboard-main'>
            <h1>Burn & Supply</h1>
            <DisplayBoxes />
            <SupplyDisplay />
            <Tables 
                tableTitle="Latest History"
            />
            <Link to="../BurnHistory" className='view-all-btn'>View All</Link>
            <Tables 
                tableTitle="Burn Ranking"
                
     
            />
            <Link to="../TopBurners" className='view-all-btn'>View All</Link>

        
            
        </div>

        
    );
};

export default Dashboard;