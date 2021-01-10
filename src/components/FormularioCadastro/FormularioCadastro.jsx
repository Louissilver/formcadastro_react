import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

// Criamos um function component
// Trata-se de uma função que retorna um componente em jsx
// Geralmente function components são stateless components
function FormularioCadastro() {
    const [nome, setNome] = useState("Luís");
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            console.log(nome);
        }}>
            <TextField
            value={nome}
            onChange={(event) => {
                setNome(event.target.value);
                if(nome.length >= 3){
                    setNome(nome.substring(0, 3))
                }
            }}
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

            <FormControlLabel
                label="Promoções"
                control={<Switch name="promocoes" defaultChecked color="primary" />}
            />

            <FormControlLabel /* FormControlLabel serve para aplicar label a certos elementos */
                label="Novidades"
                control={
                    <Switch /* Switch é um tipo de checkbox estilizado */
                        name="novidades"
                        defaultChecked
                        color="primary"
                    />
                }
            />

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