import React, { useState, useEffect } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dados, setDados] = useState({});

  useEffect(() => {
    console.log(dados);
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
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais
      aoEnviar={coletarDados}
      validarCPF={validarCPF}
      anterior={anterior}
    />,
    <DadosEntrega aoEnviar={coletarDados} anterior={anterior} />,
  ];

  return <>{formularios[etapaAtual]}</>;
}

export default FormularioCadastro;
