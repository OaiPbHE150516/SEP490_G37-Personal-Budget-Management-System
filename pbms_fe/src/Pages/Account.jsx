import React from 'react';
import Header from '../Components/Header/Header';

const Account = ({ toggleSidebar }) => {
    return (
        <div className='Account'>
            <Header toggleSidebar={toggleSidebar}/>
            Account
        </div>
    );
};

export default Account;