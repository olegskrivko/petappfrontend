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
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ReviewsIcon from '@mui/icons-material/Reviews';
import InsightsIcon from '@mui/icons-material/Insights';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Switch from '@mui/material/Switch';
import { AuthContext } from '../middleware/AuthContext';
import PetsIcon from '@mui/icons-material/Pets';
import CloseIcon from '@mui/icons-material/Close';
import TryIcon from '@mui/icons-material/Try';
import WorkIcon from '@mui/icons-material/Work';
import AvatarImg from '../images/beaver.avif';
import { BASE_URL } from '../middleware/config';

function ProfileSettingsPage() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const [openPublicInformationDialog, setOpenPublicInformationDialog] = useState(false);
  const [openUserPreferencesDialog, setOpenUserPreferencesDialog] = useState(false);
  const [openUserCredentialsDialog, setOpenUserCredentialsDialog] = useState(false);

  // State for input values
  const [formData, setFormData] = useState({
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    bio: user.bio || '',

    language: user.language || '',
    country: user.country || '',
    phone: user.phone || '',
    phoneCode: user.phoneCode || '',

    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };
  console.log('userxxxxxxx', user.id);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${BASE_URL}/users/${user.id}`, {
        method: 'PUT',

        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to update user data');
      }

      const updatedUserData = await response.json();
      setUser(updatedUserData); // Assuming your backend returns updated user data
      console.log('Updated user data:', updatedUserData);

      // Close dialogs after successful update if needed
      handleClosePublicInformationDialog();
      handleCloseUserPreferencesDialog();
      handleCloseUserCredentialsDialog();
    } catch (error) {
      console.error('Error updating user data:', error.message);
      // Handle error gracefully, e.g., show error message to the user
    }
  };
  const [openDialog, setOpenDialog] = useState(false);

  const [inputValue, setInputValue] = useState('');

  const handleDeleteAccount = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${BASE_URL}/auth/delete`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to delete user account');
      }
      const deletedMessage = await response.json();
      console.log('Account deleted:', deletedMessage);
      setUser(null); // Clear user data after deletion
      navigate('/'); // Navigate to the home page after successful deletion
    } catch (error) {
      console.error('Error deleting account:', error.message);
      // Handle error gracefully
    }
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
          src={AvatarImg}
          sx={{ width: 150, height: 150, margin: 'auto', border: '2px solid lightgray' }}
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

        <Grid container spacing={2} sx={{ mt: 1, mb: 5 }} justifyContent="center">
          <Grid item xs={12} md={3}>
            <Link to="/user/profile/posts" style={{ textDecoration: 'none' }}>
              <Paper sx={{ padding: '2rem 0', backgroundColor: '#F0F4F9' }}>
                <TryIcon fontSize="large" sx={{ color: '#ff6600' }} />

                <Typography variant="body1">Posts {user?.recipesPrepared}</Typography>
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Link to="/user/profile/services" style={{ textDecoration: 'none' }}>
              <Paper sx={{ padding: '2rem 0', backgroundColor: '#F0F4F9' }}>
                <WorkIcon fontSize="large" sx={{ color: '#ff6600' }} />
                <Typography variant="body1">Services {user?.currentLevel}</Typography>
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Link to="/user/profile/pets" style={{ textDecoration: 'none' }}>
              <Paper sx={{ padding: '2rem 0', backgroundColor: '#F0F4F9' }}>
                <PetsIcon fontSize="large" sx={{ color: '#ff6600' }} />

                <Typography variant="body1">Pets {user?.nextLevel}</Typography>
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Link to="/user/profile/settings" style={{ textDecoration: 'none' }}>
              <Paper sx={{ padding: '2rem 0', backgroundColor: '#F0F4F9' }}>
                <SettingsIcon fontSize="large" sx={{ color: '#ff6600' }} />
                <Typography variant="body1">Settings {user?.recipesReviewed}</Typography>
              </Paper>
            </Link>
          </Grid>
        </Grid>

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
                <TextField
                  disabled
                  fullWidth
                  type="text"
                  margin="normal"
                  label="Code"
                  name="code"
                  value={user?.country}
                  onChange={handleChange}
                />
                <TextField
                  disabled
                  fullWidth
                  type="text"
                  margin="normal"
                  label="Phone"
                  name="phone"
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
                  <FormControl fullWidth>
                    <InputLabel id="language-select-label">Preferred Language</InputLabel>
                    <Select
                      labelId="language-select-label"
                      id="language-select"
                      value={formData.language}
                      label="Preferred Language"
                      name="language"
                      onChange={handleChange}
                    >
                      <MenuItem value="">Select Language</MenuItem>
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
                  <FormControl>
                    <Select value="" onChange={() => {}} displayEmpty>
                      <MenuItem value="" disabled>
                        Code
                      </MenuItem>
                      <MenuItem value="+371">+371</MenuItem>
                      <MenuItem value="+372">+372</MenuItem>
                      {/* Add more languages as needed */}
                    </Select>
                  </FormControl>
                </FormGroup>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClosePublicInformationDialog} color="primary">
                Cancel
              </Button>
              <Button onClick={handleSubmit} color="primary">
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

          <TextField
            disabled
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <TextField
            disabled
            fullWidth
            margin="normal"
            type="password"
            label="Password"
            name="password"
            value={user.password}
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
                value={user.email}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                margin="normal"
                type="password"
                label="Password"
                name="password"
                value={user.password}
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
              <Button onClick={handleDeleteAccount} variant="contained" color="error">
                Delete
              </Button>
              <Button onClick={() => setOpenDialog(false)} color="primary">
                Cancel
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

export default ProfileSettingsPage;
