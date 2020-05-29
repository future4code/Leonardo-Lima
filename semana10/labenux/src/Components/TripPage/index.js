import React from 'react';
//Importando as paginas
import  GetTrips  from '../Requests/GetTrips';
import Menus from '../Menus';



function TripPage() {
  return (
    <div className="App">
    <Menus />    
    <GetTrips />
    <div className="Footer-site">
                                  © copyright - Todos os direitos reservados
    </div>
    </div>
    
  );
}

export default TripPage;