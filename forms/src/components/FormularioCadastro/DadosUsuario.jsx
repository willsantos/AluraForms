/* eslint-disable no-restricted-syntax */
import React, { useState, useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';

function DadosUsuario({ onSubmitForm }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [erros, setErros] = useState({
    senha: {
      valido: true,
      texto: '',
    },
  });
  const validacoes = useContext(ValidacoesCadastro);
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
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if (possoEnviar()) {
        onSubmitForm({ email, senha });
      }
    }}
    >
      <TextField
        id="email"
        name="name"
        label="email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextField
        id="senha"
        name="senha"
        label="senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
        value={senha}
        onChange={(e) => {
          setSenha(e.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
      >
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
