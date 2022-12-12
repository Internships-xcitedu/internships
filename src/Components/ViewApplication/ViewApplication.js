import React from 'react';
import logo from '../../Asset/images/logo.png'

import Sidebar from '../Bars/Sidebar';
import ApplicationArea from './ApplicationArea';

const ViewApplication = () => {
    return (
        <>
            navbar
            <div className='flex '>
                <div>
                    sidebar
                </div>
                <div className='p-12 ml-32'>
                    apparea
                </div>
            </div>
        </>
    );
};

export default ViewApplication;