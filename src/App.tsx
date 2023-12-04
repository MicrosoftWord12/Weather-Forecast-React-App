import React, { useState } from 'react';
import NavigationBar  from './Components/Navbar/NavigationBar';
import Weather from './Components/Weather/Weather';
import Alert from './Components/Alert/Alert';


function App() {
    const [navList, setNavList] = useState([
        {id: 1, Name: "Home", Endpoint: "/"},
        {id: 2, Name: "About", Endpoint: "/about"},
        {id: 3, Name: "Contact", Endpoint: "/contact"},
    ]);


    const [alertStatus, setAlertStatus] = useState(false);



    return (
        <div>
            <NavigationBar NavigationPropList={navList}/>
            <Alert hidden={alertStatus} />
            <Weather setAlert={setAlertStatus}/>
        </div>
    );
}

export default App;
