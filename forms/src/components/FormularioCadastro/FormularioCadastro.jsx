import React, { useState, useEffect } from 'react';
import {
  Step, StepLabel, Stepper, Typography,
} from '@material-ui/core';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({ onSubmitForm, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximo();
  }
  const formularios = [
    <DadosUsuario onSubmitForm={coletarDados} />,
    <DadosPessoais onSubmitForm={coletarDados} validarCPF={validarCPF} />,
    <DadosEntrega onSubmitForm={coletarDados} />,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>,
  ];

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      onSubmitForm(dadosColetados);
    }
  }, [dadosColetados]);

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Dados Pessoais</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
