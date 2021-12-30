import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
function DadosEntrega({ anterior, aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  const cepUser = (cep) => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
      setEndereco(data.logradouro);
      setCidade(data.localidade);
      setEstado(data.uf)
    })
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        value={cep}
        onChange={(event)=> setCep(event.target.value)}
        onBlur={() => cepUser(cep)}
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={endereco}
        id="endereco"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={numero}
        onChange={(event) => setNumero(event.target.value)}
        id="numero"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={estado}
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={cidade}
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={anterior}>
        Voltar
      </Button>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
