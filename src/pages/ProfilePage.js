// import React, { useState } from "react";
// import {
//   Avatar,
//   Button,
//   Container,
//   Grid,
//   TextField,
//   Typography,
// } from "@mui/material";

// function ProfilePage() {
//   // Dummy user data (replace with actual user data fetched from backend)
//   const [user, setUser] = useState({
//     firstName: "John",
//     lastName: "Doe",
//     email: "john.doe@example.com",
//     profilePicture: "path/to/profile_picture.jpg",
//     // Add more user data as needed
//   });

//   // Dummy pets data (replace with actual pets data fetched from backend)
//   const [pets, setPets] = useState([]);

//   const handleInputChange = (e) => {
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSaveChanges = () => {
//     // Send updated user data to backend
//     console.log("Updated user data:", user);
//   };

//   return (
//     <Container maxWidth="md">
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Typography variant="h3" gutterBottom>
//             User Profile
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <Avatar
//             alt="Profile Picture"
//             src={user.profilePicture}
//             sx={{ width: 200, height: 200 }}
//           />
//         </Grid>
//         <Grid item xs={12} md={8}>
//           <TextField
//             fullWidth
//             label="First Name"
//             name="firstName"
//             value={user.firstName}
//             onChange={handleInputChange}
//             variant="outlined"
//             mb={2}
//           />
//           <TextField
//             fullWidth
//             label="Last Name"
//             name="lastName"
//             value={user.lastName}
//             onChange={handleInputChange}
//             variant="outlined"
//             mb={2}
//           />
//           <TextField
//             fullWidth
//             label="Email"
//             name="email"
//             value={user.email}
//             onChange={handleInputChange}
//             variant="outlined"
//             mb={2}
//           />
//           {/* Add more user details here */}
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleSaveChanges}
//           >
//             Save Changes
//           </Button>
//         </Grid>
//         <Grid item xs={12}>
//           <Typography variant="h4" gutterBottom>
//             Pets I Follow
//           </Typography>
//           {/* Render list of pets user follows */}
//           {pets.map((pet) => (
//             <div key={pet.id}>
//               <Avatar alt={pet.name} src={pet.profilePicture} />
//               <Typography>{pet.name}</Typography>
//               {/* Add more pet details here */}
//             </div>
//           ))}
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default ProfilePage;

// import React, { useState } from "react";
// import { Box, Tab, Tabs, Grid, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox } from "@mui/material";
// import Avatar from "@mui/material/Avatar";

// // import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
// import Divider from "@mui/material/Divider";

// import ListItemAvatar from "@mui/material/ListItemAvatar";

// import FavoriteIcon from "@mui/icons-material/Favorite";
// import PeopleIcon from "@mui/icons-material/People";
// import RecipeIcon from "@mui/icons-material/Receipt";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import KitchenIcon from "@mui/icons-material/Kitchen";
// import NoMealsIcon from "@mui/icons-material/NoMeals";
// import IconButton from "@mui/material/IconButton";
// import EditIcon from "@mui/icons-material/Edit";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import ReviewsIcon from "@mui/icons-material/Reviews";
// import EventIcon from "@mui/icons-material/Event";
// import LogoutIcon from "@mui/icons-material/Logout";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import MenuBookIcon from "@mui/icons-material/MenuBook";
// import LanguageIcon from "@mui/icons-material/Language";
// import SettingsIcon from "@mui/icons-material/Settings";
// import { Link } from "react-router-dom";
// import PersonIcon from "@mui/icons-material/Person";

