import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '400px',


    },
  },
}));


const DivLogin = styled.div`
margin-bottom: 80px;
margin-top: 80px;
max-width: 400px;
margin: auto;
text-align: center;
`
function Login () {
  const history = useHistory()

  const classes = useStyles();

  const goToPainel = () => {
    history.push('/painel')
  }

  return (
    <DivLogin>
      <h4>LOGIN</h4>
      <p>Por favor informe seu e-mail e sua senha</p>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="email" label="E-mail" variant="outlined" value="" />
        <TextField id="password" label="Senha" variant="outlined" value="" />
      </form>
      <button onClick={goToPainel}>ENTRAR</button>
    </DivLogin>

    )

}

export default Login