import React,{useState} from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
function FormularioCadastro() {
    const [nome,setNome] = useState('');
    
    return (

        <form onSubmit={(e)=>{
            e.preventDefault();
            console.log("Enviado do Formulário",nome);
        }}>
            <TextField
                id="nome"
                label="nome"
                variant="outlined"
                margin="normal"
                fullWidth
                value={nome}
                onChange={(e)=>{
                    setNome(e.target.value);
                    if(nome.length >3){
                        setNome(nome.substr(0,3));
                    }
                }}
            />
            <TextField
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                id="cpf"
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth
            />


            <FormControlLabel
                label="Promoções"
                control={
                    <Switch
                        name="promocoes"
                        defaultChecked
                        color="primary" />}
            />

            <FormControlLabel
                label="Novidades"
                control={
                    <Switch
                        name="novidades"
                        defaultChecked
                        color="primary"
                    />}
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
            >
                Cadastrar
            </Button>
        </form>
    )

}

export default FormularioCadastro;