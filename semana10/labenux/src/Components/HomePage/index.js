import React from 'react';
import Menus from '../Menus';
import { useHistory } from 'react-router-dom';
import FooterPage from '../Footer';




function Home () {

  const history = useHistory()

  const goToTrip = () => {
    history.push('/viagens')
  }

return  (
<div className="App">
  <Menus />
          <div className="Container">
                    <div className="Content-site">
                          <div className="AreaForm">
                            <div className="Form-content">
                                 <h3>Já imaginou você no espaço ?</h3>
                                 <p>Inscreva-se  para uma de nossas viagens. </p>
                                <p>Realize seu sonho de conhecer o espaço e torne-se um mochileiro das galáxias . </p>
                                <h4>inscreva-se em uma de nossas viagens</h4>
                                <button onClick={goToTrip}>ver viagens espaciais</button>                                
                            </div>
                          </div>
                                <FooterPage />
                    </div>


          </div>

  </div>

  )

}

export default Home