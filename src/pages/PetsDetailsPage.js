// PetsDetailsPage.js
import React, { useState, useEffect, useContext, useRef } from 'react';
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
  IconButton,
} from '@mui/material';

import TagIcon from '@mui/icons-material/Tag';
import HeightIcon from '@mui/icons-material/Height';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import MoodIcon from '@mui/icons-material/Mood';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import MergeTypeIcon from '@mui/icons-material/MergeType';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CakeIcon from '@mui/icons-material/Cake';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';
import EventIcon from '@mui/icons-material/Event';
import TextureIcon from '@mui/icons-material/Texture';
import { BASE_URL } from '../middleware/config';
import LeafletPetDetailsMap from '../components/map/LeafletPetDetailsMap';
import FlagIcon from '@mui/icons-material/Flag';
import Tooltip from '@mui/material/Tooltip';
import moment from 'moment';
import { AuthContext } from '../middleware/AuthContext';
import { LanguageContext } from '../middleware/LanguageContext';
import { useTranslation } from 'react-i18next';
import IconLabelTabs from '../components/IconLabelTabs';
import ChatComponent from '../components/map/ChatComponent';

const PetsDetailsPage = () => {
  const [markerPosition, setMarkerPosition] = useState(null);
  const mapRef = useRef();

  // State for handling image upload
  const [image, setImage] = useState(null); // Uploaded image file
  // const [imagePreview, setImagePreview] = useState(null); // Image preview URL

  const handleUploadImage = async (file) => {
    console.log('handleUploadImage', file);
    setImage(file);
  };

  // const sendMessage = async (message, file) => {
  //   try {
  //     const token = localStorage.getItem('token');
  //     if (!token) {
  //       console.error('No token found');
  //       return;
  //     }

  //     const formData = new FormData();
  //     formData.append('message', message);
  //     formData.append('author', user.id);
  //     formData.append('petId', pet._id);

  //     // Append image file if it exists
  //     if (file) {
  //       formData.append('image', file);
  //     }

  //     // Append marker position if it exists
  //     if (markerPosition) {
  //       formData.append('location[lat]', markerPosition[1]);
  //       formData.append('location[lng]', markerPosition[0]);
  //     }

  //     const response = await axios.post(`${BASE_URL}/pets/${pet._id}/comments`, formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     console.log('Message sent:', response.data);
  //     // Handle response as needed, e.g., update state with new message
  //   } catch (error) {
  //     console.error('Failed to send message:', error);
  //     // Handle error as needed
  //   }
  // };
  const sendMessage = async (message) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }

      const formData = new FormData();
      formData.append('message', message);
      formData.append('author', user.id);
      formData.append('petId', pet._id);

      // Append image file if it exists
      if (image) {
        formData.append('image', image);
      }

      // Append marker position if it exists
      if (markerPosition) {
        formData.append('location[lat]', markerPosition[1]);
        formData.append('location[lng]', markerPosition[0]);
      }

      const response = await axios.post(`${BASE_URL}/pets/${pet._id}/comments`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Message sent:', response.data);
      // Handle response as needed, e.g., update state with new message

      // Clear image and image preview after sending
      setImage(null);
    } catch (error) {
      console.error('Failed to send message:', error);
      // Handle error as needed
    }
  };

  // const handleAddLocation = (location) => {
  //   console.log('I clicked in parent component add location');
  //   setMarkerPosition(location);
  // };

  const handleAddLocation = () => {
    if (mapRef.current) {
      const center = mapRef.current.getCenter();
      setMarkerPosition([center.lat, center.lng]);
    }
  };

  const handleRemoveLocation = () => {
    console.log('I clicked in parent component remove location');
    setMarkerPosition(null);
  };

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
  const { selectedLanguage } = useContext(LanguageContext); // Use LanguageContext to get selectedLanguage
  const { t } = useTranslation();

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
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get(`${BASE_URL}/pets/${id}`);
        setPet(response.data);
        //setIsFavorite(user?.favoritedPets?.includes(response.data._id)); // Check if pet is already favorited

        if (user && id) {
          // Check if the pet is in the user's favorites
          const favoritesResponse = await axios.get(`${BASE_URL}/users/${user.id}/favorites`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const favoritedPets = favoritesResponse.data;
          setIsFavorite(favoritedPets.some((favPet) => favPet._id === id));
        }
      } catch (error) {
        console.error('Error fetching pet details:', error.message);
        setError('Error fetching pet details');
      } finally {
        setLoading(false);
      }
    };

    // const fetchPet = async () => {
    //   const token = localStorage.getItem('token');
    //   try {
    //     const response = await axios.get(`${BASE_URL}/pets/${id}`, {
    //       headers: { Authorization: `Bearer ${token}` },
    //     });
    //     setPet(response.data);

    //     // Check if the pet is in the user's favorites
    //     const favoritesResponse = await axios.get(`${BASE_URL}/users/${user.id}/favorites`, {
    //       headers: { Authorization: `Bearer ${token}` },
    //     });
    //     const favoritedPets = favoritesResponse.data;
    //     setIsFavorite(favoritedPets.some((favPet) => favPet._id === id));
    //   } catch (error) {
    //     console.error('Error fetching pet details:', error);
    //   }
    // };

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

  const getSizeName = (sizeOptions, sizeValue) => {
    // Find the size option and return the corresponding name for the size value
    // console.log("Size options:", sizeOptions[0].values);
    // console.log("Size options Inside:", sizeOptions[0].values[0].value);
    const sizeValueInfo = sizeOptions[0].values.find((option) => option.value == sizeValue);
    if (!sizeValueInfo) return 'N/A';

    return sizeValueInfo.translations[selectedLanguage]; // Assuming "en" translation is always available
  };

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

  const handleFavorite = async () => {
    try {
      const token = localStorage.getItem('token');
      const favoriteAction = isFavorite ? 'remove' : 'add';
      const url = `${BASE_URL}/users/${user.id}/favorites/${id}/${favoriteAction}`;

      console.log('Request URL:', url);
      console.log('Token:', token);

      const response = await axios.put(
        url,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      console.log('Response:', response);

      if (response.status === 200) {
        setIsFavorite(!isFavorite); // Toggle favorite status
      }
    } catch (error) {
      console.error(
        'Error toggling favorite:',
        error.response ? error.response.data : error.message,
      );
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
                {/* <Tooltip
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
                </Tooltip> */}

                <Tooltip
                  sx={{
                    position: 'absolute',
                    top: '40px',
                    right: '20px',
                    background: '#FFFFFF',
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
                    <TagIcon /> <b>{t('formLabels.identifier')}:</b>{' '}
                    {pet.identifier ? pet.identifier : 'N/A'}
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
                    <HeightIcon /> <b>{t('formLabels.size')}:</b> {getSizeLabel(pet.size)}
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
                    <MaleIcon /> <b>{t('formLabels.gender')}:</b> {getGenderLabel(pet.gender)}
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
                    <MoodIcon /> <b>{t('formLabels.behavior')}:</b> {getBehaviorLabel(pet.behavior)}
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
                    <CakeIcon /> <b>{t('formLabels.age')}:</b> {getAgeLabel(pet.age)}
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
                    <MergeTypeIcon /> <b>{t('formLabels.breed')}:</b> {getBreedLabel(pet.breed)}
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
                    <ColorLensIcon /> <b>{t('formLabels.mainColor')}:</b>{' '}
                    {getMainColorLabel(pet.mainColor)}
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
                    <TextureIcon /> <b>{t('formLabels.markings')}:</b>{' '}
                    {getMarkingLabel(pet.markingPattern)}
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
                    <ColorLensIcon /> <b>{t('formLabels.markingColors')}:</b>{' '}
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
                    <EventIcon /> <b>{t('formLabels.date')}:</b> {pet.date}
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
                    <b>{t('formLabels.time')}:</b> {pet.time}
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

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <LeafletPetDetailsMap
              pet={pet}
              location={location}
              markerPosition={markerPosition}
              onAddLocation={handleAddLocation}
              onRemoveLocation={handleRemoveLocation}
              onMapLoad={(map) => (mapRef.current = map)}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12}>
            {user && (
              <ChatComponent
                pet={pet}
                user={user}
                onUploadImage={handleUploadImage} // Pass handleUploadImage function to handle image upload
                onSendMessage={sendMessage}
                onAddLocation={handleAddLocation}
                onRemoveLocation={handleRemoveLocation}
              />
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <IconLabelTabs
              pet={pet}
              user={user}
              comments={comments}
              // location={location}
              // messages={messages}
              // onSendMessage={sendMessage}
              onDeleteMessage={handleDeleteMessage}
              //onAddLocation={handleAddLocation} // Make sure this prop is passed correctly
              onRemoveLocation={handleRemoveLocation} // And this one too
              // markerPosition={markerPosition}
              // onMarkerDrag={handleMarkerDrag}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default PetsDetailsPage;
