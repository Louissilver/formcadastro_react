import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

// Criamos um function component
// Trata-se de uma função que retorna um componente em jsx
// Geralmente function components são stateless components
function FormularioCadastro({ onSubmit, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuario />;
        break;
      case 1:
        return <DadosPessoais onSubmit={onSubmit} validarCPF={validarCPF} />;
        break;
      case 2:
        return <DadosEntrega />;
        break;
      default:
        return <Typography>Erro</Typography>;
    }
  }

  return <>{formularioAtual(etapaAtual)}</>;
}

export default FormularioCadastro;
