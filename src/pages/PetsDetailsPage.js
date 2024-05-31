// import React from "react";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Box from "@mui/material/Box";
// import { Link } from "react-router-dom";

// // Import MUI Icons
// import AppShortcutIcon from "@mui/icons-material/AppShortcut";
// import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
// import ArticleIcon from "@mui/icons-material/Article";
// import NewspaperIcon from "@mui/icons-material/Newspaper";
// import PostAddIcon from "@mui/icons-material/PostAdd";
// import ShareIcon from "@mui/icons-material/Share";
// import StorageIcon from "@mui/icons-material/Storage";
// import TuneIcon from "@mui/icons-material/Tune";
// import MapIcon from "@mui/icons-material/Map";
// import PrintIcon from "@mui/icons-material/Print";
// import WorkIcon from "@mui/icons-material/Work";
// import PushPinIcon from "@mui/icons-material/PushPin";
// import GroupsIcon from "@mui/icons-material/Groups";
// import TomTomMap from "../components/map/TomTomClusterMap";
// import PetsIcon from "@mui/icons-material/Pets"; // Example MUI icon
// import { Avatar, Button } from "@mui/material";
// import ChatComponent from "../components/map/ChatComponent";

// const PetsDetailsPage = () => {
//   return (
//     <React.Fragment>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={12} md={12} lg={12}>
//           <TomTomMap />
//         </Grid>
//         <Grid item xs={12} sm={12} md={6} lg={6}>
//           <div
//             style={{
//               width: "500px",
//               height: "400px",
//               backgroundColor: "lightgray",
//             }}
//           ></div>
//         </Grid>
//         <Grid item xs={12} sm={12} md={6} lg={6}>
//           <ChatComponent />
//           {/* <Card>
//             <CardContent>
//               <Avatar>A</Avatar>
//             </CardContent>
//           </Card> */}
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// };

// export default PetsDetailsPage;
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import {
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   CircularProgress,
//   Box,
// } from "@mui/material";
// import { BASE_URL } from "../middleware/config";
// import TomTomMap from "../components/map/TomTomMap";
// import ChatComponent from "../components/map/ChatComponent";

// const PetsDetailsPage = () => {
//   const { id } = useParams();
//   console.log("petId", id);
//   const [pet, setPet] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPet = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/pets/${id}`);
//         setPet(response.data);
//       } catch (error) {
//         console.error("Error fetching pet details:", error.message);
//         setError("Error fetching pet details");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPet();
//   }, [id]);

//   if (loading) {
//     return <CircularProgress />;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!pet) {
//     return <div>No pet found</div>;
//   }

//   return (
//     <React.Fragment>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={12} md={12} lg={12}>
//           <TomTomMap />
//         </Grid>
//         <Grid item xs={12} sm={12} md={6} lg={6}>
//           <Card>
//             <CardMedia
//               component="img"
//               alt={pet.petStatus}
//               height="400"
//               image={pet.petImage || "/default_pet_image.jpg"}
//               title={pet.petStatus}
//             />
//             <CardContent>
//               <Typography variant="body2" color="textSecondary">
//                 Status: {pet.petStatus}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Category: {pet.petCategory}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Identifier: {pet.petIdentifier}
//               </Typography>

//               <Typography variant="body2" color="textSecondary">
//                 Size: {pet.petSize}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Gender: {pet.petGender}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Behavior: {pet.petBehavior}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Age: {pet.petAge}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Breed: {pet.petBreed}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Main Color: {pet.mainColor}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Marking Pattern: {pet.markingPattern}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Marking Colors: {pet.markingColors}
//               </Typography>

//               <Typography variant="body2" color="textSecondary">
//                 Lost Or Found Date: {pet.petLostOrFoundDate}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Lost Or Found Time: {pet.petLostOrFoundTime}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Phone: {pet.contactPhone}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Email: {pet.contactEmail}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Notes {pet.notes}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={12} md={6} lg={6}>
//           <ChatComponent />
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// };

// export default PetsDetailsPage;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Box,
  Icon,
  CardHeader,
  CardActions,
  Avatar,
  Button,
  IconButton,
} from "@mui/material";
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
} from "@mui/icons-material";
import CakeIcon from "@mui/icons-material/Cake";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import DownloadIcon from "@mui/icons-material/Download";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import EventIcon from "@mui/icons-material/Event";
import TextureIcon from "@mui/icons-material/Texture";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import { BASE_URL } from "../middleware/config";
import TomTomMapDetails from "../components/map/TomTomMapDetails";
import ChatComponent from "../components/map/ChatComponent";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import MessageIcon from "@mui/icons-material/Message";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import FlagIcon from "@mui/icons-material/Flag";
import MapIcon from "@mui/icons-material/Map";
import ChecklistIcon from "@mui/icons-material/Checklist";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocationHistory from "../components/petcard/LocationHistory";
import VerifiedIcon from "@mui/icons-material/Verified";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import LocationOffIcon from "@mui/icons-material/LocationOff";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";

