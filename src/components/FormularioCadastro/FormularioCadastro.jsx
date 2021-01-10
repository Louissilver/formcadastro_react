import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

// Criamos um function component
// Trata-se de uma função que retorna um componente em jsx
// Geralmente function components são stateless components
function FormularioCadastro({ onSubmit, validarCPF }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({
        cpf: {
            valido: true,
            texto: ""
        }
    });
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            onSubmit({ nome, sobrenome, cpf, promocoes, novidades });
        }}>
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
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
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                placeholder="Ex: Silva"
                fullWidth
                margin="normal"
            />

            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}

                onBlur={(event) => {
                    const ehValido = validarCPF(event.target.value);
                    setErros({ cpf: ehValido })
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf"
                label="CPF"
                variant="outlined"
                placeholder="Ex: 11122233300"
                fullWidth
                margin="normal"
            />

            <FormControlLabel
                label="Promoções"
                control={
                    <Switch
                        checked={promocoes}
                        onChange={(event) => {
                            setPromocoes(event.target.checked)
                        }}
                        name="promocoes"
                        color="primary" />
                }
            />

            {/* FormControlLabel serve para aplicar label a certos elementos */
            /* Switch é um tipo de checkbox estilizado */}
            <FormControlLabel
                label="Novidades"
                control={
                    <Switch
                        checked={novidades}
                        onChange={(event) => {
                            setNovidades(event.target.checked)
                        }}
                        name="novidades"
                        color="primary" />
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