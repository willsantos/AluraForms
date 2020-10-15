import React from 'react';
import { Container, Typography } from '@material-ui/core';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {validarCPF,validarSenha} from './models/cadastro';
import 'fontsource-roboto';

function submitForm(data) {
  console.log(data);
}



function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography
        variant="h3"
        align="center"
        component="h1"
      >
        Formulario de cadastro
      </Typography>
      <FormularioCadastro 
        onSubmitForm={submitForm} 
        validacoes={{cpf:validarCPF,senha:validarSenha}} 
      />

    </Container>

  );
}

export default App;
