import React from 'react';
import Tables from '../components/Tables';

const TopBurners = () => {

    return (
        <div>
            <h1>Top Burners</h1>
            <Tables tableTitle={'Burn Ranking'} tableClass={'data-table-history'} pagination={true} />
        </div>
    );
};


export default TopBurners;