import React,{ useState,useEffect } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import {Step, StepLabel, Stepper, Typography} from '@material-ui/core';


function FormularioCadastro({ onSubmitForm, validarCPF }) {
  const [etapaAtual,setEtapaAtual] = useState(0);
  const [dadosColetados,setDados] = useState({});
  useEffect(()=>{
    if(etapaAtual === formularios.length -1){
      onSubmitForm(dadosColetados);
    }
  },[dadosColetados]);
  const formularios = [
    <DadosUsuario onSubmitForm={coletarDados}/>,
    <DadosPessoais onSubmitForm={coletarDados} validarCPF={validarCPF}/>,
    <DadosEntrega onSubmitForm={coletarDados}/>,
    <Typography variant='h5'>Obrigado pelo Cadastro!</Typography>
  ];

  function coletarDados(dados){
    setDados({...dadosColetados,...dados});
    proximo();
  }
  function proximo(){
    setEtapaAtual(etapaAtual+1);
  }

  

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
