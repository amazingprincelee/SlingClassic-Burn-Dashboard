import React from 'react';



const SupplyDisplay = () => {
    return (
        <div className='supply-display'>
            <div className='supply-display-content'>
                <p className='supply-display-text'>Max Supply: 1,000,000,000 </p>
                <p className='supply-display-text'>Total Supply: 643,000,590</p>
                <button className='btn-link'><a href="http://slingclassic.com/">Website</a></button>
                <button className='btn-link'><a href="http://staking.slingclassic.com/">Staking App</a></button>
            </div>
        </div>
    );
};


export default SupplyDisplay;