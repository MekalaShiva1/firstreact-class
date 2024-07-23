





import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homescreen from '../screens/Homescreen'
import Contactscreen from '../screens/Contactscreen'
import Aboutscreen from '../screens/Aboutscreen'
import Settingscreen from '../screens/Settingscreen'

export function Stack() {
    return ( 
        <BrowserRouter>
        <Routes>
         <Route  path='/' Component={Homescreen}/> 
         <Route path='/Contact' Component={Contactscreen}/> 
         <Route path='/About' Component={Aboutscreen}/> 
         <Route path='/Setting' Component={Settingscreen} />

        </Routes>
        
        </BrowserRouter>

        
    )
}

// export default Stack;
