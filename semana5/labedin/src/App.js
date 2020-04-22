import React from 'react';
import foto from './imagens/minha_foto.jpg'
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import { CardPequeno } from './components/CardPequeno/CardPequeno';
import { CardHabilidades } from './components/CardHabilidades/CardHabilidades';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={foto}
          nome="Leonardo Lima"
          descricao="Olá, eu sou Leonardo Lima e sou estudante de desenvolvimento full stack web, pela Labenu_ . Tenho como grande paixão a tecnologia e sou um grande entusiasta de novas tecnologias e defensor da idéia de uma Web para todos,estou aprendendo a gostar na marra de JS  e tenho um crush em HTML e CSS."
        />
        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagemEmail="https://image.flaticon.com/icons/svg/181/181535.svg"
          imagemEndereco="https://image.flaticon.com/icons/svg/181/181508.svg"
          email="leonardolima2008@gmail.com"
          endereco="Rua do Javascript , Number 1 - Bairro: React - Estado: Confuso" />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://scontent-gig2-1.xx.fbcdn.net/v/t1.0-9/p960x960/33221533_1381217215312460_1114780940887916544_o.jpg?_nc_cat=106&_nc_sid=85a577&_nc_eui2=AeE-gkMjzUlMCe7rrKQIJwqju0zSWbyUy8G7TNJZvJTLwYg7_znQ2lUikENd8fhMiNg7ot4PZPSZqqiR024uYpgW&_nc_ohc=B85XyieRhM8AX8fdIYZ&_nc_ht=scontent-gig2-1.xx&_nc_tp=6&oh=d2fdd4d36ca58e1bdfe850923a236dcf&oe=5EBB56D6"
          nome="PDVNET Inteligência em Sistemas"
          descricao="Trabalhava com suporte ao usuário nesta empresa de automação comercial voltada para o mercado de varejo, onde seus principais clientes são: Via Mia, WQ Surf, First Class. Minhas atribuições eram resolver na medida do possível os problemas gerados ao usuários e auxiliar a equipe de desenvolvimento nas soluções para os problemas encontrados no sistema."
        />

        <CardGrande
          imagem="data:image/png;base64,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"
          nome="Solidcon Informática"
          descricao="Trabalhava com suporte ao usuárionesta empresa de automação comercial voltada para o mercado de varejo, porém com foco em redes de supermercado, onde seus principais clientes são: Mercado Princesa, Rede Supermarket ,Rede Economia,Mercado Rio Sul"
        />

        <CardGrande
          imagem="https://ncdn0.infojobs.com.br/logos/2010/07/07/143796.jpg"
          nome="TM Solutions"
          descricao="Trabalhava como técnico de campo nesta empresa que tinha um contrato com a Caixa Econômica Federal. Era responsável por reparar os equipamentos de hardware que eram reportados com problema pelos usuários da Caixa.Cuidava de toda rotina de manutenção dos equipamentos."
        />
      </div>
      <div className="page-section-container">
        <h2>Habilidades</h2>

        <CardHabilidades
          tecnologia="HTML: "
          nivelDeConhecimento=" 9/10"

        />
        <CardHabilidades
          tecnologia="CSS: "
          nivelDeConhecimento=" 8/10"

        />
        <CardHabilidades
          tecnologia="Git: "
          nivelDeConhecimento=" 8/10"

        />
        <CardHabilidades
          tecnologia="Javascript: "
          nivelDeConhecimento=" 5/10"

        />
        <CardHabilidades
          tecnologia="React: "
          nivelDeConhecimento=" 1/10"

        />

      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
