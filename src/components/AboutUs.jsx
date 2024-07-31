import React from "react";
import { Typography, Button } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import aboutUsImage from "../assets/images/5.jpg";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="py-16 animated-bg">
      {" "}
      {/* Aumentado o padding vertical */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Título */}
          <Typography
            variant="h3" // Mudado para h2 para aumentar ainda mais o tamanho
            className="text-white font-Roboto text-center mb-12" // Aumentado o margin-bottom para 12
            style={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              paddingBottom: "0.5rem",
              fontWeight: "bold",
            }}
          >
            Sobre nós
          </Typography>

          {/* Descrição */}
          <div className="w-full max-w-3xl mb-16 mt-12">
            {" "}
            <Typography
              variant="body1"
              className="text-white mb-4 text-center"
              style={{
                fontSize: "1.25rem", // Aumentado para 1.25rem
                lineHeight: "1.8", // Aumentado para 1.8
                textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                fontWeight: "400",
                letterSpacing: "0.025em", // Adicionado um leve espaçamento entre letras
              }}
            >
              Como é bom poder comprar e ter certeza que você vai receber um
              produto de valor em casa, entregue com toda dedicação e qualidade.
              <br />
              <br />
              Isso é o que você ganha com a Cidrelar estando onde estiver.
              <br />
              <br />
              Mantemos a fidelidade muito especial desde o atendimento
              qualificado, passando na personalização dos ambientes para sua
              casa.
              <br />
              <br />
              Com os móveis, você pode contar com projetos, orçamentos, montagem
              e instalação própria!
              <br />
              <br />
              Com a garantia de uma empresa séria e comprometida com o cliente.
            </Typography>
          </div>

          {/* Imagem */}
          <div className="w-full max-w-xl mb-16">
            {" "}
            {/* Aumentado para max-w-xl e margin-bottom */}
            <img
              src={aboutUsImage}
              alt="Sobre Nós"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Formulário */}
          <div className="w-full max-w-md">
            <div
              className="bg-white p-8 rounded-lg shadow-xl"
              style={{ backgroundColor: "#1E3A8A" }}
            >
              <Typography
                variant="h5"
                className="text-center mb-6 text-white font-bold"
              >
                Deixe seu contato
              </Typography>
              <div className="flex justify-center mb-6">
                <ArrowDownwardIcon style={{ fontSize: 40, color: "white" }} />
              </div>
              <Button
                variant="contained"
                fullWidth
                style={{
                  backgroundColor: "#FF7F50",
                  color: "white",
                  padding: "12px",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  textTransform: "none",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                }}
                onClick={() => {
                  console.log("Redirecionar para o formulário");
                }}
              >
                Preencha o formulário
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
