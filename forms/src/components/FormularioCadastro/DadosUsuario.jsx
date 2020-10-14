import React from 'react';
import { Button, TextField } from '@material-ui/core';

function DadosUsuario({onSubmitForm}) {
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            onSubmitForm();
        }}>
            <TextField 
                id='email' 
                label='email' 
                type='email'
                required
                variant="outlined"
                margin="normal"
                fullWidth 
            />
            <TextField 
                id='senha' 
                label='senha' 
                type='password'
                required
                variant="outlined"
                margin="normal"
                fullWidth 
            />
            <Button 
                type='submit'
                variant="contained"
                color="primary"
            >
                Cadastrar
            </Button>
        </form>
    )
}

export default DadosUsuario;