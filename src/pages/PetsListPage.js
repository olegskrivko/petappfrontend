import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Sidebar from "../components/sidebar/Siderbar"; // Create Sidebar component
//import MapPlaceholder from "../components/map/MapPlaceholder"; // Create MapPlaceholder component
import PetCard from "../components/petcard/PetCard"; // Create PetCard component
import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
} from "@mui/material";
import { BASE_URL } from "../middleware/config";
import TomTomClusterMap from "../components/map/TomTomClusterMap";

const PetsListPage = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/pets`);
        setPets(response.data);
      } catch (error) {
        console.error("Error fetching pets:", error.message);
        setError("Error fetching pets");
      } finally {
        setLoading(false);
      }
    };
    fetchPets();
  }, []);

  // Hardcoded data for pet cards

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Grid container spacing={3}>
      {/* Sidebar */}
      <Grid item xs={3}>
        <Sidebar />
      </Grid>

      {/* Map Placeholder */}
      <Grid item xs={9}>
        <TomTomClusterMap />
        {/* Pet Cards */}
        <Grid item xs={12} style={{ marginTop: "2rem" }}>
          <Grid container spacing={3}>
            {pets.length === 0 && loading && (
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <CircularProgress />
              </Grid>
            )}
            {pets.map((pet) => (
              <Grid item xs={12} sm={6} md={4} key={pet._id}>
                <PetCard pet={pet} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PetsListPage;