// Example data
const locations = [
  {
    lat: 56.752259533288,
    lng: 24.389414976480396,
    user: "John Doe",
    timestamp: "2024-05-24T19:47:59.420Z",
  },
  {
    lat: 56.854657543288,
    lng: 24.475894976480396,
    user: "Jane Smith",
    timestamp: "2024-05-23T17:30:45.320Z",
  },
  // Add more locations as needed
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function IconLabelTabs({ pet }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          centered
          onChange={handleChange}
          aria-label="basic tabs example"
          style={{ paddingRight: "0 !important" }}
        >
          <Tab
            icon={<NotesIcon />}
            label="NOTES"
            sx={{ fontSize: "0.7rem" }}
            {...a11yProps(0)}
          />
          <Tab
            icon={<LocalHospitalIcon />}
            label="HEALTH"
            sx={{ fontSize: "0.7rem" }}
            {...a11yProps(1)}
          />
          <Tab
            icon={<MessageIcon />}
            label="MESSAGES"
            sx={{ fontSize: "0.7rem" }}
            {...a11yProps(2)}
          />
          <Tab
            icon={<ContactPageIcon />}
            label="CONTACTS"
            sx={{ fontSize: "0.7rem" }}
            {...a11yProps(3)}
          />
          <Tab
            icon={<AirlineStopsIcon />}
            label="HISTORY"
            sx={{ fontSize: "0.7rem" }}
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box>
          <Grid container spacing={1}>
            {/* <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                {pet.petIdentifier}
              </Typography>
            </Grid> */}
            {/* <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                <PetsIcon /> Status: {pet.petStatus}
              </Typography>
            </Grid> */}
            {/* <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <CategoryIcon /> Category: {pet.petCategory}
              </Typography>
            </Grid> */}
            {/* <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <TagIcon /> Identifier: {pet.petIdentifier}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <HeightIcon /> Size: {pet.petSize}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                Gender: {pet.petGender}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <MoodIcon /> Behavior: {pet.petBehavior}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <CalendarTodayIcon /> Age: {pet.petAge}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <MergeTypeIcon /> Breed: {pet.petBreed}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <ColorLensIcon /> Main Color: {pet.mainColor}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <EventNoteIcon /> Marking Pattern: {pet.markingPattern}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <ColorLensIcon /> Marking Colors: {pet.markingColors.join(", ")}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <CalendarTodayIcon /> Lost Or Found Date:{" "}
                {pet.petLostOrFoundDate}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <WatchLaterIcon /> Lost Or Found Time: {pet.petLostOrFoundTime}
              </Typography>
            </Grid> */}
            {/* <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                Contact Information
              </Typography>
            </Grid> */}
            {/* <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <PhoneIcon /> Phone: {pet.contactPhone}
              </Typography>
            </Grid> */}
            {/* <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <EmailIcon /> Email: {pet.contactEmail}
              </Typography>
            </Grid> */}
            <Grid container spacing={3}>
              <Grid item xs={12} style={{ paddingLeft: "0" }}>
                <Typography variant="body1" gutterBottom>
                  {pet.notes ? pet.notes : "No additional notes available."}
                </Typography>
              </Grid>
            </Grid>
            {/* <Grid container spacing={3}>
              <Grid item xs={12} style={{ paddingLeft: "0" }}>
                Location history (last seen)
              </Grid>
            </Grid> */}

            {/* <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                Created At: {pet.createdAt}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                Updated At: {pet.updatedAt}
              </Typography>
            </Grid> */}
          </Grid>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {/* <TomTomMapDetails pet={pet} /> */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Grid container spacing={3}>
          <ChatComponent />

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            style={{ paddingLeft: "0" }}
          >
            <Card style={{ width: "100%", backgroundColor: "#f5f5f5" }}>
              <CardContent>
                <Box
                  display="flex"
                  alignItems="center"
                  marginBottom="1rem"
                  padding="0.5rem"
                  style={{ backgroundColor: "#fff", borderRadius: "8px" }}
                >
                  <Avatar>L</Avatar>
                  <Box ml={2}>
                    <Typography variant="h6" component="div">
                      Leo Megven
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Typography variant="body2" color="textSecondary">
                        @Leven4232
                      </Typography>
                      <VerifiedIcon
                        fontSize="small"
                        style={{ marginLeft: "0.5rem", color: "#3f51b5" }}
                      />
                    </Box>
                    <Typography variant="body2" color="textSecondary">
                      2 days ago
                    </Typography>
                  </Box>
                </Box>
                <Box mb={2}>
                  <Typography variant="body1" style={{ color: "#333" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Tooltip title="Show on map">
                    <Button
                      variant="contained"
                      color="primary"
                      endIcon={<LocationOnIcon />}
                      size="small"
                      style={{ background: "#555" }}
                    >
                      Show on map
                    </Button>
                  </Tooltip>
                  <Tooltip title="Delete message">
                    <Button
                      variant="contained"
                      color="secondary"
                      endIcon={<DeleteIcon />}
                      size="small"
                      style={{ background: "#d32f2f" }}
                    >
                      Delete
                    </Button>
                  </Tooltip>
                </Box>
              </CardContent>
            </Card>
            {/* <Card>
              <CardContent>
                <Box
                  display="flex"
                  gap={1}
                  justifyContent="start"
                  alignItems="center"
                >
                  <Avatar>L</Avatar>
                  <Typography variant="body1">Leo Megven</Typography>
                  <Typography variant="body1" style={{ color: "#777" }}>
                    @Leven4232
                  </Typography>
                  <VerifiedIcon />
                  <Typography variant="body1" style={{ color: "#777" }}>
                    2 days ago
                  </Typography>
                </Box>
                <Box style={{ marginBottom: "1rem" }}>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Typography>
                </Box>

                <Box display="flex" justifyContent="space-between">
                  <Box>
                    <Button
                      variant="contained"
                      color="primary"
                      endIcon={<LocationOnIcon />}
                      size="small"
                      style={{ background: "#555" }}
                    >
                      Show on map
                    </Button>
                  </Box>

                  <Box>
                    <Button
                      variant="contained"
                      color="primary"
                      endIcon={<DeleteIcon />}
                      size="small"
                      style={{ background: "#555" }}
                    >
                      Delete
                    </Button>
                  </Box>
                </Box>

               <Tooltip title="Show coordinates">
                  <IconButton aria-label="Show coordinates">
                    <LocationOnIcon />
                  </IconButton>
                  Show on map
                </Tooltip>
              </CardContent>
            </Card> */}
          </Grid>
        </Grid>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            style={{ paddingLeft: "0" }}
          >
            <Card style={{ width: "100%" }}>
              <CardContent>
                {/* <Box
                  display="flex"
                  alignItems="center"
                  marginBottom="1rem"
                  padding="0.5rem"
                  style={{ backgroundColor: "#fff", borderRadius: "8px" }}
                >
                  <Avatar>{pet.contactEmail.charAt(0)}</Avatar>
                  <Box ml={2}>
                    <Typography variant="h6" component="div">
                      {pet.contactEmail}
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Typography variant="body2" color="textSecondary">
                        Contact Person
                      </Typography>
                      <VerifiedIcon
                        fontSize="small"
                        style={{ marginLeft: "0.5rem", color: "#3f51b5" }}
                      />
                    </Box>
                  </Box>
                </Box> */}
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <PhoneIcon style={{ color: "#ffc107" }} />
                  <Typography variant="body1">
                    <b>Phone:</b> {pet.contactPhone}
                  </Typography>
                </Box>

                <Box display="flex" alignItems="center" gap={2}>
                  <EmailIcon style={{ color: "#ffc107" }} />
                  <Typography variant="body1">
                    <b>Email:</b> {pet.contactEmail}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Grid container spacing={3}>
          <LocationHistory locations={locations} />
        </Grid>
      </CustomTabPanel>
    </Box>
  );
}
// const formattedText = `${mainColor} ${petCategory} is ${petStatus} since ${petLostOrFoundDate} at ${petLostOrFoundTime}. It is a ${petAge} ${petBreed} with a ${markingPattern} pattern and ${markingColors.join(', ')} markings. The pet's identifier is ${petIdentifier}, and it is described as ${petSize} in size, ${petGender} in gender, and ${petBehavior} in behavior. Notes: ${notes}. If found, please contact the owner at phone number ${contactPhone} or email at ${contactEmail}.`;
const PetsDetailsPage = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const createdAt = moment(pet.createdAt).fromNow();
  // const updatedAt = moment(pet.updatedAt).fromNow();

  const handleShare = async ({ enqueueSnackbar }) => {
    try {
      if (navigator.share) {
        // Use Web Share API if available
        await navigator.share({
          title: pet.petStatus,
          text: pet.petCategory,
          url: window.location.href,
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        throw new Error("Web Share API not supported");
      }
    } catch (error) {
      console.error("Error sharing pet:", error);
      // You can use the notistack to display an error message
      enqueueSnackbar("Error sharing pet. Please try again later.", {
        variant: "error",
      });
    }
  };

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/pets/${id}`);
        setPet(response.data);
      } catch (error) {
        console.error("Error fetching pet details:", error.message);
        setError("Error fetching pet details");
      } finally {
        setLoading(false);
      }
    };

    fetchPet();
  }, [id]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!pet) {
    return <div>No pet found</div>;
  }

  const genderIcon = pet.petGender === "Male" ? <MaleIcon /> : <FemaleIcon />;

  return (
    <Grid container spacing={3} padding={2}>
      {/* <Grid item xs={12}>
        <TomTomMapDetails pet={pet} />
      </Grid> */}
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom textAlign="center">
          <span style={{ textTransform: "capitalize" }}>{pet.petStatus}</span>{" "}
          <span style={{ textTransform: "capitalize" }}>{pet.petCategory}</span>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Card style={{ position: "relative" }}>
          {/* <CardActions>
            <Avatar>A</Avatar>
            <Typography variant="body1">antohysmith32</Typography>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </CardActions> */}

          <CardMedia
            component="img"
            alt={pet.petStatus}
            height="400"
            image={pet.petImage || "/default_pet_image.jpg"}
            title={pet.petStatus}
          />
          <Box
            style={{ position: "absolute", top: -20, right: 0, zIndex: 999 }}
          >
            <IconButton
              aria-label="add to favorites"
              sx={{
                position: "absolute",
                top: "40px",
                right: "20px",
                background: "#FFFFFF", // Customize as needed
              }}
            >
              <FavoriteIcon />
            </IconButton>

            <IconButton
              aria-label="Download"
              sx={{
                position: "absolute",
                top: "95px",
                right: "20px",
                background: "#FFFFFF", // Customize as needed
              }}
            >
              <DownloadIcon />
            </IconButton>

            <IconButton
              aria-label="Share"
              sx={{
                position: "absolute",
                top: "150px",
                right: "20px",
                background: "#FFFFFF", // Customize as needed
              }}
              onClick={handleShare}
            >
              <ShareIcon />
            </IconButton>
          </Box>
          <Box
            display="flex"
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Box display="flex" alignItems="center" p={2}>
              <VisibilityIcon color="action" />
              <Typography variant="body2" color="textSecondary" ml={1}>
                123 views
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
        {/* <TomTomMapDetails pet={pet} /> */}
        <Box>
          <Grid container spacing={1}>
            {/* <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                {pet.petIdentifier}
              </Typography>
            </Grid> */}
            {/* <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                <PetsIcon /> Status: {pet.petStatus}
              </Typography>
            </Grid> */}
            {/* <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <CategoryIcon /> Category: {pet.petCategory}
              </Typography>
            </Grid> */}
            <Grid item xs={12} mb={1}>
              <Box
                gap={1}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <TagIcon /> <b>Identifier:</b> {pet.petIdentifier}
                <Typography variant="body1" gutterBottom></Typography>
              </Box>
            </Grid>
            <Grid item xs={12} mb={1}>
              <Box
                gap={1}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <HeightIcon /> <b>Size:</b> {pet.petSize}
                <Typography variant="body1" gutterBottom></Typography>
              </Box>
            </Grid>
            <Grid item xs={12} mb={1}>
              <Box
                gap={1}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <MaleIcon /> <b>Gender:</b> {pet.petGender}
                <Typography variant="body1" gutterBottom></Typography>
              </Box>
            </Grid>
            <Grid item xs={12} mb={1}>
              <Box
                gap={1}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <MoodIcon /> <b>Behavior:</b> {pet.petBehavior}
                <Typography variant="body1" gutterBottom></Typography>
              </Box>
            </Grid>
            <Grid item xs={12} mb={1}>
              <Box
                gap={1}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <CakeIcon /> <b>Age:</b> {pet.petAge}
                <Typography variant="body1" gutterBottom></Typography>
              </Box>
            </Grid>
            <Grid item xs={12} mb={1}>
              <Box
                gap={1}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <MergeTypeIcon /> <b>Breed:</b> {pet.petBreed}
                <Typography variant="body1" gutterBottom></Typography>
              </Box>
            </Grid>
            <Grid item xs={12} mb={1}>
              <Box
                gap={1}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <ColorLensIcon /> <b>Main Color:</b> {pet.mainColor}
                <Typography variant="body1" gutterBottom></Typography>
              </Box>
            </Grid>
            <Grid item xs={12} mb={1}>
              <Box
                gap={1}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <TextureIcon /> <b>Marking Pattern:</b> {pet.markingPattern}
                <Typography variant="body1" gutterBottom></Typography>
              </Box>
            </Grid>
            <Grid item xs={12} mb={1}>
              <Box
                gap={1}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <ColorLensIcon /> <b>Marking Colors:</b>{" "}
                {pet.markingColors.join(", ")}
                <Typography variant="body1" gutterBottom></Typography>
              </Box>
            </Grid>
            <Grid item xs={12} mb={1}>
              <Box
                gap={1}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <EventIcon />{" "}
                <span style={{ textTransform: "capitalize" }}>
                  <b>{pet.petStatus}</b>
                </span>
                <b>Date:</b> {pet.petLostOrFoundDate}
              </Box>
            </Grid>
            <Grid item xs={12} mb={1}>
              <Box
                gap={1}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <WatchLaterIcon />
                <span style={{ textTransform: "capitalize" }}>
                  <b>{pet.petStatus}</b>
                </span>
                <b>Time:</b> {pet.petLostOrFoundTime}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Card style={{ border: "none", boxShadow: "none" }}>
                <CardContent style={{ padding: "0" }}>
                  <Box style={{ display: "flex" }}>
                    <Typography
                      fontSize="small"
                      variant="body1"
                      style={{ color: "gray" }}
                    >
                      Created {moment(pet.createdAt).fromNow()}{" "}
                      <span>&nbsp;&nbsp;&nbsp;</span>|
                      <span>&nbsp;&nbsp;&nbsp;</span>
                      Updated {moment(pet.updatedAt).fromNow()}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                Created At: {pet.createdAt}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                Updated At: {pet.updatedAt}
              </Typography>
            </Grid> */}
          </Grid>
        </Box>
      </Grid>
      {/* <Grid item xs={12}>
        <Card style={{ border: "none", boxShadow: "none" }}>
          <CardContent style={{ padding: "0" }}>
            <Box style={{ display: "flex" }}>
              <Typography
                fontSize="small"
                variant="body1"
                style={{ color: "gray" }}
              >
                Created {moment(pet.createdAt).fromNow()}{" "}
                <span>&nbsp;&nbsp;&nbsp;</span>|<span>&nbsp;&nbsp;&nbsp;</span>
                Updated {moment(pet.updatedAt).fromNow()}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid> */}
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <TomTomMapDetails pet={pet} />
      </Grid>

      {/* <Grid item xs={12} sm={12} md={6} lg={6}>
        aaa
      </Grid> */}
      {/* <Grid item xs={12} sm={12} md={6} lg={6}>
        <ChatComponent />
      </Grid> */}

      <Grid item xs={12} sm={12} md={12} lg={12}>
        <IconLabelTabs pet={pet} />
      </Grid>

      {/* <Grid item xs={12}>
        <Card>
          <CardContent>
            <Box style={{ display: "flex" }}>
              <Typography
                fontSize="small"
                variant="body1"
                style={{ color: "gray" }}
              >
                Created At: {moment(pet.createdAt).fromNow()} | Updated At:{" "}
                {moment(pet.updatedAt).fromNow()}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid> */}
    </Grid>
  );
};

export default PetsDetailsPage;
