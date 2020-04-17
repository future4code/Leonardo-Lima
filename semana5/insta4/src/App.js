import React from 'react';
import './App.css';
import fotoPerfil from './img/minha_foto.jpg'
import Post from './components/Post/Post'

class App extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    postagens: [
      {
        idUsuario:1,
        nomeUsuario: "Leonardo",
        fotoUsuario: fotoPerfil,
        postUsuario: "https://i1.wp.com/css-tricks.com/wp-content/uploads/2019/03/circle-of-react-lifecycle.png?ssl=1",
      },
      {
        idUsuario: 2,
        nomeUsuario: "Labenu_",
        fotoUsuario: "https://media-exp1.licdn.com/dms/image/C4D0BAQGHmjoP2xRSmQ/company-logo_200_200/0?e=1594857600&v=beta&t=OgZkrXqOTLdP7mPi56q4l6Ec2parlfIB-r-UfztBCws",
        postUsuario: "https://media-exp1.licdn.com/dms/image/C4D22AQHPrftxDCUabw/feedshare-shrink_1280/0?e=1590019200&v=beta&t=Fz5sfwibhSzHnLh6UyistTo_xYdrGXcAovoISSy8xfc"
      },
      {
        idUsuario: 3,
        nomeUsuario: "Nubank",
        fotoUsuario: "https://media-exp1.licdn.com/dms/image/C4D0BAQHSRoBK10CrMw/company-logo_200_200/0?e=1594857600&v=beta&t=TsFn8ZVQ8Jr3s4Wr6osEp-p1lKYY5-DX80H5n2b8Nz8",
        postUsuario: "https://media-exp1.licdn.com/dms/image/C4E22AQGyuN-PQcVjZQ/feedshare-shrink_1280/0?e=1590019200&v=beta&t=MdcpsyBFQzhOeBKxoO7TTfEliJjCFHU6hf-gyNtwG5w"
      }

    ]
  }

  render() {

    const listaPostagens = this.state.postagens.map((post) => {

      return (
      <div className={'post-container'} key={post.idUsuario}>
              <div className={'post-header'} >
                    <img className={'user-photo'} src={post.fotoUsuario} />
                    <p> {post.nomeUsuario}</p>
              </div>
                  <img className={'post-photo'} src={post.postUsuario} />
                  <Post />
      </div>

      )
    })

    return (
      <div className={"app-container"}>
        {listaPostagens}
      </div>
    )

  }


}


export default App;