import React from "react";
import { Typography, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css"; // Se você estiver usando CSS para estilização

function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4 py-6">
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ color: "black" }}
        >
          {"© 2024 Cidrelar. Todos os direitos reservados."}
        </Typography>
        <div className="icon-container">
          <Link
            href="https://www.instagram.com/cidrelar.morrinhos/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            <InstagramIcon fontSize="large" className="instagram-icon" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
