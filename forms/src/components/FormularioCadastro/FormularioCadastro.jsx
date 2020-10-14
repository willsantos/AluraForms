import React from 'react';
import { Typography } from '@material-ui/core';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import { useState } from 'react';



function FormularioCadastro({ onSubmitForm, validarCPF }) {
  const [etapaAtual,setEtapaAtual] = useState(0);
  const formularios = [
    <DadosUsuario onSubmitForm={proximo}/>,
    <DadosPessoais onSubmitForm={proximo} validarCPF={validarCPF}/>,
    <DadosEntrega onSubmitForm={onSubmitForm}/>
  ];

  function proximo(){
    setEtapaAtual(etapaAtual+1);
  }

  

  return (
      <>
        {formularios[etapaAtual]}
      </>
  );
}

export default FormularioCadastro;
