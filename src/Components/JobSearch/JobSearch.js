import React from 'react';
import CompanyDetails from './CompanyDetails';
import Filters from './Filters';
import Navbar from './Navbar';
import Search from './Search';

const JobSearch = () => {
    
    return (
        <div>
            <Navbar/>
            <Search/>
            <Filters/>
            <CompanyDetails/>
        </div>
    );
};

export default JobSearch;