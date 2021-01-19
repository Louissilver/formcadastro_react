import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import { validarCPF, validarSenha, validarNome, validarSobrenome } from './models/cadastro'

class App extends Component {
  render() {

    return (
      <Container
        maxWidth="sm" // Deixa a largura máxima pequena
        component="article" // O tipo de componente renderizado será um <article>
      >
        <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
        <FormularioCadastro onSubmit={aoEnviar} validacoes={{ cpf: validarCPF, senha: validarSenha, nome: validarNome, sobrenome: validarSobrenome }} />
      </Container>
    );
  }
}

function aoEnviar(dados) {
  console.log(dados);
}

export default App;
