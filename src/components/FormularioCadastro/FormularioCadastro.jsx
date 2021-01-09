import React from 'react';
import Button from "@material-ui/core/Button"

// Criamos um function component
// Trata-se de uma função que retorna um componente em jsx
// Geralmente function components são stateless components
function FormularioCadastro() {
    return (
        <form action="">
            <label htmlFor="">Nome</label>
            <input
                type="text"
                placeholder="Ex: João"
            />

            <label htmlFor="">Sobrenome</label>
            <input
                type="text"
                placeholder="Ex: Silva"
            />

            <label htmlFor="">CPF</label>
            <input
                type="text"
                placeholder="Ex: 11122233300"
            />

            <label htmlFor="">Promoções</label>
            <input type="checkbox" />

            <label htmlFor="">Novidades</label>
            <input type="checkbox" />

            <Button
                type="submit"
                variant="contained"
                color="primary">
                Cadastrar
            </Button>
        </form>
    )
}

export default FormularioCadastro;