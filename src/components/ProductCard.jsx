import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

function ProductCard({ image, title, description, price }) {
  return (
    <Card className="m-4 max-w-sm">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardContent>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography color="textSecondary">{description}</Typography>
        <Typography variant="h5">{price}</Typography>
        <Button variant="contained" color="primary" className="mt-4">
          Encomendar
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
