import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "fontsource-roboto";
import { Container, Typography } from "@material-ui/core";
import { validarCPF, validarSenha } from "./models/validacao";
import validacoesCadastro from "./context/validacoesCadastro";
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <validacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha }}> 
          <FormularioCadastro
            aoEnviar={aoEnviarForm}
          />
        </validacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
