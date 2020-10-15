/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

import { useState } from 'react';

function criarEstadoInicial(validacoes) {
  const estadoInicial = {};
  for (const campo in validacoes) {
    estadoInicial[campo] = { valido: true, texto: '' };
  }
  return estadoInicial;
}

function useErros(validacoes) {
  const estadoInicial = criarEstadoInicial(validacoes);

  const [erros, setErros] = useState(estadoInicial);

  function validarCampos(e) {
    const { name, value } = e.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar() {
    for (const campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }

  return [erros, validarCampos, possoEnviar];
}

export default useErros;
