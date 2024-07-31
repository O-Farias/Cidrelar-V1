import React from "react";
import { Button, Card, CardContent, Typography, Grid } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import productImage from "../assets/images/1.jpg";
import product2Image from "../assets/images/2.jpg";
import product3Image from "../assets/images/3.jpg";
import product4Image from "../assets/images/4.jpg";

function MainProduct({ title, price }) {
  const additionalProducts = [
    { image: product2Image, description: "Produto 2", price: "R$ 99,99" },
    { image: product3Image, description: "Produto 3", price: "R$ 99,99" },
    { image: product4Image, description: "Produto 4", price: "R$ 99,99" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100  p-4 pt-20">
      <Card className="w-full max-w-4xl shadow-lg flex flex-col md:flex-row rounded-lg overflow-hidden">
        <div className="md:w-1/2 overflow-hidden">
          <img
            src={productImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-between">
          <CardContent className="flex-grow flex flex-col justify-between p-8">
            <Typography
              variant="h5"
              component="p"
              className="text-center mb-4 font-bold"
            >
              {price}
            </Typography>
            <Typography
              variant="body1"
              className="text-center text-gray-600 mb-6"
              style={{ marginBottom: "1.5rem" }} // Adiciona espaçamento
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <div className="flex justify-center mt-6">
              <Button
                variant="contained"
                style={{ backgroundColor: "#25D366", color: "white" }}
                startIcon={<WhatsApp />}
                className="rounded-full w-3/4 mx-auto transition-colors duration-300 hover:bg-green-900"
                size="medium"
              >
                Encomendar
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>

      <div className="w-full max-w-4xl my-8">
        <Typography
          variant="h5"
          component="h2"
          className="font-bold text-center text-gray-800"
          style={{
            fontFamily: "Roboto, sans-serif",

            paddingBottom: "0.5rem",
            marginTop: "3rem",
            marginBottom: "2rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          Você também pode gostar:
        </Typography>
      </div>
      <Grid container spacing={6} className="max-w-6xl">
        {additionalProducts.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="h-full flex flex-col transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.description}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div>
                  <Typography
                    variant="h6"
                    className="text-center font-bold mb-2"
                  >
                    {product.description}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className="text-center text-green-600 font-bold mb-2"
                  >
                    {product.price}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-center text-gray-600 mb-4"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </div>
                <div className="mt-auto pt-4">
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#25D366", color: "white" }}
                    startIcon={<WhatsApp />}
                    className="rounded-full w-full transition-colors duration-300 hover:bg-green-900"
                    size="large"
                  >
                    Encomendar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default MainProduct;
