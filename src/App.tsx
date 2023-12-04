import React, { useState } from 'react';
import NavigationBar  from './Components/Navbar/NavigationBar';
import Weather from './Components/Weather/Weather';
import Alert from './Components/Alert/Alert';


function App() {
    const navigationList = [
        {id: 1, Name: "Home", Endpoint: "/"},
        {id: 2, Name: "About", Endpoint: "/about"},
        {id: 3, Name: "Contact", Endpoint: "/contact"},
    ]


    const [alertStatus, setAlertStatus] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>("");

    return (
        <div>
            <NavigationBar NavigationPropList={navigationList}/>
            <Alert isShowing={alertStatus!} message={alertMessage} />
            <Weather setAlert={setAlertStatus} setAlertMessage={setAlertMessage} />
        </div>
    );
}

export default App;
