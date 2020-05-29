import React from 'react';
import styled from 'styled-components'
import {LoginCheck} from '../Requests/Login'

const DivLogin = styled.div`
margin-bottom: 80px;
margin-top: 80px;
max-width: 400px;
margin: auto;
text-align: center;
`
function Login () {

  return (
    <DivLogin>
      <LoginCheck />
    </DivLogin>

    )

}

export default Login