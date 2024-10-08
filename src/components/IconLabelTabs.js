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

import CloseIcon from '@mui/icons-material/Close'; // Import the Close icon
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CakeIcon from '@mui/icons-material/Cake';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Tooltip, Modal, Backdrop, Fade } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import TextureIcon from '@mui/icons-material/Texture';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { BASE_URL } from '../middleware/config';
import TomTomMapDetails from '../components/map/TomTomMapDetails';
import LeafletPetDetailsMap from '../components/map/LeafletPetDetailsMap';
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

import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FeedIcon from '@mui/icons-material/Feed';
// import Poster from './Poster';
import { AuthContext } from '../middleware/AuthContext';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { LanguageContext } from '../middleware/LanguageContext';
import { useTranslation } from 'react-i18next';

// Function to generate accessibility props for tabs
const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const TabPanel = ({ children, value, index, ...other }) => {
  const { id, 'aria-controls': ariaControls } = a11yProps(index);

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={id}
      aria-labelledby={`simple-tab-${index}`}
      aria-controls={ariaControls}
      {...other}
    >
      {value === index && <Box sx={{ padding: '1rem 0' }}>{children}</Box>}
    </Box>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function IconLabelTabs({
  onAddLocation,
  onDeleteMessage,
  onZoomMap,
  handleZoomMap,
  onRemoveLocation,
  messages,
  location,
  onSendMessage,
  pet,
  comments,
}) {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
  const { user } = useContext(AuthContext);
  const [value, setValue] = useState(0);
  const { t } = useTranslation();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleDelete = (commentId) => {
    onDeleteMessage(commentId);
  };

  const handleZoom = (coordinates) => {
    onZoomMap(coordinates);
    console.log(coordinates, 'zoom to map');
  };

  useEffect(() => {
    async function loadLocale() {
      if (selectedLanguage === 'ru') {
        await import('moment/locale/ru');
        moment.locale('ru');
      } else if (selectedLanguage === 'lv') {
        await import('moment/locale/lv');
        moment.locale('lv');
      } else {
        moment.locale('en'); // Default to English if no match
      }
    }

    loadLocale();
  }, [selectedLanguage]);

  const [open, setOpen] = useState(false); // State for controlling the image modal
  const [selectedImage, setSelectedImage] = useState(null); // State to track selected image for modal
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // const colorNameToHex = (colorName) => {
  //   const colors = {
  //     Verdigris: '#43BFC1',
  //     Coral: '#FF7F50',
  //     Mango: '#F5A300',
  //     Orchid: '#DA70D6',
  //     Salmon: '#FA8072',
  //     Thistle: '#D8BFD8',
  //     Lavender: '#E6E6FA',
  //     Puce: '#CC8899',
  //     Pearl: '#F0EAD6',
  //     Brass: '#B5A642',
  //     Pistachio: '#93C572',
  //     Peridot: '#E6E26A',
  //     Alabaster: '#FAFAFA',
  //     Pink: '#FFC0CB',
  //     Eucalyptus: '#4A6A6A',
  //     Pewter: '#8A8D8F',
  //   };
  //   return colors[colorName] || '#FFFFFF'; // Default to white if color not found
  // };

  // const color = colorNameToHex(user.color);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const getHealthInformationLabel = (value) => {
    const options = t('selectOptions.healthInformationOptions', { returnObjects: true });
    const option = options.find((option) => option.value === value);
    return option ? option.label : '';
  };

  return (
    <div sx={{ margin: '0', padding: '0' }}>
      {/* {user.id === pet.author ? <p>pet author</p> : <p>not pet author</p>} */}
      <div style={{ margin: '2rem 0' }}>
        <Tabs
          value={value}
          centered
          onChange={handleChange}
          variant="fullWidth"
          aria-label="basic tabs example"
        >
          <Tab
            icon={<MessageIcon />}
            label={t('tabTitles.messages')}
            sx={{ fontSize: '0.7rem' }}
            {...a11yProps(2)}
          />
          <Tab
            icon={<AirlineStopsIcon />}
            label={t('tabTitles.history')}
            sx={{ fontSize: '0.7rem' }}
            {...a11yProps(3)}
          />
          <Tab
            icon={<NotesIcon />}
            label={t('tabTitles.notes')}
            sx={{ fontSize: '0.7rem' }}
            {...a11yProps(0)}
          />

          <Tab
            icon={<ContactPageIcon />}
            label={t('tabTitles.contacts')}
            sx={{ fontSize: '0.7rem' }}
            {...a11yProps(3)}
          />
        </Tabs>
      </div>

      <TabPanel value={value} index={0}>
        <Grid container>
          {/* {user && (
            <ChatComponent
              user={user}
              location={location}
              onSendMessage={onSendMessage} // Ensure this prop is passed correctly
              onAddLocation={onAddLocation}
              onRemoveLocation={onRemoveLocation}
              pet={pet}
            />
          )} */}

          {comments && comments.length > 0 ? (
            comments.map((comment) => (
              <Grid
                key={comment._id} // Add this line
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                style={{ paddingLeft: '0', marginBottom: '1rem' }}
              >
                <Card style={{ width: '100%' }}>
                  <CardContent>
                    <Grid container spacing={2}>
                      {/* Left section (avatar, author info, text) */}
                      <Grid item xs={12} md={8}>
                        <Box display="flex" alignItems="flex-start">
                          <Avatar
                            style={{
                              background: comment.author?.color,
                              // width: '64px',
                              // height: '64px',
                            }}
                            alt={comment.author?.avatar}
                            src={comment.author?.avatar + '.svg'}
                          ></Avatar>

                          <Box ml={2}>
                            <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                              {comment.author?.username}
                            </Typography>
                            <Box display="flex" alignItems="center">
                              {comment.author && comment.author.isVerified && (
                                <Tooltip title="Verified user">
                                  <VerifiedIcon
                                    fontSize="small"
                                    color="primary"
                                    style={{ marginLeft: '0.5rem' }}
                                  />
                                </Tooltip>
                              )}
                            </Box>
                            <Typography variant="body2" color="textSecondary">
                              {moment(comment.createdAt).fromNow()}
                            </Typography>
                          </Box>
                        </Box>
                        <Box mt={1}>
                          <Typography variant="body1" style={{ color: '#333' }}>
                            {comment.text}
                          </Typography>
                        </Box>
                      </Grid>

                      {/* Right section (image and buttons) */}
                      <Grid item xs={12} md={4}>
                        <Box position="relative">
                          {comment.image ? (
                            <CardMedia
                              component="img"
                              style={{
                                borderRadius: '8px',
                                cursor: 'pointer',
                                maxWidth: '100%',
                                height: 'auto',
                              }}
                              image={comment.image}
                              onClick={() => handleOpen(comment.image)}
                            />
                          ) : (
                            <Box
                              sx={{
                                borderRadius: '8px',
                                backgroundColor: '#f0f0f0',
                                height: '100px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                            >
                              <Typography variant="body2" color="textSecondary">
                                No image provided
                              </Typography>
                            </Box>
                          )}
                          {/* Show image modal */}
                          <Modal
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                              timeout: 500,
                            }}
                          >
                            <Fade in={open}>
                              <Box
                                sx={{
                                  position: 'absolute',
                                  top: isSmallScreen ? '0' : '50%',
                                  left: '50%',
                                  transform: isSmallScreen
                                    ? 'translate(-50%, 0)'
                                    : 'translate(-50%, -50%)',
                                  width: isSmallScreen ? '100%' : 'auto',
                                  height: isSmallScreen ? '100%' : 'auto',
                                  maxWidth: isSmallScreen ? '100%' : '90vw',
                                  maxHeight: isSmallScreen ? '100%' : '90vh',
                                  outline: 'none',
                                  backgroundColor: 'rgba(0, 0, 0, 0.8)',

                                  borderRadius: isSmallScreen ? '0' : '8px',
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}
                              >
                                {/* Close button for small screens */}
                                {isSmallScreen && (
                                  <IconButton
                                    aria-label="close"
                                    onClick={handleClose}
                                    sx={{
                                      position: 'absolute',
                                      top: '10px',
                                      right: '10px',
                                      color: '#fff',
                                    }}
                                  >
                                    <CloseIcon />
                                  </IconButton>
                                )}
                                {selectedImage ? (
                                  <img
                                    src={selectedImage}
                                    alt="Modal"
                                    style={{
                                      borderRadius: isSmallScreen ? '0' : '8px',
                                      width: '100%',
                                      height: 'auto',
                                    }}
                                  />
                                ) : (
                                  <Box
                                    sx={{
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      height: '100%',
                                      color: '#888',
                                    }}
                                  >
                                    <Typography variant="body2">No image to display</Typography>
                                  </Box>
                                )}
                              </Box>
                            </Fade>
                          </Modal>
                        </Box>
                      </Grid>

                      {/* Buttons section */}
                      <Grid item xs={12}>
                        <Box display="flex" justifyContent="space-between">
                          {/* <Tooltip title="Show on map">
                            <IconButton
                              variant="contained"
                              onClick={() => handleZoom(comment.location.coordinates)}
                              style={{ backgroundColor: '#555', color: '#fff' }}
                            >
                              <LocationOnIcon />
                            </IconButton>
                          </Tooltip> */}
                          <Tooltip title="Show on map">
                            <IconButton
                              variant="contained"
                              onClick={() => handleZoom(comment.location.coordinates)}
                              style={{
                                backgroundColor:
                                  !comment.location || !comment.location.coordinates
                                    ? '#ccc'
                                    : '#555',
                                color:
                                  !comment.location || !comment.location.coordinates
                                    ? '#888'
                                    : '#fff',
                              }}
                              disabled={!comment.location || !comment.location.coordinates}
                            >
                              {comment.location && comment.location.coordinates ? (
                                <LocationOnIcon />
                              ) : (
                                <LocationOffIcon />
                              )}
                            </IconButton>
                          </Tooltip>

                          {user && user.id === comment.author?._id && (
                            <Tooltip title="Delete message">
                              {/* <Button
                                variant="contained"
                                color="secondary"
                                endIcon={<DeleteIcon />}
                                size="small"
                                style={{ background: '#d32f2f' }}
                                onClick={() => handleDelete(comment._id)} // Add this line
                              >
                                Delete
                              </Button> */}

                              <IconButton
                                variant="contained"
                                onClick={() => handleDelete(comment._id)}
                                style={{ backgroundColor: '#d32f2f', color: '#fff' }}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </Tooltip>
                          )}
                        </Box>
                      </Grid>
                    </Grid>
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
        {/* <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          style={{ paddingLeft: '0', textAlign: 'center' }}
        >
          <Button>Show More</Button>
        </Grid> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container>
          <LocationHistory pet={pet} />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container>
          <Grid item xs={12} style={{ paddingLeft: '0' }}>
            {/* <Box mb={3}>
              <Box display="flex" alignItems="center" mb={1}>
                <LocalHospitalIcon />
                <Typography variant="h6" style={{ fontSize: '1rem' }} ml={1} fontWeight="bold">
                  {t('formLabels.healthInformation')}
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
                              label={getHealthInformationLabel(item)}
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
            </Box> */}

            <Box>
              <Box display="flex" alignItems="center" mb={1}>
                <FeedIcon />
                <Typography variant="h6" ml={1} style={{ fontSize: '1rem' }} fontWeight="bold">
                  {t('formLabels.notes')}
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
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingLeft: '0' }}>
            <Box mb={3}>
              <Box display="flex" alignItems="center" mb={1}>
                {/* <PersonIcon /> */}
                <AccountBoxIcon />
                <Typography variant="h6" style={{ fontSize: '1rem' }} ml={1} fontWeight="bold">
                  {t('iconLabelTabs.contactPerson')}
                </Typography>
              </Box>
              <Card style={{ width: '100%' }}>
                <CardContent>
                  <Box display="flex" alignItems="center" gap={2} mb={2}>
                    <Avatar
                      style={{ background: pet.author.color }}
                      alt={pet.author?.username}
                      src={pet.author?.avatar + '.svg'}
                    />

                    <Typography variant="body1">{pet.author?.username}</Typography>
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
                      {pet.phoneCode ? pet.phoneCode : ''} {pet.phone ? pet.phone : 'N/A'}
                    </Typography>
                  </Box>

                  {/* <Box display="flex" alignItems="center" gap={2} style={{ marginTop: '1rem' }}>
                    <Avatar style={{ background: '#555' }}>
                      <EmailIcon />
                    </Avatar>
                    <Typography variant="body1">{pet.email ? pet.email : 'N/A'}</Typography>
                  </Box> */}
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </TabPanel>
    </div>
  );
}
// IconLabelTabs.propTypes = {
//   onAddLocation: PropTypes.func.isRequired,
//   onDeleteMessage: PropTypes.func.isRequired,
//   onRemoveLocation: PropTypes.func.isRequired,
//   messages: PropTypes.array.isRequired,
//   location: PropTypes.object,
//   onSendMessage: PropTypes.func.isRequired,
//   pet: PropTypes.object.isRequired,
//   comments: PropTypes.array.isRequired,
// };

export default IconLabelTabs;

// PropTypes.func: Ensures the prop is a function.
// PropTypes.array: Ensures the prop is an array.
// PropTypes.object: Ensures the prop is an object.
// PropTypes.string: Ensures the prop is a string.
// PropTypes.number: Ensures the prop is a number.
// PropTypes.bool: Ensures the prop is a boolean.
// PropTypes.node: Ensures the prop is a React node (anything that can be rendered: numbers, strings, elements, or an array containing these types).
