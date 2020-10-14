import React from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({ onSubmitForm, validarCPF }) {
  

  return (
      <>
      <DadosPessoais onSubmitForm={onSubmitForm} validarCPF={validarCPF}/>
      <DadosUsuario/>
      </>
  );
}

export default FormularioCadastro;
