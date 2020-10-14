import React from 'react';
import { Typography } from '@material-ui/core';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import { useState } from 'react';



function FormularioCadastro({ onSubmitForm, validarCPF }) {
  const [etapaAtual,setEtapaAtual] = useState(0);

  function proximo(){
    setEtapaAtual(etapaAtual+1);
  }

  function formularioAtual(etapa){
    switch (etapa){
      case 0:
        return <DadosUsuario onSubmitForm={proximo}/>
      case 1:
        return <DadosPessoais onSubmitForm={proximo} validarCPF={validarCPF}/>
      case 2:
        return <DadosEntrega onSubmitForm={onSubmitForm}/>
      default:
        return <Typography>Erro</Typography>
    }
  }

  return (
      <>
        {formularioAtual(etapaAtual)}
      </>
  );
}

export default FormularioCadastro;
