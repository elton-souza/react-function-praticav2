import React, { useContext, useState } from "react";
import { TextField, Button, Switch, FormControlLabel, Box } from "@material-ui/core";
import validacoesCadastro from "../../context/validacoesCadastro";
import useErros from "../../hooks/useErros"
function DadosPessoais({ aoEnviar, anterior }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const validacao = useContext(validacoesCadastro)
  const [erros, validarCampos,validarEnvio] = useErros(validacao);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(validarEnvio()){
          aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        name="nome"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        name="sobrenome"
        label="Sobrenome"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="CPF"
        label="CPF"
        name="cpf"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            color="primary"
          />
        }
      />
      <Box display="flex" justifyContent="space-between" marginTop="20px" > 
        <Button variant="contained" color="primary" onClick={anterior}>
          Voltar
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Próximo
        </Button>
      </Box>
    </form>
  );
}

export default DadosPessoais;
