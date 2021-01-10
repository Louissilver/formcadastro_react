import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

// Criamos um function component
// Trata-se de uma função que retorna um componente em jsx
// Geralmente function components são stateless components
function FormularioCadastro() {
    return (
        <form action="">
            <TextField
                id="nome" 
                label="Nome" /* Gera um label para o campo */
                variant="outlined" /* Muda a forma do input para uma com linhas ao redor */
                placeholder="Ex: João"
                fullWidth /* Permite o componente ocupar todo o espaço do elemento pai */
                margin="normal" /* Gera uma margem normal e mantém o tamanho do componente
                margin="dense" gera uma margem normal mas diminui o espaçamento do componente */
            />

            <TextField
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                placeholder="Ex: Silva"
                fullWidth
                margin="normal"
            />

            <TextField
                id="cpf"
                label="CPF"
                variant="outlined"
                placeholder="Ex: 11122233300"
                fullWidth
                margin="normal"
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