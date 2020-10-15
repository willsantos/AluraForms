import React, { useState, useContext } from 'react';

import {
  Button, TextField, Switch, FormControlLabel,
} from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({ onSubmitForm }) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (

    <form onSubmit={(e) => {
      e.preventDefault();
      if (possoEnviar()) {
        onSubmitForm({

          nome, sobrenome, cpf, novidades, promocoes,
        });
      }
    }}
    >
      <TextField
        id="nome"
        name="nome"
        label="nome"
        variant="outlined"
        margin="normal"
        fullWidth
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <TextField
        id="sobrenome"
        name="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
        value={sobrenome}
        onChange={(e) => {
          setSobrenome(e.target.value);
        }}
      />
      <TextField
        id="cpf"
        name="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        value={cpf}
        onChange={(e) => {
          setCpf(e.target.value);
        }}
        onBlur={validarCampos}
      />

      <FormControlLabel
        label="Promoções"
        control={(
          <Switch
            name="promocoes"
            checked={promocoes}
            color="primary"
            onChange={(e) => {
              setPromocoes(e.target.checked);
            }}
          />
                  )}
      />

      <FormControlLabel
        label="Novidades"
        control={(
          <Switch
            name="novidades"
            checked={novidades}
            color="primary"
            onChange={(e) => {
              setNovidades(e.target.checked);
            }}
          />
                  )}
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

export default DadosPessoais;
