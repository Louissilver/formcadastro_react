import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';

class App extends Component {
  render() {

    return (
      <Container
        maxWidth="sm" // Deixa a largura máxima pequena
        component="article" // O tipo de componente renderizado será um <article>
      >
        <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
        <FormularioCadastro onSubmit={aoEnviar} validarCPF={validarCPF} />
      </Container>
    );
  }
}

function aoEnviar(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 dígitos." }
  } else {
    return { valido: true, texto: "" }
  }
}

export default App;
