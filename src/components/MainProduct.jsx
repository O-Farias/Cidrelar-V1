import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import productImage from "../assets/images/1.jpg";

function MainProduct({ title, price }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-4xl shadow-lg flex flex-col md:flex-row rounded-lg overflow-hidden">
        <div className="md:w-1/2">
          <img
            src={productImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <CardContent className="h-full flex flex-col justify-between">
            <div>
              <Typography
                variant="h5"
                component="p"
                className="text-center mb-4 font-bold"
              >
                {price}
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                className="text-center mb-4"
              ></Typography>
              <Typography className="text-center text-gray-600">
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Sed do eiusmod tempor ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </Typography>
            </div>
            <div className="flex justify-center mt-6">
              <Button
                variant="contained"
                style={{ backgroundColor: "#25D366", color: "white" }}
                startIcon={<WhatsApp />}
                className="rounded-full"
              >
                Encomendar
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

export default MainProduct;
