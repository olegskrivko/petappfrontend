import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";

// Import MUI Icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
// src="https://placehold.co/600x400"
const PetCard = ({ pet }) => {
  return (
    <Card>
      <Link
        to={`/pets/${pet._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardMedia component="img" src={pet.petImage} alt="" />
      </Link>
      <CardActions
        disableSpacing
        style={{ justifyContent: "start", padding: "8px" }}
      >
        <Box
          style={{ display: "flex", alignItems: "center", color: "#343a40" }}
        >
          <LocationOnIcon fontSize="small" />
          <Typography variant="body2" style={{ marginLeft: "4px" }}>
            13.42 km
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
};

export default PetCard;
