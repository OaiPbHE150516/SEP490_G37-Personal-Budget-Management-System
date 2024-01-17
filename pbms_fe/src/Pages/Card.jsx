import React from 'react';
import Header from '../Components/Header/Header';

const Card = ({toggleSidebar}) => {
    return (
        <div className='Card'>
            <Header toggleSidebar={toggleSidebar}/>
            Card
        </div>
    );
};

export default Card;