// function MyAccount() {
//   const user = {
//     name: "John Doe",
//     avatar: "/path/to/avatar.jpg",
//     followers: 1200,
//     following: 560,
//     recipesPrepared: 50,
//     level: 3,
//     nextLevelRecipes: 20,
//     favorites: [
//       { id: 1, title: "Spaghetti Carbonara" },
//       { id: 2, title: "Chicken Tikka Masala" },
//       { id: 3, title: "Vegetable Stir-Fry" },
//     ],
//     ownRecipes: [
//       { id: 4, title: "Chocolate Chip Cookies" },
//       { id: 5, title: "Grilled Salmon with Lemon" },
//     ],
//     reviewedRecipes: [
//       { id: 4, title: "Mango Chips" },
//       { id: 5, title: "Salmon with Lemon" },
//     ],
//     preparedRecipes: [
//       { id: 4, title: "Mango Chips", preparationCount: 5, firstPrepared: "2023-05-15", lastPrepared: "2024-03-20" },
//       { id: 5, title: "Salmon with Lemon", preparationCount: 10, firstPrepared: "2023-07-10", lastPrepared: "2024-04-08" },
//     ],
//     dietaryRestrictions: ["Vegetarian", "Gluten-Free"],
//     kitchenTools: ["Blender", "Oven", "Knife Set", "Mixing Bowls"],
//     mealPlan: [
//       { day: "Monday", recipe: "Spaghetti Carbonara" },
//       { day: "Tuesday", recipe: "Chicken Tikka Masala" },
//       { day: "Wednesday", recipe: "Vegetable Stir-Fry" },
//       { day: "Thursday", recipe: "Grilled Salmon with Lemon" },
//       { day: "Friday", recipe: "Chocolate Chip Cookies" },
//       { day: "Saturday", recipe: "Pizza" },
//       { day: "Sunday", recipe: "Pasta with Mushrooms" },
//     ],
//     socialProfiles: {
//       facebook: "https://www.facebook.com/johndoe",
//       twitter: "https://twitter.com/johndoe",
//       instagram: "https://www.instagram.com/johndoe/",
//     },
//     bio: "Passionate home cook exploring new recipes and flavors. Follow me for tasty inspiration!",
//   };
//   return (
//     <Grid item xs={12} md={12}>
//       {/* <Paper style={{ padding: "1rem", textAlign: "center" }}> */}
//       {/* <Typography variant="h6" color="textSecondary" gutterBottom sx={{ textAlign: "start" }}>
//         PERSONAL
//       </Typography> */}
//       <Box sx={{ textAlign: "center" }}>
//         <Avatar alt={user.name} src={user.avatar} sx={{ width: 150, height: 150, margin: "auto" }} />
//         <Typography variant="h6" gutterBottom sx={{ marginTop: "1rem" }}>
//           {user.name}
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           Followers: {user.followers} | Following: {user.following}
//         </Typography>
//         {/* <Typography variant="h6" gutterBottom>
//     Bio
//   </Typography> */}
//         <Divider sx={{ my: "0.5rem" }} />
//         <Typography sx={{ padding: "1rem", textAlign: "start" }} variant="body1" gutterBottom>
//           {user.bio}
//         </Typography>
//         <Divider sx={{ my: "0.5rem" }} />
// <Paper style={{ padding: "1rem" }}>
//   <Typography variant="h6" gutterBottom>
//     User Statistics
//   </Typography>
//   <Divider sx={{ my: "0.5rem" }} />
//   <Typography variant="body1" gutterBottom>
//     Recipes Prepared: {user.recipesPrepared}
//   </Typography>
//   <Typography variant="body1" gutterBottom>
//     Level: {user.level}
//   </Typography>
//   <Typography variant="body1" gutterBottom>
//     Recipes to Next Level: {user.nextLevelRecipes}
//   </Typography>
// </Paper>
//       </Box>
//       {/* <Typography variant="h6" gutterBottom>
//     Social Networks
//   </Typography> */}
//       <Divider sx={{ my: "0.5rem" }} />
//       <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start", padding: "1rem" }}>
//         <Typography variant="body1" gutterBottom sx={{ paddingTop: "0.4rem", paddingBottom: "0.4rem", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
//           <FacebookIcon sx={{ marginRight: "0.5rem" }} />
//           <Link href={user.socialProfiles.facebook} target="_blank" rel="noopener noreferrer">
//             Facebook
//           </Link>
//         </Typography>

//         <Typography variant="body1" gutterBottom sx={{ paddingTop: "0.4rem", paddingBottom: "0.4rem", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
//           <LanguageIcon sx={{ marginRight: "0.5rem" }} />
//           <Link href={user.socialProfiles.website} target="_blank" rel="noopener noreferrer">
//             Website
//           </Link>
//         </Typography>
//         <Typography variant="body1" gutterBottom sx={{ paddingTop: "0.4rem", paddingBottom: "0.4rem", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
//           <InstagramIcon sx={{ marginRight: "0.5rem" }} />
//           <Link href={user.socialProfiles.instagram} target="_blank" rel="noopener noreferrer">
//             Instagram
//           </Link>
//         </Typography>
//       </Box>
//       <Box>
//         <Button sx={{ display: "flex", justifyContent: "start", marginBottom: "0.8rem" }} variant="outlined" size="small" startIcon={<EditIcon />} component={Link} to="/edit-profile">
//           Edit Profile
//         </Button>
//         <Button sx={{ display: "flex", justifyContent: "start" }} variant="outlined" size="small" startIcon={<SettingsIcon />} component={Link} to="/settings-profile">
//           Profile Settings
//         </Button>
//       </Box>
//       {/* </Paper> */}
//     </Grid>
//   );
// }

