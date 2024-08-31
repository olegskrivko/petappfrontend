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
  console.log('user', user);
  console.log('user.id', user.id);
  console.log('user._id:', user._id);
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

  // Fetch user data from the backend on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch(`${BASE_URL}/users/${user.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const fetchedUserData = await response.json();
        setFormData({
          firstName: fetchedUserData.firstName || '',
          lastName: fetchedUserData.lastName || '',
          bio: fetchedUserData.bio || '',
          language: fetchedUserData.language || '',
          country: fetchedUserData.country || '',
          phone: fetchedUserData.phone || '',
          phoneCode: fetchedUserData.phoneCode || '',
        });
        setUser(fetchedUserData); // Update the context with the fetched user data
        console.log('fetchedUserData', fetchedUserData);
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchUserData();
  }, [user.id, setUser]);

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
      setUser(updatedUserData); // Update the context with the new user data
      console.log('Updated user data:', updatedUserData);

      // Close dialogs after successful update
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

  if (!user) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <>
      <Grid item xs={12} md={12}>
        <Box sx={{ textAlign: 'center', position: 'relative' }}>
          <Grid container spacing={2} justifyContent="start">
            <Grid item xs={12}>
              <Box sx={{ position: 'relative' }}>
                <Typography
                  variant="body1"
                  gutterBottom
                  textAlign="start"
                  sx={{ fontWeight: '500' }}
                >
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
                <Box>
                  <TextField
                    fullWidth
                    type="text"
                    margin="normal"
                    label="Language"
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                  />
                  <TextField
                    fullWidth
                    type="text"
                    margin="normal"
                    label="Country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                  <TextField
                    fullWidth
                    type="text"
                    margin="normal"
                    label="Phone Code"
                    name="phoneCode"
                    value={formData.phoneCode}
                    onChange={handleChange}
                  />
                  <TextField
                    fullWidth
                    type="text"
                    margin="normal"
                    label="Phone"
                    name="phone"
                    value={formData.phone}
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
                <FormControl fullWidth margin="normal">
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
                    <MenuItem value="de">German (Austria)</MenuItem>
                    <MenuItem value="nl">Dutch (Belgium)</MenuItem>
                    <MenuItem value="bg">Bulgarian (Bulgaria)</MenuItem>
                    <MenuItem value="hr">Croatian (Croatia)</MenuItem>
                    <MenuItem value="el">Greek (Cyprus)</MenuItem>
                    <MenuItem value="cs">Czech (Czech Republic)</MenuItem>
                    <MenuItem value="da">Danish (Denmark)</MenuItem>
                    <MenuItem value="et">Estonian (Estonia)</MenuItem>
                    <MenuItem value="fi">Finnish (Finland)</MenuItem>
                    <MenuItem value="fr">French (France)</MenuItem>
                    <MenuItem value="de">German (Germany)</MenuItem>
                    <MenuItem value="el">Greek (Greece)</MenuItem>
                    <MenuItem value="hu">Hungarian (Hungary)</MenuItem>
                    <MenuItem value="ga">Irish (Ireland)</MenuItem>
                    <MenuItem value="it">Italian (Italy)</MenuItem>
                    <MenuItem value="lt">Lithuanian (Lithuania)</MenuItem>
                    <MenuItem value="lb">Luxembourgish (Luxembourg)</MenuItem>
                    <MenuItem value="lv">Latvian (Latvia)</MenuItem>
                    <MenuItem value="mt">Maltese (Malta)</MenuItem>
                    <MenuItem value="nl">Dutch (Netherlands)</MenuItem>
                    <MenuItem value="pl">Polish (Poland)</MenuItem>
                    <MenuItem value="pt">Portuguese (Portugal)</MenuItem>
                    <MenuItem value="ro">Romanian (Romania)</MenuItem>
                    <MenuItem value="sk">Slovak (Slovakia)</MenuItem>
                    <MenuItem value="sl">Slovene (Slovenia)</MenuItem>
                    <MenuItem value="es">Spanish (Spain)</MenuItem>
                    <MenuItem value="sv">Swedish (Sweden)</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth margin="normal">
                  <InputLabel id="country-select-label">Country</InputLabel>
                  <Select
                    labelId="country-select-label"
                    id="country-select"
                    value={formData.country}
                    label="Country"
                    name="country"
                    onChange={handleChange}
                  >
                    <MenuItem value="">Select Country</MenuItem>
                    <MenuItem value="at">Austria</MenuItem>
                    <MenuItem value="be">Belgium</MenuItem>
                    <MenuItem value="bg">Bulgaria</MenuItem>
                    <MenuItem value="hr">Croatia</MenuItem>
                    <MenuItem value="cy">Cyprus</MenuItem>
                    <MenuItem value="cz">Czech Republic</MenuItem>
                    <MenuItem value="dk">Denmark</MenuItem>
                    <MenuItem value="ee">Estonia</MenuItem>
                    <MenuItem value="fi">Finland</MenuItem>
                    <MenuItem value="fr">France</MenuItem>
                    <MenuItem value="de">Germany</MenuItem>
                    <MenuItem value="gr">Greece</MenuItem>
                    <MenuItem value="hu">Hungary</MenuItem>
                    <MenuItem value="ie">Ireland</MenuItem>
                    <MenuItem value="it">Italy</MenuItem>
                    <MenuItem value="lt">Lithuania</MenuItem>
                    <MenuItem value="lu">Luxembourg</MenuItem>
                    <MenuItem value="lv">Latvia</MenuItem>
                    <MenuItem value="mt">Malta</MenuItem>
                    <MenuItem value="nl">Netherlands</MenuItem>
                    <MenuItem value="pl">Poland</MenuItem>
                    <MenuItem value="pt">Portugal</MenuItem>
                    <MenuItem value="ro">Romania</MenuItem>
                    <MenuItem value="sk">Slovakia</MenuItem>
                    <MenuItem value="si">Slovenia</MenuItem>
                    <MenuItem value="es">Spain</MenuItem>
                    <MenuItem value="se">Sweden</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth margin="normal">
                  <InputLabel id="phone-code-select-label">Phone Code</InputLabel>
                  <Select
                    labelId="phone-code-select-label"
                    id="phone-code-select"
                    value={formData.phoneCode}
                    label="Phone Code"
                    name="phoneCode"
                    onChange={handleChange}
                  >
                    <MenuItem value="">Select Code</MenuItem>
                    <MenuItem value="+43">+43 (Austria)</MenuItem>
                    <MenuItem value="+32">+32 (Belgium)</MenuItem>
                    <MenuItem value="+359">+359 (Bulgaria)</MenuItem>
                    <MenuItem value="+385">+385 (Croatia)</MenuItem>
                    <MenuItem value="+357">+357 (Cyprus)</MenuItem>
                    <MenuItem value="+420">+420 (Czech Republic)</MenuItem>
                    <MenuItem value="+45">+45 (Denmark)</MenuItem>
                    <MenuItem value="+372">+372 (Estonia)</MenuItem>
                    <MenuItem value="+358">+358 (Finland)</MenuItem>
                    <MenuItem value="+33">+33 (France)</MenuItem>
                    <MenuItem value="+49">+49 (Germany)</MenuItem>
                    <MenuItem value="+30">+30 (Greece)</MenuItem>
                    <MenuItem value="+36">+36 (Hungary)</MenuItem>
                    <MenuItem value="+353">+353 (Ireland)</MenuItem>
                    <MenuItem value="+39">+39 (Italy)</MenuItem>
                    <MenuItem value="+370">+370 (Lithuania)</MenuItem>
                    <MenuItem value="+352">+352 (Luxembourg)</MenuItem>
                    <MenuItem value="+371">+371 (Latvia)</MenuItem>
                    <MenuItem value="+356">+356 (Malta)</MenuItem>
                    <MenuItem value="+31">+31 (Netherlands)</MenuItem>
                    <MenuItem value="+48">+48 (Poland)</MenuItem>
                    <MenuItem value="+351">+351 (Portugal)</MenuItem>
                    <MenuItem value="+40">+40 (Romania)</MenuItem>
                    <MenuItem value="+421">+421 (Slovakia)</MenuItem>
                    <MenuItem value="+386">+386 (Slovenia)</MenuItem>
                    <MenuItem value="+34">+34 (Spain)</MenuItem>
                    <MenuItem value="+46">+46 (Sweden)</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  fullWidth
                  margin="normal"
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseUserPreferencesDialog} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                  Save
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Box>
      </Grid>
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
    </>
  );
}

export default ProfileSettingsPage;
