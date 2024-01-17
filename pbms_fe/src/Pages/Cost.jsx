import React from 'react';
import Header from '../Components/Header/Header';

const Cost = ({ toggleSidebar }) => {
    return (
        <div className='Cost'>
            <Header toggleSidebar={toggleSidebar}/>
            Cost
        </div>
    );
};

export default Cost;