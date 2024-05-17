import { Outlet } from 'react-router-dom';
import {Home} from '.'
import React from 'react';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

function Main(){
    return (
        <>
            <Outlet />
        </>
    )
}

export default Main;