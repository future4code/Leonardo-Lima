(this.webpackJsonpinsta4=this.webpackJsonpinsta4||[]).push([[0],[,,,,,,,,function(t,e,a){t.exports=a.p+"static/media/minha_foto.9a175bb5.jpg"},function(t,e,a){t.exports=a.p+"static/media/logo_facebook.9ee9a727.jpg"},function(t,e,a){t.exports=a.p+"static/media/logo_twitter.57a96947.jpg"},function(t,e,a){t.exports=a.p+"static/media/logo_instagram.f1a62cd3.jpg"},function(t,e,a){t.exports=a.p+"static/media/comment_icon.de299b47.svg"},function(t,e,a){t.exports=a.p+"static/media/favorite-white.042aa417.svg"},function(t,e,a){t.exports=a.p+"static/media/favorite.4c67d875.svg"},function(t,e,a){t.exports=a.p+"static/media/turned_in-24px.159d12ca.svg"},function(t,e,a){t.exports=a.p+"static/media/turned_in_not-24px.937e8db7.svg"},function(t,e,a){t.exports=a.p+"static/media/share-24px.148b91be.svg"},function(t,e,a){t.exports=a(30)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var o=a(0),n=a.n(o),r=a(7),i=a.n(r),c=(a(23),a(1)),s=a(2),m=a(4),l=a(3),u=a(5),p=(a(24),a(8)),h=a.n(p),d=(a(25),a(26),function(t){function e(){var t,a;Object(c.a)(this,e);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(m.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(n)))).state={valorComentario:""},a.onChangeComentario=function(t){a.setState({valorComentario:t.target.value})},a}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"comment-container"},n.a.createElement("input",{className:"input-comentario",placeholder:"Coment\xe1rio",value:this.state.valorComentario,onChange:this.onChangeComentario}),n.a.createElement("button",{onClick:this.props.aoEnviar},"Enviar"))}}]),e}(o.Component)),v=(a(27),a(9)),f=a.n(v),C=a(10),g=a.n(C),E=a(11),b=a.n(E),k=function(t){function e(){var t,a;Object(c.a)(this,e);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(m.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(n)))).state={valorShare:"",logo:[{id:1,nome:"Facebook",imagem:f.a},{id:2,nome:"Instagram",imagem:b.a},{id:3,nome:"Twitter",imagem:g.a}]},a.onChangeCompartilhar=function(t){a.setState({valorShare:t.target.value})},a.aoEnviarCompartilhamento=function(){},a}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this,e=this.state.logo.map((function(e){return n.a.createElement("span",{className:"user-logo",key:e.id,onClick:t.aoEnviarCompartilhamento=function(){console.log("Post compartilhado no",e.nome,"com a mensagem: ",t.state.valorShare)}},n.a.createElement("img",{src:e.imagem,alt:"logo"}))}));return n.a.createElement("div",{className:"share-container"},n.a.createElement("h3",null,"Compartilhar"),n.a.createElement("input",{className:"input-share",placeholder:"Escreva a mensagem",value:this.state.valorShare,onChange:this.onChangeCompartilhar}),e)}}]),e}(o.Component),S=a(12),j=a.n(S);a(28);function y(t){return n.a.createElement("div",{className:"icon-container"},n.a.createElement("img",{alt:"Icone",src:t.icone,onClick:t.onClickIcone}),n.a.createElement("p",null,t.valorContador))}a(29);function O(t){return n.a.createElement("div",{className:"icon-container"},n.a.createElement("img",{alt:"Icone",src:t.icone,onClick:t.onClickIcone}))}var w=a(13),x=a.n(w),U=a(14),N=a.n(U),_=a(15),I=a.n(_),A=a(16),B=a.n(A),Q=a(17),P=a.n(Q),F=function(t){function e(){var t,a;Object(c.a)(this,e);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(m.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(n)))).state={curtido:!1,numeroCurtidas:0,comentando:!1,numeroComentarios:0,postSalvo:!1,share:!1},a.onClickCurtida=function(){a.state.curtido?a.setState({curtido:!1,numeroCurtidas:a.state.numeroCurtidas-1}):a.setState({curtido:!0,numeroCurtidas:a.state.numeroCurtidas+1})},a.onClickComentario=function(){a.setState({comentando:!a.state.comentando})},a.aoEnviarComentario=function(){a.setState({comentando:!1,numeroComentarios:a.state.numeroComentarios+1})},a.onClickSalvar=function(){a.state.postSalvo?a.setState({postSalvo:!1}):a.setState({postSalvo:!0})},a.aoEnviarCompartilhamento=function(){console.log("Post compartilhado no com a  mensagem: "),a.setState({postShare:!1})},a.onClickShare=function(){a.setState({share:!a.state.share})},a}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t,e,a,o;return t=this.state.curtido?N.a:x.a,this.state.comentando&&(e=n.a.createElement(d,{aoEnviar:this.aoEnviarComentario})),a=this.state.postSalvo?I.a:B.a,this.state.share&&(o=n.a.createElement(k,{aoEnviar:this.aoEnviarCompartilhamento})),n.a.createElement("div",null,n.a.createElement("div",{className:"post-footer"},n.a.createElement(y,{icone:t,onClickIcone:this.onClickCurtida,valorContador:this.state.numeroCurtidas}),n.a.createElement(y,{icone:j.a,onClickIcone:this.onClickComentario,valorContador:this.state.numeroComentarios}),n.a.createElement(O,{icone:a,onClickIcone:this.onClickSalvar}),n.a.createElement(O,{icone:P.a,onClickIcone:this.onClickShare})),o,e)}}]),e}(n.a.Component),H=function(t){function e(){var t,a;Object(c.a)(this,e);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(m.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(n)))).state={curtido:!1,numeroCurtidas:0,comentando:!1,numeroComentarios:0,postagens:[{idUsuario:1,nomeUsuario:"Leonardo",fotoUsuario:h.a,postUsuario:"https://i1.wp.com/css-tricks.com/wp-content/uploads/2019/03/circle-of-react-lifecycle.png?ssl=1"},{idUsuario:2,nomeUsuario:"Labenu_",fotoUsuario:"https://media-exp1.licdn.com/dms/image/C4D0BAQGHmjoP2xRSmQ/company-logo_200_200/0?e=1594857600&v=beta&t=OgZkrXqOTLdP7mPi56q4l6Ec2parlfIB-r-UfztBCws",postUsuario:"https://media-exp1.licdn.com/dms/image/C4D22AQHPrftxDCUabw/feedshare-shrink_1280/0?e=1590019200&v=beta&t=Fz5sfwibhSzHnLh6UyistTo_xYdrGXcAovoISSy8xfc"},{idUsuario:3,nomeUsuario:"Nubank",fotoUsuario:"https://media-exp1.licdn.com/dms/image/C4D0BAQHSRoBK10CrMw/company-logo_200_200/0?e=1594857600&v=beta&t=TsFn8ZVQ8Jr3s4Wr6osEp-p1lKYY5-DX80H5n2b8Nz8",postUsuario:"https://media-exp1.licdn.com/dms/image/C4E22AQGyuN-PQcVjZQ/feedshare-shrink_1280/0?e=1590019200&v=beta&t=MdcpsyBFQzhOeBKxoO7TTfEliJjCFHU6hf-gyNtwG5w"}]},a}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.state.postagens.map((function(t){return n.a.createElement("div",{className:"post-container",key:t.idUsuario},n.a.createElement("div",{className:"post-header"},n.a.createElement("img",{className:"user-photo",src:t.fotoUsuario,alt:"Foto usuario"}),n.a.createElement("p",null," ",t.nomeUsuario)),n.a.createElement("img",{className:"post-photo",src:t.postUsuario,alt:"Imagem da postagem"}),n.a.createElement(F,null))}));return n.a.createElement("div",{className:"app-container"},t)}}]),e}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[18,1,2]]]);
//# sourceMappingURL=main.ed8db4f3.chunk.js.map