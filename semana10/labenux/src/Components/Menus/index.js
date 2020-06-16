import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../Imagens/logo.png'



function Menus (props) {
  const history = useHistory()

  const goToLogin = () => {
    history.push('/login')
  }
  return (
    <div className="Header">
        <div className="Logo">
                <img src={Logo} alt={'LabenuX'} />
        </div>
        <div className="Text">
          <p>Encontre as melhores viagens Espaciais!!!</p>
        </div>
                  <div className="BtnLogin">
                        <button onClick={goToLogin}>login</button>
                  </div>

    </div>

  )

}

export default Menus