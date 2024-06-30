// export default PetsDetailsPage;
import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Box,
  Icon,
  Chip,
  CardHeader,
  CardActions,
  Avatar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {
  Pets as PetsIcon,
  Category as CategoryIcon,
  Tag as TagIcon,
  Height as HeightIcon,
  Male as MaleIcon,
  Female as FemaleIcon,
  Mood as MoodIcon,
  CalendarToday as CalendarTodayIcon,
  WatchLater as WatchLaterIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Notes as NotesIcon,
  ColorLens as ColorLensIcon,
  MergeType as MergeTypeIcon,
  EventNote as EventNoteIcon,
  MoreVert as MoreVertIcon,
  Visibility as VisibilityIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Print as PrintIcon,
} from '@mui/icons-material';

import CakeIcon from '@mui/icons-material/Cake';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import EventIcon from '@mui/icons-material/Event';
import TextureIcon from '@mui/icons-material/Texture';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { BASE_URL } from '../middleware/config';
import TomTomMapDetails from '../components/map/TomTomMapDetails';
import ChatComponent from '../components/map/ChatComponent';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import MessageIcon from '@mui/icons-material/Message';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import FlagIcon from '@mui/icons-material/Flag';
import MapIcon from '@mui/icons-material/Map';
import ChecklistIcon from '@mui/icons-material/Checklist';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocationHistory from '../components/petcard/LocationHistory';
import VerifiedIcon from '@mui/icons-material/Verified';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocationOffIcon from '@mui/icons-material/LocationOff';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FeedIcon from '@mui/icons-material/Feed';
import Poster from './Poster';
import { AuthContext } from '../middleware/AuthContext';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { LanguageContext } from '../middleware/LanguageContext';
import { useTranslation } from 'react-i18next';

// Example data
// const locations = [
//   {
//     lat: 56.752259533288,
//     lng: 24.389414976480396,
//     user: "John Doe",
//     timestamp: "2024-05-24T19:47:59.420Z",
//   },
//   {
//     lat: 56.854657543288,
//     lng: 24.475894976480396,
//     user: "Jane Smith",
//     timestamp: "2024-05-23T17:30:45.320Z",
//   },
//   // Add more locations as needed
// ];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ padding: '1rem 0' }}>{children}</Box>}
    </Box>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// const TabPanel = ({ value, index, children }) => {
