import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
function FormularioCadastro(){
    
    return(
          
        <form action="">
            <TextField 
                id="nome" 
                label="nome" 
                variant="outlined"
                fullWidth
            />
            <TextField 
                id="sobrenome" 
                label="Sobrenome" 
                variant="outlined"
                fullWidth
            />
            <TextField 
                id="cpf" 
                label="cpf"
                variant="outlined"
                fullWidth
            />
            

            <label>Promoções</label>
            <input type="checkbox" name="" id=""/>

            <label>Novidades</label>
            <input type="checkbox" name="" id=""/>

            <Button type="submit" variant="contained" color="primary">
                Cadastrar
            </Button>
        </form>
    )
    
}

export default FormularioCadastro;