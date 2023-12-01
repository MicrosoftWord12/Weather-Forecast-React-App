// import { config } from "dotenv";
// config();
import React, { useState } from 'react';
import NavigationBar  from './Components/Navbar/NavigationBar';
import Weather from './Components/Weather/Weather';


function App() {
    const [navList, setNavList] = useState([
        {id: 1, Name: "Home", Endpoint: "/"},
        {id: 2, Name: "About", Endpoint: "/about"},
        {id: 3, Name: "Contact", Endpoint: "/contact"},
    ]);

    return (
        <div>
            <NavigationBar NavigationPropList={navList}/>
            <Weather />
        </div>
    );
}

export default App;