// export default MyAccount;
import React, { useState, useContext, useEffect } from 'react';
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Paper,
  FormControlLabel,
  Checkbox,
  Typography,
  Grid,
  TextField,
  Button,
  Divider,
  IconButton,
} from '@mui/material';

import { FormControl, FormGroup, Select, MenuItem } from '@mui/material';
import MuiLink from '@mui/material/Link';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ReviewsIcon from '@mui/icons-material/Reviews';
import InsightsIcon from '@mui/icons-material/Insights';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Switch from '@mui/material/Switch';
import { AuthContext } from '../middleware/AuthContext';

import CloseIcon from '@mui/icons-material/Close';
function ProfilePage() {
  const { user, setUser } = useContext(AuthContext);
  // const [user, setUser] = useState({
  //   firstName: 'John',
  //   lastName: 'Doe',
  //   email: 'john.doe@example.com',
  //   password: '********',
  //   isSeller: true,
  //   businessName: '',
  //   nextLevel: 9,
  //   country: 'Latvia',
  //   language: 'Latvian',
  //   currentLevel: 'Recipe Ninja',
  //   recipesPrepared: 1,
  //   recipesReviewed: 2,
  //   avatar: '/path/to/avatar.jpg',
  //   followers: 1200,
  //   following: 560,
  //   bio: 'Passionate home cook exploring new recipes and flavors. Follow me for tasty inspiration! Follow me for tasty inspiration!',
  //   socialProfiles: {
  //     facebook: 'https://www.facebook.com/johndoe',
  //     instagram: 'https://www.instagram.com/johndoe/',
  //     website: 'https://www.example.com',
  //   },
  // });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setUser({
      ...user,
      isSeller: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit updated user data
    console.log('Updated user data:', user);
  };

  const [openDialog, setOpenDialog] = useState(false);

  const [openPublicInformationDialog, setOpenPublicInformationDialog] = useState(false);
  const [openUserPreferencesDialog, setOpenUserPreferencesDialog] = useState(false);
  const [openUserCredentialsDialog, setOpenUserCredentialsDialog] = useState(false);

  const [inputValue, setInputValue] = useState('');
  const handleDeleteAccount = () => {
    // Implement your logic to delete the account here
    // This could involve making API calls or updating state
    // Once the account is deleted, you may want to redirect the user or show a confirmation message
    console.log('Deleting account...');
    setOpenDialog(false); // Close the dialog after account deletion
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // public info

  const handleSavePublicInformationDialog = () => {
    console.log('Saving account...');
    setOpenPublicInformationDialog(false); // Close the dialog after account deletion
  };

  const handleOpenPublicInformationDialog = () => {
    setOpenPublicInformationDialog(true);
  };

  const handleClosePublicInformationDialog = () => {
    setOpenPublicInformationDialog(false);
  };

  //////////////////
  const handleSaveUserPreferencesDialog = () => {
    console.log('Saving account...');
    setOpenUserPreferencesDialog(false); // Close the dialog after account deletion
  };

  const handleOpenUserPreferencesDialog = () => {
    setOpenUserPreferencesDialog(true);
  };
  const handleCloseUserPreferencesDialog = () => {
    setOpenUserPreferencesDialog(false);
  };

  //////////////////
  const handleSaveUserCredentialsDialog = () => {
    console.log('Saving account...');
    setOpenUserCredentialsDialog(false); // Close the dialog after account deletion
  };

  const handleOpenUserCredentialsDialog = () => {
    setOpenUserCredentialsDialog(true);
  };
  const handleCloseUserCredentialsDialog = () => {
    setOpenUserCredentialsDialog(false);
  };

  return (
    <Grid item xs={12} md={12}>
      <Box sx={{ textAlign: 'center', position: 'relative' }}>
        {/* <IconButton sx={{ position: "absolute", top: 0, right: 0 }} variant="outlined" onClick={handleOpenPublicInformationDialog}>
          <EditIcon />
        </IconButton> */}
        <Box sx={{ position: 'relative' }}>
          <Typography variant="body1" gutterBottom textAlign="start" sx={{ fontWeight: '500' }}>
            User Public Information
          </Typography>
          <IconButton
            sx={{ position: 'absolute', top: 0, right: 0 }}
            variant="outlined"
            onClick={handleOpenPublicInformationDialog}
          >
            <EditIcon />
          </IconButton>
        </Box>

        <Avatar
          alt={`${user?.firstName} ${user?.lastName}`}
          src={user?.avatar}
          sx={{ width: 150, height: 150, margin: 'auto' }}
        />
        <Typography variant="h6" gutterBottom sx={{ marginTop: '1rem' }}>
          {user?.firstName} {user?.lastName}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Followers: {user?.followers} | Following: {user?.following}
        </Typography>
        {/* <Divider sx={{ my: "0.5rem" }} /> */}
        <Typography
          sx={{ paddingTop: '1rem', paddingBottom: '1rem', textAlign: 'start' }}
          variant="body1"
          gutterBottom
        >
          {user?.bio}
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            paddingTop: '0.4rem',
            paddingBottom: '0.4rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
          }}
        >
          <InstagramIcon sx={{ marginRight: '0.5rem' }} />
          <MuiLink
            href={user?.socialProfiles?.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="custom-link" // Apply custom CSS class
            sx={{ textDecoration: 'none', color: 'black' }}
          >
            Instagram
          </MuiLink>
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            paddingTop: '0.4rem',
            paddingBottom: '0.4rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
          }}
        >
          <FacebookIcon sx={{ marginRight: '0.5rem' }} />
          <MuiLink
            href={user?.socialProfiles?.facebook}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: 'none', color: 'black' }}
          >
            Facebook
          </MuiLink>
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            paddingTop: '0.4rem',
            paddingBottom: '0.4rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
          }}
        >
          <LanguageIcon sx={{ marginRight: '0.5rem' }} />
          <MuiLink
            href={user?.socialProfiles?.website}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: 'none', color: 'black' }}
          >
            Website
          </MuiLink>
        </Typography>
        {/* <Typography variant="body1" gutterBottom sx={{ paddingTop: "0.4rem", paddingBottom: "0.4rem", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <FacebookIcon sx={{ marginRight: "0.5rem" }} />
          <Link href={user.socialProfiles.facebook} style={{ textDecoration: "none", color: "black" }} target="_blank" rel="noopener noreferrer">
            Facebook
          </Link>{" "}
          <TextField sx={{ width: "100px" }} size="small" margin="normal" name="lastName" value={user.lastName} onChange={handleChange} />
        </Typography> */}
        {/* <Typography variant="body1" textAlign="start" gutterBottom>
          Insights
        </Typography> */}

        <Grid container spacing={2} sx={{ mt: 1, mb: 5 }} justifyContent="center">
          <Grid item xs={12} md={3}>
            <Paper sx={{ padding: '2rem 0', backgroundColor: '#F0F4F9' }}>
              <MenuBookIcon fontSize="large" sx={{ color: '#ff6600' }} />

              <Typography variant="body1">Recipes prepared: {user?.recipesPrepared}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper sx={{ padding: '2rem 0', backgroundColor: '#F0F4F9' }}>
              <EmojiEventsIcon fontSize="large" sx={{ color: '#ff6600' }} />
              <Typography variant="body1">Level: {user?.currentLevel}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper sx={{ padding: '2rem 0', backgroundColor: '#F0F4F9' }}>
              <InsightsIcon fontSize="large" sx={{ color: '#ff6600' }} />
              <Typography variant="body1">Recipes to Next Level: {user?.nextLevel}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper sx={{ padding: '2rem 0', backgroundColor: '#F0F4F9' }}>
              <ReviewsIcon fontSize="large" sx={{ color: '#ff6600' }} />
              <Typography variant="body1">Reviews: {user?.recipesReviewed}</Typography>
            </Paper>
          </Grid>
        </Grid>
        {/* <Paper style={{ padding: "1rem" }}>
          <Typography variant="h6" gutterBottom>
            User Statistics
          </Typography>
          <Divider sx={{ my: "0.5rem" }} />
          <Typography variant="body1" gutterBottom>
            Recipes Prepared: {user.recipesPrepared}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Level: {user.level}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Recipes to Next Level: {user.nextLevelRecipes}
          </Typography>
        </Paper> */}
        {/* <Button variant="outlined" onClick={handleOpenPublicInformationDialog}>
          Edit
        </Button> */}
        <Dialog open={openPublicInformationDialog} onClose={handleClosePublicInformationDialog}>
          <DialogTitle>Edit Public Information</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              margin="normal"
              label="First Name"
              name="firstName"
              value={user?.username}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Last Name"
              name="lastName"
              value={user?.lastName}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              multiline
              rows="3"
              margin="normal"
              label="Bio"
              name="bio"
              value={user?.bio}
              onChange={handleChange}
            />
            {/* <Typography variant="body1" gutterBottom sx={{ paddingTop: "0.4rem", paddingBottom: "0.4rem", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <FacebookIcon sx={{ marginRight: "0.5rem" }} />
              <Link href={user.socialProfiles.facebook} style={{ textDecoration: "none", color: "black" }} target="_blank" rel="noopener noreferrer"></Link> <TextField sx={{ width: "100px" }} size="small" margin="normal" name="lastName" value={user.lastName} onChange={handleChange} />
            </Typography> */}
            <Box sx={{ mt: 2, display: 'flex', alignItems: 'flex-end' }}>
              <InstagramIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                // label="Instagram Profile"
                onChange={handleChange}
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* You can uncomment this if you want the FacebookIcon inside the input */}
                      {/* <FacebookIcon /> */}
                      https://instagram.com/
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box sx={{ mt: 2, display: 'flex', alignItems: 'flex-end' }}>
              <FacebookIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                // label="Facebook Profile"
                onChange={handleChange}
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* You can uncomment this if you want the FacebookIcon inside the input */}
                      {/* <FacebookIcon /> */}
                      https://facebook.com/
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box sx={{ mt: 2, display: 'flex', alignItems: 'flex-end' }}>
              <LanguageIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                // label="website"
                onChange={handleChange}
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* You can uncomment this if you want the FacebookIcon inside the input */}
                      {/* <FacebookIcon /> */}
                      https://
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClosePublicInformationDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSavePublicInformationDialog} color="error">
              Save
            </Button>
          </DialogActions>
        </Dialog>

        <Grid container spacing={2} justifyContent="start">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box sx={{ position: 'relative' }}>
              <Typography variant="body1" gutterBottom textAlign="start" sx={{ fontWeight: '500' }}>
                User Preferences
              </Typography>
              <IconButton
                sx={{ position: 'absolute', top: 0, right: 0 }}
                variant="outlined"
                onClick={handleOpenUserPreferencesDialog}
              >
                <EditIcon />
              </IconButton>
            </Box>
            <Box sx={{ textAlign: 'start', position: 'relative' }}>
              <FormControl component="fieldset">
                <FormGroup>
                  <FormControlLabel
                    disabled
                    control={<Checkbox checked={false} onChange={() => {}} />}
                    label="Receive notifications"
                  />
                  <FormControlLabel
                    disabled
                    control={<Checkbox checked={false} onChange={() => {}} />}
                    label="Receive newsletters"
                  />
                  <FormControlLabel disabled control={<Switch />} label="Light Theme" />
                </FormGroup>
              </FormControl>
              <Box>
                <TextField
                  disabled
                  fullWidth
                  type="text"
                  margin="normal"
                  label="Language"
                  name="language"
                  value={user?.language}
                  onChange={handleChange}
                />
                <TextField
                  disabled
                  fullWidth
                  type="text"
                  margin="normal"
                  label="Country"
                  name="country"
                  value={user?.country}
                  onChange={handleChange}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', position: 'relative' }}>
          <Dialog open={openUserPreferencesDialog} onClose={handleCloseUserPreferencesDialog}>
            <DialogTitle>Edit User Preferences</DialogTitle>
            <DialogContent>
              <FormControl component="fieldset">
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={false} onChange={() => {}} />}
                    label="Receive notifications"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={false} onChange={() => {}} />}
                    label="Receive newsletters"
                  />
                  <FormControl>
                    <Select value="" onChange={() => {}} displayEmpty>
                      <MenuItem value="" disabled>
                        Preferred Language
                      </MenuItem>
                      <MenuItem value="en">English</MenuItem>
                      <MenuItem value="es">Spanish</MenuItem>
                      {/* Add more languages as needed */}
                    </Select>
                  </FormControl>
                  <FormControl>
                    <Select value="" onChange={() => {}} displayEmpty>
                      <MenuItem value="" disabled>
                        Country
                      </MenuItem>
                      <MenuItem value="us">United States</MenuItem>
                      <MenuItem value="uk">United Kingdom</MenuItem>
                      {/* Add more countries as needed */}
                    </Select>
                  </FormControl>
                </FormGroup>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseUserPreferencesDialog} color="primary">
                Cancel
              </Button>
              <Button onClick={handleSaveUserPreferencesDialog} color="error">
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </Box>

        <Box component="form" onSubmit={handleSubmit}>
          <Box sx={{ position: 'relative' }}>
            <Typography variant="body1" gutterBottom textAlign="start" sx={{ fontWeight: '500' }}>
              User Credentials
            </Typography>
            <IconButton
              sx={{ position: 'absolute', top: 0, right: 0 }}
              variant="outlined"
              onClick={handleOpenUserCredentialsDialog}
            >
              <EditIcon />
            </IconButton>
          </Box>
          {/* <TextField fullWidth margin="normal" label="First Name" name="firstName" value={user.firstName} onChange={handleChange} />
          <TextField fullWidth margin="normal" label="Last Name" name="lastName" value={user.lastName} onChange={handleChange} /> */}
          <TextField
            disabled
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            value={user?.email}
            onChange={handleChange}
          />
          <TextField
            disabled
            fullWidth
            margin="normal"
            type="password"
            label="Password"
            name="password"
            value={user?.password}
            onChange={handleChange}
          />

          {/* <Button type="submit" variant="contained" color="primary" sx={{ marginTop: "1rem" }}>
            Save Changes
          </Button> */}
        </Box>
        <Box sx={{ textAlign: 'center', position: 'relative' }}>
          <Dialog open={openUserCredentialsDialog} onClose={handleCloseUserCredentialsDialog}>
            <DialogTitle>Edit User Credentials</DialogTitle>
            <DialogContent>
              <TextField
                fullWidth
                margin="normal"
                label="Email"
                name="email"
                value={user?.email}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                margin="normal"
                type="password"
                label="Password"
                name="password"
                value={user?.password}
                onChange={handleChange}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseUserCredentialsDialog} color="primary">
                Cancel
              </Button>
              <Button onClick={handleSaveUserCredentialsDialog} color="error">
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
      {/* <FormControlLabel control={<Checkbox checked={user.isSeller} onChange={handleCheckboxChange} />} label="I am a seller" />
      {user.isSeller && <TextField fullWidth margin="normal" label="Business Name" name="businessName" value={user.businessName} onChange={handleChange} />} */}
      {/* <Divider sx={{ my: "0.5rem" }} />
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start", padding: "1rem" }}>
        <Typography variant="body1" gutterBottom sx={{ paddingTop: "0.4rem", paddingBottom: "0.4rem", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <FacebookIcon sx={{ marginRight: "0.5rem" }} />
          <Link href={user.socialProfiles.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </Link>
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ paddingTop: "0.4rem", paddingBottom: "0.4rem", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <LanguageIcon sx={{ marginRight: "0.5rem" }} />
          <Link href={user.socialProfiles.website} target="_blank" rel="noopener noreferrer">
            Website
          </Link>
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ paddingTop: "0.4rem", paddingBottom: "0.4rem", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <InstagramIcon sx={{ marginRight: "0.5rem" }} />
          <Link href={user.socialProfiles.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </Link>
        </Typography>
      </Box> */}

      <Box>
        <div>
          <Typography variant="body1" sx={{ fontWeight: '500' }} gutterBottom>
            Danger Zone
          </Typography>
          <Typography variant="body1" gutterBottom>
            This action cannot be undone. Proceed with caution.
          </Typography>
          <Button variant="contained" color="error" onClick={handleOpenDialog}>
            Delete Account
          </Button>
          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>Are you sure you want to delete your account?</DialogTitle>
            <DialogContent>
              <Typography>
                This action will permanently delete your account and all related data. Proceeding
                with this action cannot be undone.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                Cancel
              </Button>
              <Button onClick={handleDeleteAccount} color="error">
                Delete Account
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        {/* <Button sx={{ display: "flex", justifyContent: "start", marginBottom: "0.8rem" }} variant="outlined" size="small" startIcon={<EditIcon />} component={Link} to="/edit-profile">
          Edit Profile
        </Button>
        <Button sx={{ display: "flex", justifyContent: "start" }} variant="outlined" size="small" startIcon={<SettingsIcon />} component={Link} to="/settings-profile">
          Profile Settings
        </Button> */}
      </Box>
    </Grid>
  );
}

export default ProfilePage;
