import React from 'react';
import { Container, Typography } from '@material-ui/core';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import 'fontsource-roboto';

function submitForm(data) {
  console.log(data);
}

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: 'Cpf invalido' };
  }
  return { valido: true, texto: '' };
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
      <FormularioCadastro onSubmitForm={submitForm} validarCPF={validarCPF} />

    </Container>

  );
}

export default App;
