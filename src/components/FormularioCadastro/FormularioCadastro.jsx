import React, { useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

// Criamos um function component
// Trata-se de uma função que retorna um componente em jsx
// Geralmente function components são stateless components
function FormularioCadastro({ onSubmit, validarCPF }) {
  return (
    <>
      <DadosPessoais onSubmit={onSubmit} validarCPF={validarCPF} />
      <DadosUsuario />
      <DadosEntrega />
    </>
  );
}

export default FormularioCadastro;
