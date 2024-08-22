import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  CircularProgress,
  Box,
} from '@mui/material';

import { BASE_URL } from '../../middleware/config';
import FacebookIcon from '@mui/icons-material/Facebook';

import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import RedditIcon from '@mui/icons-material/Reddit';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
// Placeholder icon for social media platforms
const getIcon = (platform) => {
  // Define icon mapping based on platform name or other properties
  switch (platform) {
    case 'Facebook':
      return <FacebookIcon />; // Use an actual icon or component if available
    case 'X':
      return <XIcon />;
    case 'Instagram':
      return <InstagramIcon />;
    case 'LinkedIn':
      return <LinkedInIcon />;
    case 'YouTube':
      return <YouTubeIcon />;
    case 'Pinterest':
      return <PinterestIcon />;
    case 'WhatsApp':
      return <WhatsAppIcon />;
    case 'Telegram':
      return <TelegramIcon />;
    case 'Reddit':
      return <RedditIcon />;
    case 'TikTok':
      return <MusicNoteIcon />;
    case 'Threads':
      return <AlternateEmailIcon />;
    default:
      return '🌐';
  }
};

const SocialsList = () => {
  const [platforms, setPlatforms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPlatforms = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/social-media-platforms`);
        setPlatforms(response.data);
      } catch (error) {
        setError('Failed to load social media platforms');
      } finally {
        setLoading(false);
      }
    };

    fetchPlatforms();
  }, []);

  return (
    <Box mt={3}>
      <Typography variant="h6" gutterBottom>
        Social Media Platforms
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <List>
          {platforms.map((platform) => (
            <ListItem key={platform._id}>
              <ListItemIcon>
                <span style={{ fontSize: '24px' }}>{getIcon(platform.name)}</span>
              </ListItemIcon>
              <ListItemText primary={platform.name} secondary={platform.iconUrl} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default SocialsList;
