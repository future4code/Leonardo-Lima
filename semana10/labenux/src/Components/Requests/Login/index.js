import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-lima"


export const  LoginCheck = () => {

const history = useHistory()

const [email , setEmail] = useState("")
const [password, setPassword] = useState("")

const verificaLogin = async () => {

  const body = {
    email : email,
    password : password
   }

   try {
     const result = await axios.post (`${baseUrl}/login`, body)
     localStorage.setItem('token',  result.data.token)
     history.push('/painel')

   }
   catch (erro) {
        alert("Usuário não encontrado!")
   }

}

return (
  <div>
    <input
      value={email}
      placeholder="E-mail"
      onChange={e => setEmail(e.target.value)}
      type="email"
    />
    <input
      value={password}
      placeholder="Senha"
      onChange={e => setPassword(e.target.value)}
      type="password"
    />
    <button onClick={verificaLogin}>Login</button>
  </div>
)

}

export default LoginCheck