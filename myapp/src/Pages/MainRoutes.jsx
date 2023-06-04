import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Homepage from './Homepage';
import Edit from './../Components/Edit';


const MainRoutes = () => {
   
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="single/:id" element={<Edit />} />
        </Routes>
    );

}

export default MainRoutes