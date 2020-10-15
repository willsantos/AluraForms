import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

function DadosEntrega({ onSubmitForm }) {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmitForm({
        cep, endereco, numero, estado, cidade,
      });
    }}
    >
      <TextField
        id="cep"
        name="cep"
        label="cep"
        type="number"
        variant="outlined"
        margin="normal"
        fullWidth
        value={cep}
        onChange={(e) => {
          setCep(e.target.value);
        }}
      />
      <TextField
        id="endereco"
        name="endereco"
        label="endereco"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        value={endereco}
        onChange={(e) => {
          setEndereco(e.target.value);
        }}
      />
      <TextField
        id="numero"
        name="numero"
        label="numero"
        type="number"
        variant="outlined"
        margin="normal"
        value={numero}
        onChange={(e) => {
          setNumero(e.target.value);
        }}
      />
      <TextField
        id="estado"
        name="estado"
        label="estado"
        type="text"
        variant="outlined"
        margin="normal"
        value={estado}
        onChange={(e) => {
          setEstado(e.target.value);
        }}
      />
      <TextField
        id="cidade"
        name="cidade"
        label="cidade"
        type="text"
        variant="outlined"
        margin="normal"
        value={cidade}
        onChange={(e) => {
          setCidade(e.target.value);
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
