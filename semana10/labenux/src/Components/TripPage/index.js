import React from 'react';
//Importando as paginas
import  GetTrips  from '../Requests/GetTrips';
import Menus from '../Menus';
import FooterPage from '../Footer';



function TripPage() {
  return (
    <div className="App">
    <Menus />    
    <GetTrips />
    <FooterPage /> 
    </div>
    
  );
}

export default TripPage;