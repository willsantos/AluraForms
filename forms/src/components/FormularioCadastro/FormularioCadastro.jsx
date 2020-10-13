import { render } from '@testing-library/react';
import React, { Component } from 'react';

function FormularioCadastro(){
    
    return(
          
        <form action="">
            <label >Nome</label>
            <input type="text" name="" id=""/>

            <label >Sobrenome</label>
            <input type="text" name="" id=""/>

            <label >CPF</label>
            <input type="text" name="" id=""/>

            <label>Promoções</label>
            <input type="checkbox" name="" id=""/>

            <label>Novidades</label>
            <input type="checkbox" name="" id=""/>

            <button type="submit">Cadastrar</button>
        </form>
    )
    
}

export default FormularioCadastro;