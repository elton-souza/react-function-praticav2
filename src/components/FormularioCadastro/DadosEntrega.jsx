import { Box, Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
function DadosEntrega({ anterior, aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  const cepUser = (cep) => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        setEndereco(data.logradouro);
        setCidade(data.localidade);
        setEstado(data.uf);
      });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        required
        value={cep}
        onChange={(event) => setCep(event.target.value)}
        onBlur={() => cepUser(cep)}
        id="cep"
        label="CEP"
        name="cep"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        required
        value={endereco}
        id="endereco"
        label="Endereço"
        name="endereco"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        required
        value={numero}
        onChange={(event) => setNumero(event.target.value)}
        id="numero"
        label="Número"
        name="numero"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        required
        value={estado}
        id="estado"
        label="Estado"
        name="estado"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        required
        value={cidade}
        id="cidade"
        label="Cidade"
        name="cidade"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <Box display="flex" justifyContent="space-between" marginTop="20px" > 
        <Button variant="contained" color="primary" onClick={anterior}>
          Voltar
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Finalizar Cadastro
        </Button>
      </Box>
    </form>
  );
}

export default DadosEntrega;
