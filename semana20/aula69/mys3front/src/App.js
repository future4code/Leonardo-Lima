import React, { useState } from 'react';
import './App.css';

function App() {

  const [link,setLink] = useState(undefined)




  return (
    <div className="App">
     

      <h3>ENVIANDO ARQUIVO PARA O S3</h3>

      <div className='Content'>
        <input type='File'  />
      </div>


      <h3>EXIBIR RESULTADO</h3>

      <div>
        {link && (<img src={link} alt='Imagem' /> ) }
      </div>
    </div>
  );
}

export default App;
