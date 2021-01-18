import { Button, TextField } from "@material-ui/core";
import React from "react";

function DadosUsuario({aoEnviar}) {
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      aoEnviar();
    }}>
      <TextField
        id="email"
        label="Email"
        type="email"
        required
        variant="outlined"
        placeholder="Ex: Silva"
        fullWidth
        margin="normal"
      />
      <TextField
        id="senha"
        label="Senha"
        type="password"
        required
        variant="outlined"
        placeholder="Ex: Silva"
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
