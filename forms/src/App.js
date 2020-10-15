import React from 'react';
import { Container, Typography } from '@material-ui/core';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { validarCPF, validarSenha } from './models/cadastro';
import 'fontsource-roboto';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

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
      <ValidacoesCadastro.Provider
        value={{ cpf: validarCPF, senha: validarSenha }}
      >
        <FormularioCadastro
          onSubmitForm={submitForm}
        />

      </ValidacoesCadastro.Provider>

    </Container>

  );
}

export default App;
