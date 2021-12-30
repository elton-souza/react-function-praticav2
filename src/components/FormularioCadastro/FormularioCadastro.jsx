import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar, validacao }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dados, setDados] = useState({});

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dados);
    }
  });

  const proximo = () => {
    setEtapaAtual(etapaAtual + 1);
  };
  const anterior = () => {
    setEtapaAtual(etapaAtual - 1);
  };
  const coletarDados = (novosDados) => {
    setDados({ ...dados, ...novosDados });
    proximo();
  };
  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} validacao={validacao} />,
    <DadosPessoais
      aoEnviar={coletarDados}
      validacao={validacao}
      anterior={anterior}
    />,
    <DadosEntrega
      aoEnviar={coletarDados}
      anterior={anterior}
      validacao={validacao}
    />,
    <Typography variant="h5" align="center" >Obrigado pelo cadastro!</Typography>,
  ];

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
