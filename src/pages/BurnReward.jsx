import React from 'react';
import { FaTrophy } from "react-icons/fa";


const BurnReward = () => {
    return (
        <div className='container center'>
            <div className='reward-box'>
                <h3><FaTrophy className='icon' /> Burn Reward</h3>
                <p style={{padding: 10, margin: 10, textAlign: "center"}}>Burn Reward coming soon!   
                <br/> Please check our social media platforms for updates</p>
            </div>
        </div>
    );
};


export default BurnReward;