//   return (
//     <div role="tabpanel" hidden={value !== index}>
//       {value === index && <Box sx={{ padding: "1rem 0" }}>{children}</Box>}
//     </div>
//   );
// };

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function IconLabelTabs({ onAddLocation, onDeleteMessage, location, pet, comments }) {
  const { user } = useContext(AuthContext);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleDelete = (commentId) => {
    onDeleteMessage(commentId);
  };
  // Define your function at the top of your component
  // const handleDeleteMessage = async (id, commentId) => {
  //   const token = localStorage.getItem("token"); // assuming the token is stored in local storage
  //   try {
  //     console.log(`Deleting message with id: ${commentId}`);
  //     // Make a request to your server to delete the message
  //     await axios.delete(`${BASE_URL}/pets/${id}/comments/${commentId}`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });

  //     // Remove the message from the local state
  //     // setComments((prevComments) =>
  //     //   prevComments.filter((comment) => comment._id !== commentId)
  //     // );
  //   } catch (error) {
  //     console.error("Failed to delete message:", error);
  //   }
  // };

  return (
    <div sx={{ margin: '0', padding: '0' }}>
      {/* {user.id === pet.author ? <p>pet author</p> : <p>not pet author</p>} */}
      <div style={{ margin: '2rem 0' }}>
        <Tabs value={value} centered onChange={handleChange} aria-label="basic tabs example">
          <Tab
            icon={<MessageIcon />}
            label="MESSAGES"
            sx={{ fontSize: '0.7rem' }}
            {...a11yProps(2)}
          />
          <Tab
            icon={<AirlineStopsIcon />}
            label="HISTORY"
            sx={{ fontSize: '0.7rem' }}
            {...a11yProps(3)}
          />
          <Tab icon={<NotesIcon />} label="NOTES" sx={{ fontSize: '0.7rem' }} {...a11yProps(0)} />
          {/* <Tab
            icon={<LocalHospitalIcon />}
            label="HEALTH"
            sx={{ fontSize: "0.7rem" }}
            {...a11yProps(1)}
          /> */}

          <Tab
            icon={<ContactPageIcon />}
            label="CONTACTS"
            sx={{ fontSize: '0.7rem' }}
            {...a11yProps(3)}
          />
        </Tabs>
      </div>
      <CustomTabPanel value={value} index={0}>
        <Grid container>
          {user && (
            <ChatComponent
              user={user}
              location={location}
              onAddLocation={onAddLocation}
              pet={pet}
            />
          )}

          {comments && comments.length > 0 ? (
            comments.map((comment) => (
              <Grid
                key={comment._id} // Add this line
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                style={{ paddingLeft: '0' }}
              >
                <Card style={{ width: '100%' }}>
                  {/* <p>{comment.author.isVerified}</p>aa */}
                  <CardContent>
                    <Box display="flex" alignItems="flex-start" justifyContent="space-between">
                      <Box display="flex" flexDirection="column">
                        <Box
                          display="flex"
                          alignItems="center"
                          marginBottom="1rem"
                          padding="0.5rem"
                          style={{
                            backgroundColor: '#fff',
                            borderRadius: '8px',
                            background: '#f5f5f5',
                          }}
                        >
                          <Avatar
                            alt={comment.author.username}
                            src={comment.author.username}
                          ></Avatar>
                          <Box ml={2}>
                            <Typography variant="h6" component="div">
                              {comment.author.username}
                            </Typography>

                            <Box display="flex" alignItems="center">
                              {/* <Typography variant="body2" color="textSecondary">
                            {comment.author.username}
                          </Typography> */}

                              {comment.author && comment.author.isVerified && (
                                <Tooltip title="Verified user">
                                  <VerifiedIcon
                                    fontSize="small"
                                    color="primary"
                                    style={{
                                      marginLeft: '0.5rem',
                                      color: '#3f51b5',
                                    }}
                                  />
                                </Tooltip>
                              )}
                            </Box>
                            <Typography variant="body2" color="textSecondary">
                              {moment(comment.createdAt).fromNow()}
                            </Typography>
                          </Box>
                        </Box>
                        <Box>
                          <Typography variant="body1" style={{ color: '#333' }}>
                            {comment.text}
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        style={{
                          height: 'auto',
                          width: '200px',
                        }}
                      >
                        <CardMedia
                          component="img"
                          style={{ borderRadius: '8px' }}
                          image={comment.image || '/default_pet_image.jpg'}
                        />
                      </Box>
                    </Box>
                    {/* <Typography variant="body1" style={{ color: '#333', background: 'lightgreen' }}>
                      {comment.text}
                    </Typography> */}
                    <Box mb={2} style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Box>
                        {/* <Typography variant="body1" style={{ color: '#333' }}>
                          {comment.text}
                        </Typography> */}
                      </Box>
                      {/* <Box
                        style={{
                          height: 'auto',
                          width: '200px',
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={comment.image || '/default_pet_image.jpg'}
                        />
                      </Box> */}
                    </Box>

                    <Box display="flex" justifyContent="space-between">
                      <Tooltip title="Show on map">
                        <Button
                          variant="contained"
                          color="primary"
                          endIcon={<LocationOnIcon />}
                          size="small"
                          style={{ background: '#555' }}
                        >
                          Show on map
                        </Button>
                      </Tooltip>
                      {user && user.id === comment.author._id && (
                        <Tooltip title="Delete message">
                          <Button
                            variant="contained"
                            color="secondary"
                            endIcon={<DeleteIcon />}
                            size="small"
                            style={{ background: '#d32f2f' }}
                            onClick={() => handleDelete(comment._id)} // Add this line
                          >
                            Delete
                          </Button>
                        </Tooltip>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingLeft: '0' }}>
              <Card style={{ width: '100%' }}>
                <CardContent>
                  <Box
                    display="flex"
                    alignItems="center"
                    padding="0.5rem"
                    style={{ backgroundColor: '#fff', borderRadius: '8px' }}
                  ></Box>

                  <Typography variant="body1" style={{ color: '#333' }}>
                    No comments available
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Grid container>
          <LocationHistory pet={pet} />
        </Grid>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <Grid container>
          <Grid item xs={12} style={{ paddingLeft: '0' }}>
            <Box mb={3}>
              <Box display="flex" alignItems="center" mb={1}>
                <LocalHospitalIcon />
                <Typography variant="h6" style={{ fontSize: '1rem' }} ml={1} fontWeight="bold">
                  Health Details
                </Typography>
              </Box>
              <Card elevation={3}>
                <CardContent style={{ paddingBottom: '1rem' }}>
                  {(pet.health && pet.health.length > 0) || pet.healthDetails ? (
                    <>
                      {pet.health && pet.health.length > 0 && (
                        <Box>
                          {pet.health.map((item, index) => (
                            <Chip
                              key={index}
                              label={item}
                              size="small"
                              variant="contained"
                              sx={{ m: 0.5 }}
                            />
                          ))}
                        </Box>
                      )}
                      {pet.healthDetails && (
                        <Typography variant="body2" style={{ marginTop: '1rem' }}>
                          {pet.healthDetails}
                        </Typography>
                      )}
                    </>
                  ) : (
                    <Typography variant="body2">No health information given.</Typography>
                  )}
                </CardContent>
              </Card>
              {/* <Card elevation={3}>
                <CardContent style={{ paddingBottom: "1rem" }}>
                  {pet.health && pet.health.length > 0 ? (
                    <Box>
                      {pet.health.map((item, index) => (
                        <Chip
                          key={index}
                          label={item}
                          size="small"
                          variant="contained"
                          sx={{ m: 0.5 }}
                        />
                      ))}
                    </Box>
                  ) : (
                    <Typography variant="body2">
                      No health information given.
                    </Typography>
                  )}

                  <Typography variant="body2" style={{ marginTop: "1rem" }}>
                    {pet.healthDetails
                      ? pet.healthDetails
                      : "No additional health information given."}
                  </Typography>
                </CardContent>
              </Card> */}
            </Box>

            <Box>
              <Box display="flex" alignItems="center" mb={1}>
                {/* <InfoIcon /> */}
                <FeedIcon />
                <Typography variant="h6" ml={1} style={{ fontSize: '1rem' }} fontWeight="bold">
                  Additional Information
                </Typography>
              </Box>
              <Card elevation={3}>
                <CardContent style={{ paddingBottom: '1rem' }}>
                  <Typography variant="body2">
                    {pet.notes ? pet.notes : 'No additional information given.'}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingLeft: '0' }}>
            <Box mb={3}>
              <Box display="flex" alignItems="center" mb={1}>
                {/* <PersonIcon /> */}
                <AccountBoxIcon />
                <Typography variant="h6" style={{ fontSize: '1rem' }} ml={1} fontWeight="bold">
                  Contact Person
                </Typography>
              </Box>
              <Card style={{ width: '100%' }}>
                <CardContent>
                  <Box display="flex" alignItems="center" gap={2} mb={2}>
                    <Avatar
                      style={{ background: '#555' }}
                      alt={pet.author.username}
                      // src={pet.author.username}
                    />

                    <Typography variant="body1">
                      <b>Username:</b> {pet.author.username}
                    </Typography>
                    {/* <FiberManualRecordIcon
                      style={{
                        weight: "0.5rem",
                        height: "0.5rem",
                        marginLeft: "-1rem",
                        marginRight: "-1rem",
                      }}
                    /> */}
                    {/* <Typography variant="body1">John242</Typography> */}
                    {pet.author && pet.author.isVerified && (
                      <Tooltip title="Verified user">
                        <VerifiedIcon
                          fontSize="small"
                          color="primary"
                          style={{
                            color: '#3f51b5',
                          }}
                        />
                      </Tooltip>
                    )}
                  </Box>

                  <Box display="flex" alignItems="center" gap={2} style={{ marginTop: '1rem' }}>
                    {/* <PhoneIcon /> */}
                    <Avatar style={{ background: '#555' }}>
                      <PhoneIcon />
                    </Avatar>
                    <Typography variant="body1">
                      <b>Phone:</b> {pet.phoneCode ? pet.phoneCode : ''}{' '}
                      {pet.phone ? pet.phone : 'N/A'}
                    </Typography>
                  </Box>

                  <Box display="flex" alignItems="center" gap={2} style={{ marginTop: '1rem' }}>
                    {/* <EmailIcon /> */}
                    <Avatar style={{ background: '#555' }}>
                      <EmailIcon />
                    </Avatar>
                    <Typography variant="body1">
                      <b>Email:</b> {pet.email ? pet.email : 'N/A'}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </CustomTabPanel>
    </div>
  );
}
// const formattedText = `${mainColor} ${petCategory} is ${petStatus} since ${petLostOrFoundDate} at ${petLostOrFoundTime}. It is a ${petAge} ${petBreed} with a ${markingPattern} pattern and ${markingColors.join(', ')} markings. The pet's identifier is ${petIdentifier}, and it is described as ${petSize} in size, ${petGender} in gender, and ${petBehavior} in behavior. Notes: ${notes}. If found, please contact the owner at phone number ${contactPhone} or email at ${contactEmail}.`;
const PetsDetailsPage = () => {
  //const [selectedLanguage, setSelectedLanguage] = useState("lv"); // Default language
  // Assuming your language preferences are stored as "preferredLanguage" in localStorage
  // useEffect(() => {
  //   const storedLanguage = localStorage.getItem("preferredLanguage");
  //   if (storedLanguage) {
  //     setSelectedLanguage(storedLanguage);
  //   }
  // }, []); // Empty dependency array ensures this effect runs only once on component mount
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [comments, setComments] = useState(null);
  const [options, setOptions] = useState([]);
  const [location, setLocation] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  console.log('Location in petdetails:', location);
  const handleAddLocation = (location) => {
    setLocation((prevLocation) => location);
  };
  const { selectedLanguage } = useContext(LanguageContext); // Use LanguageContext to get selectedLanguage
  const { t } = useTranslation();
  const getSizeName = (sizeOptions, sizeValue) => {
    // Find the size option and return the corresponding name for the size value
    // console.log("Size options:", sizeOptions[0].values);
    // console.log("Size options Inside:", sizeOptions[0].values[0].value);
    const sizeValueInfo = sizeOptions[0].values.find((option) => option.value == sizeValue);
    if (!sizeValueInfo) return 'N/A';

    return sizeValueInfo.translations[selectedLanguage]; // Assuming "en" translation is always available
  };

  // const handleDeleteMessage = async (commentId) => {
  //   try {
  //     // Make a request to your server to delete the message
  //     await axios.delete(`${BASE_URL}/pets/${id}/comments/${commentId}`);

  //     // Remove the message from the local state
  //     setComments((prevComments) =>
  //       prevComments.filter((comment) => comment._id !== commentId)
  //     );
  //   } catch (error) {
  //     console.error("Failed to delete message:", error);
  //   }
  // };

  const handleDeleteMessage = async (commentId) => {
    const token = localStorage.getItem('token'); // assuming the token is stored in local storage
    try {
      console.log(`Deleting message with id: ${commentId}`);
      // Make a request to your server to delete the message
      await axios.delete(`${BASE_URL}/pets/${id}/comments/${commentId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Remove the message from the local state
      setComments((prevComments) => prevComments.filter((comment) => comment._id !== commentId));
    } catch (error) {
      console.error('Failed to delete message:', error);
    }
  };

  // const handleAddLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const newLocation = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude,
  //       };
  //       console.log("Current location in PetsDetailsPage.js:", newLocation);
  //       setLocation(newLocation); // Set the new location
  //     });
  //   } else {
  //     // Geolocation is not supported by this browser
  //     console.log("Geolocation is not supported by this browser.");
  //   }
  // };

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const createdAt = moment(pet.createdAt).fromNow();
  // const updatedAt = moment(pet.updatedAt).fromNow();

  const handleShare = async ({ enqueueSnackbar }) => {
    try {
      if (navigator.share) {
        // Use Web Share API if available
        await navigator.share({
          title: pet.initialStatus,
          text: pet.category,
          url: window.location.href,
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        throw new Error('Web Share API not supported');
      }
    } catch (error) {
      console.error('Error sharing pet:', error);
      // You can use the notistack to display an error message
      enqueueSnackbar('Error sharing pet. Please try again later.', {
        variant: 'error',
      });
    }
  };

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/pets/${id}`);
        setPet(response.data);
        //setIsFavorite(user?.favoritedPets?.includes(response.data._id)); // Check if pet is already favorited
      } catch (error) {
        console.error('Error fetching pet details:', error.message);
        setError('Error fetching pet details');
      } finally {
        setLoading(false);
      }
    };

    const fetchOptions = async () => {
      try {
        // Fetch options data from your backend API
        const response = await fetch(`${BASE_URL}/options/size`);
        if (!response.ok) {
          throw new Error('Failed to fetch options data');
        }
        const optionsData = await response.json();
        setOptions(optionsData.options);
        console.log('Options data:', optionsData.options);
      } catch (error) {
        console.error('Error fetching options data:', error);
        // Optionally handle error (e.g., show an error message)
      }
    };

    fetchOptions();

    fetchPet();
  }, [id, selectedLanguage]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/pets/${id}/comments`);
        setComments(response.data);
        console.log('Comments:', response.data);
      } catch (error) {
        console.error('Error fetching pet comments:', error.message);
        setError('Error fetching pet comments');
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, [id]);

  const getInitialStatusLabel = (value) => {
    const options = t('selectOptions.initialStatusOptions', { returnObjects: true });
    const option = options.find((option) => option.value === value);
    return option ? option.label : '';
  };

  const getCategoryLabel = (value) => {
    const options = t('selectOptions.categoryOptions', { returnObjects: true });
    const option = options.find((option) => option.value === value);
    return option ? option.label : '';
  };

  const getSizeLabel = (value) => {
    const options = t('selectOptions.sizeOptions', { returnObjects: true });
    const option = options.find((option) => option.value === value);
    return option ? option.label : '';
  };

  const getGenderLabel = (value) => {
    const options = t('selectOptions.genderOptions', { returnObjects: true });
    const option = options.find((option) => option.value === value);
    return option ? option.label : '';
  };

  const getBehaviorLabel = (value) => {
    const options = t('selectOptions.behaviorOptions', { returnObjects: true });
    const option = options.find((option) => option.value === value);
    return option ? option.label : '';
  };

  const getAgeLabel = (value) => {
    const options = t(`selectOptions.ageOptions.${pet.category}`, { returnObjects: true });
    const option = options.find((option) => option.value === value);
    return option ? option.label : '';
  };

  const getBreedLabel = (value) => {
    const options = t(`selectOptions.breedOptions.${pet.category}`, { returnObjects: true });
    const option = options.find((option) => option.value === value);
    return option ? option.label : '';
  };

  const getMainColorLabel = (value) => {
    const options = t('selectOptions.colorOptions', { returnObjects: true });
    const option = options.find((option) => option.value === value);
    return option ? option.label : '';
  };

  const getMarkingLabel = (value) => {
    const options = t('selectOptions.markingOptions', { returnObjects: true });
    const option = options.find((option) => option.value === value);
    return option ? option.label : '';
  };

  // const handleFavorite = async () => {
  //   try {
  //     const token = localStorage.getItem('token');
  //     const favoriteAction = isFavorite ? 'remove' : 'add';
  //     const response = await axios.put(
  //       `${BASE_URL}/users/${user.id}/favorites/${id}/${favoriteAction}`,
  //       {},
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       },
  //     );
  //     if (response.status === 200) {
  //       setIsFavorite(!isFavorite); // Toggle favorite status
  //     }
  //   } catch (error) {
  //     console.error('Error toggling favorite:', error);
  //     // Handle error, e.g., show error message
  //   }
  // };

  const handleFavorite = async () => {
    try {
      const token = localStorage.getItem('token');
      const favoriteAction = isFavorite ? 'remove' : 'add';
      const url = `${BASE_URL}/users/${user.id}/favorites/${id}/${favoriteAction}`;

      // Debugging: Log URL and headers
      console.log('Request URL:', url);
      console.log('Token:', token);

      const response = await axios.put(
        url,
        {},
        // {
        //   headers: { Authorization: `Bearer ${token}` },
        // },
      );

      // Debugging: Log response
      console.log('Response:', response);

      if (response.status === 200) {
        setIsFavorite(!isFavorite); // Toggle favorite status
      }
    } catch (error) {
      // Debugging: Log error details
      console.error(
        'Error toggling favorite:',
        error.response ? error.response.data : error.message,
      );
      // Handle error, e.g., show error message
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  // Check if pet is not found after loading
  // if (!pet && loading) {
  //   return (
  //     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
  //       <Typography variant="h6">Pet not found.</Typography>
  //     </Box>
  //   );
  // }

  //const genderIcon = pet.gender === 'Male' ? <MaleIcon /> : <FemaleIcon />;

  return (
    <>
      {pet && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom textAlign="center">
              <span style={{ textTransform: 'capitalize' }}>
                {getInitialStatusLabel(pet.initialStatus)}
              </span>{' '}
              <span style={{ textTransform: 'capitalize' }}>{getCategoryLabel(pet.category)}</span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card style={{ position: 'relative' }}>
              {/* <CardActions>
            <Avatar>A</Avatar>
            <Typography variant="body1">antohysmith32</Typography>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </CardActions> */}

              <CardMedia
                component="img"
                alt={pet.initialStatus}
                height="400"
                image={pet.mainImage || '/default_pet_image.jpg'}
                title={pet.initialStatus}
              />
              <Box style={{ position: 'absolute', top: -20, right: 0, zIndex: 999 }}>
                {/* <IconButton
              aria-label="add to favorites"
              sx={{
                position: 'absolute',
                top: '40px',
                right: '20px',
                background: '#FFFFFF', // Customize as needed
              }}
            >
              <FavoriteIcon />
            </IconButton> */}
                <Tooltip
                  sx={{
                    position: 'absolute',
                    top: '40px',
                    right: '20px',
                    background: '#FFFFFF', // Customize as needed
                  }}
                  title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <IconButton onClick={handleFavorite}>
                    {isFavorite ? <FavoriteIcon color="secondary" /> : <FavoriteBorderIcon />}
                  </IconButton>
                </Tooltip>
                <Link to={`/pets/${id}/poster`}>
                  <IconButton
                    aria-label="Download"
                    sx={{
                      position: 'absolute',
                      top: '95px',
                      right: '20px',
                      background: '#FFFFFF', // Customize as needed
                    }}
                  >
                    <DownloadIcon />
                  </IconButton>
                </Link>
                <IconButton
                  aria-label="Share"
                  sx={{
                    position: 'absolute',
                    top: '150px',
                    right: '20px',
                    background: '#FFFFFF', // Customize as needed
                  }}
                  onClick={handleShare}
                >
                  <ShareIcon />
                </IconButton>
              </Box>
              <Box display="flex" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Box display="flex" alignItems="center" p={2}>
                  <VisibilityIcon color="action" />
                  <Typography variant="body2" color="textSecondary" ml={1}>
                    {pet.views} views
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" p={2}>
                  <FlagIcon color="action" />
                  <Typography variant="body2" color="textSecondary" ml={1}>
                    Report
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box>
              <Grid container spacing={1}>
                <Grid item xs={12} mb={1}>
                  <Box
                    gap={1}
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                    }}
                  >
                    <TagIcon /> <b>Identifier:</b> {pet.identifier ? pet.identifier : 'N/A'}
                    <Typography variant="body1" gutterBottom></Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} mb={1}>
                  <Box
                    gap={1}
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                    }}
                  >
                    {/* {pet.size ? getSizeName(options, pet.size) : "N/A"} */}
                    <HeightIcon /> <b>Size:</b> {getSizeLabel(pet.size)}
                    <Typography variant="body1" gutterBottom></Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} mb={1}>
                  <Box
                    gap={1}
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                    }}
                  >
                    <MaleIcon /> <b>Gender:</b> {getGenderLabel(pet.gender)}
                    <Typography variant="body1" gutterBottom></Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} mb={1}>
                  <Box
                    gap={1}
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                    }}
                  >
                    <MoodIcon /> <b>Behavior:</b> {getBehaviorLabel(pet.behavior)}
                    <Typography variant="body1" gutterBottom></Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} mb={1}>
                  <Box
                    gap={1}
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                    }}
                  >
                    <CakeIcon /> <b>Age:</b> {getAgeLabel(pet.age)}
                    <Typography variant="body1" gutterBottom></Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} mb={1}>
                  <Box
                    gap={1}
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                    }}
                  >
                    <MergeTypeIcon /> <b>Breed:</b> {getBreedLabel(pet.breed)}
                    <Typography variant="body1" gutterBottom></Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} mb={1}>
                  <Box
                    gap={1}
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                    }}
                  >
                    <ColorLensIcon /> <b>Main Color:</b> {getMainColorLabel(pet.mainColor)}
                    <Typography variant="body1" gutterBottom></Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} mb={1}>
                  <Box
                    gap={1}
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                    }}
                  >
                    <TextureIcon /> <b>Marking Pattern:</b> {getMarkingLabel(pet.markingPattern)}
                    <Typography variant="body1" gutterBottom></Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} mb={1}>
                  <Box
                    gap={1}
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                    }}
                  >
                    <ColorLensIcon /> <b>Marking Colors:</b>{' '}
                    {pet.markingColors.join(', ') ? pet.markingColors.join(', ') : 'N/A'}
                    <Typography variant="body1" gutterBottom></Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} mb={1}>
                  <Box
                    gap={1}
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                    }}
                  >
                    <EventIcon />{' '}
                    <span style={{ textTransform: 'capitalize' }}>
                      <b>{getInitialStatusLabel(pet.initialStatus)}</b>
                    </span>
                    <b>Date:</b> {pet.date}
                  </Box>
                </Grid>
                <Grid item xs={12} mb={1}>
                  <Box
                    gap={1}
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                    }}
                  >
                    <WatchLaterIcon />
                    <span style={{ textTransform: 'capitalize' }}>
                      <b>{getInitialStatusLabel(pet.initialStatus)}</b>
                    </span>
                    <b>Time:</b> {pet.time}
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Card style={{ border: 'none', boxShadow: 'none' }}>
                    <CardContent style={{ padding: '0' }}>
                      <Box style={{ display: 'flex' }}>
                        <Typography fontSize="small" variant="body1" style={{ color: 'gray' }}>
                          Created {moment(pet.createdAt).fromNow()} <span>&nbsp;&nbsp;&nbsp;</span>|
                          <span>&nbsp;&nbsp;&nbsp;</span>
                          Updated {moment(pet.updatedAt).fromNow()}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/* <Button
        variant="contained"
        color="primary"
        onClick={() => generatePDF(pet)} // Call the generatePDF function with pet data
        sx={{ marginTop: 4 }}
      >
        Download PDF
      </Button> */}

          {/* Render the LostPetPage component with pet data */}
          {/* <Box
        id="pdf-content"
        sx={{ padding: 4, border: "1px solid #ccc", borderRadius: "8px" }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Lost Pet Information
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Name: {pet.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Breed:</strong> {pet.breed}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Age:</strong> {pet.age}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Last Seen:</strong> {pet.lastSeen}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Description:</strong> {pet.description}
        </Typography>
        {pet.image && (
          <img
            src={pet.image}
            alt={pet.name}
            style={{ maxWidth: "100%", height: "auto", marginTop: "20px" }}
          />
        )}
      </Box> */}
          {/* <Button
        variant="contained"
        color="primary"
        onClick={generatePDF}
        sx={{ marginTop: 4 }}
      >
        Download PDF
      </Button> */}
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TomTomMapDetails pet={pet} location={location} onAddLocation={handleAddLocation} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <IconLabelTabs
              pet={pet}
              comments={comments}
              location={location}
              onDeleteMessage={handleDeleteMessage}
              onAddLocation={handleAddLocation}
            />
          </Grid>
          {/* <Grid item xs={12} sm={12} md={12} lg={12}>
        <Poster pet={pet} />
      </Grid> */}
        </Grid>
      )}
    </>
  );
};

export default PetsDetailsPage;
