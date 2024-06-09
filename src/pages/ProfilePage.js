import React, { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

function ProfilePage() {
  // Dummy user data (replace with actual user data fetched from backend)
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    profilePicture: "path/to/profile_picture.jpg",
    // Add more user data as needed
  });

  // Dummy pets data (replace with actual pets data fetched from backend)
  const [pets, setPets] = useState([]);

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveChanges = () => {
    // Send updated user data to backend
    console.log("Updated user data:", user);
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>
            User Profile
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Avatar
            alt="Profile Picture"
            src={user.profilePicture}
            sx={{ width: 200, height: 200 }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={user.firstName}
            onChange={handleInputChange}
            variant="outlined"
            mb={2}
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={user.lastName}
            onChange={handleInputChange}
            variant="outlined"
            mb={2}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            variant="outlined"
            mb={2}
          />
          {/* Add more user details here */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveChanges}
          >
            Save Changes
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Pets I Follow
          </Typography>
          {/* Render list of pets user follows */}
          {pets.map((pet) => (
            <div key={pet.id}>
              <Avatar alt={pet.name} src={pet.profilePicture} />
              <Typography>{pet.name}</Typography>
              {/* Add more pet details here */}
            </div>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProfilePage;
