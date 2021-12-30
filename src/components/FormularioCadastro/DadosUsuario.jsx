import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import validacoesCadastro from "../../context/validacoesCadastro";

function DadosUsuario({ aoEnviar}) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({ senha: { valido: true, texto: "" } });
  const validacao = useContext(validacoesCadastro)
  const validarCampo = (event) => {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacao[name](value);
    setErros(novoEstado);
  };

  const validarEnvio = () => {
    for(let campo in erros){
      if(!erros[campo].valido){
        return false
      }
    }
    return true
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(validarEnvio()){
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        id="email"
        label="email"
        type="email"
        name="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={senha}
        onChange={(event) => setSenha(event.target.value)}
        onBlur={validarCampo}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        label="senha"
        name="senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
