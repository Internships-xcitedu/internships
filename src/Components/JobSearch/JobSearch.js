import React from 'react';
import Filters from './Filters';
import Navbar from './Navbar';
import Search from './Search';

const JobSearch = () => {
    
    return (
        <div>
            <Navbar/>
            <Search/>
            <Filters/>
        </div>
    );
};

export default JobSearch;