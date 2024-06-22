// export default PetsDetailsPage;
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
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

const PetsPosterPage = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  const { selectedLanguage } = useContext(LanguageContext); // Use LanguageContext to get selectedLanguage

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/pets/${id}`);
        setPet(response.data);
      } catch (error) {
        console.error('Error fetching pet details:', error.message);
        setError('Error fetching pet details');
      } finally {
        setLoading(false);
      }
    };

    fetchPet();
  }, [id, selectedLanguage]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
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
  return (
    <Grid container spacing={3} padding={2}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Poster pet={pet} />
      </Grid>
    </Grid>
  );
};

export default PetsPosterPage;
