import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

function DadosUsuario({ onSubmitForm }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmitForm({ email, senha });
    }}
    >
      <TextField
        id="email"
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
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
      >
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
