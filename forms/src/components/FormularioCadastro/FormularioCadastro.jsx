import React from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({ onSubmitForm, validarCPF }) {
  

  return (
      <>
      <DadosPessoais onSubmitForm={onSubmitForm} validarCPF={validarCPF}/>
      <DadosUsuario/>
      <DadosEntrega/>
      </>
  );
}

export default FormularioCadastro;
