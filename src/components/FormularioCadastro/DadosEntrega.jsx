import { Button, TextField } from "@material-ui/core";
import React from "react";

function DadosEntrega() {
  return (
    <form>
      <TextField
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        placeholder="Ex: Silva"
        margin="normal"
      />
      <TextField
        id="endereco"
        label="Endereço"
        type="text"
        variant="outlined"
        placeholder="Ex: Silva"
        fullWidth
        margin="normal"
      />
      <TextField
        id="numero"
        label="Número"
        type="number"
        variant="outlined"
        placeholder="Ex: Silva"
        margin="normal"
      />
      <TextField
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        placeholder="Ex: Silva"
        margin="normal"
      />
      <TextField
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        placeholder="Ex: Silva"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
