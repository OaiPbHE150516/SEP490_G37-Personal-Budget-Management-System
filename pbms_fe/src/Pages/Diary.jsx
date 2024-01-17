import React from 'react';
import Header from '../Components/Header/Header';

const Diary = ({toggleSidebar}) => {
    return (
        <div className='Diary'>
            <Header toggleSidebar={toggleSidebar}/>
            Diary
        </div>
    );
};

export default Diary;