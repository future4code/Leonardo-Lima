import React from 'react';
import './App.css';
import fotoPerfil from "./img/minha_foto.jpg";
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={"Leonardo"}
          fotoUsuario={fotoPerfil}
          fotoPost={"https://picsum.photos/200/150?a2"}
        />
        <Post
          nomeUsuario={"Labenu_"}
          fotoUsuario={
            "https://media-exp1.licdn.com/dms/image/C4D0BAQGHmjoP2xRSmQ/company-logo_200_200/0?e=1594857600&v=beta&t=OgZkrXqOTLdP7mPi56q4l6Ec2parlfIB-r-UfztBCws"
          }
          fotoPost={
            "https://media-exp1.licdn.com/dms/image/C4D22AQHPrftxDCUabw/feedshare-shrink_1280/0?e=1590019200&v=beta&t=Fz5sfwibhSzHnLh6UyistTo_xYdrGXcAovoISSy8xfc"
          }
        />
        <Post
          nomeUsuario={"NuBank"}
          fotoUsuario={
            "https://media-exp1.licdn.com/dms/image/C4D0BAQHSRoBK10CrMw/company-logo_200_200/0?e=1594857600&v=beta&t=TsFn8ZVQ8Jr3s4Wr6osEp-p1lKYY5-DX80H5n2b8Nz8"
          }
          fotoPost={
            "https://media-exp1.licdn.com/dms/image/C4E22AQGyuN-PQcVjZQ/feedshare-shrink_1280/0?e=1590019200&v=beta&t=MdcpsyBFQzhOeBKxoO7TTfEliJjCFHU6hf-gyNtwG5w"
          }
        />
      </div>
    );
  }
}

export default App;
