import React, { useState } from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import jsPDF from 'jspdf';
import html2PDF from 'html2pdf.js';

import MessageIcon from '@mui/icons-material/Message';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { BASE_URL, DOMAIN_URL } from '../middleware/config';
// import { QRCode } from "react-qr-svg"; // Import QRCode component
import QRCode from 'react-qr-code'; // Updated import statement
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SupportImg from '../images/dog_paw_bro.svg';
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
import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Icon,
  Chip,
  CardHeader,
  CardActions,
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import TextureIcon from '@mui/icons-material/Texture';
import CakeIcon from '@mui/icons-material/Cake';
import FeedIcon from '@mui/icons-material/Feed';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { LanguageContext } from '../middleware/LanguageContext';
import { useTranslation } from 'react-i18next';

const DisplayComponent = ({ pet }) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();
  const [isGenerating, setIsGenerating] = useState(false);
  const [isReady, setIsReady] = useState(false);

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
  return (
    <Grid
      container
      id="page"
      sx={{
        padding: 3,
        // border: '1px solid #ccc',
        // borderRadius: '8px',
        // boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
      }}
    >
      <Grid item xs={12} mb={2} style={{ padding: '0 !important' }}>
        <Box
          style={{
            width: '100%',
            background: 'darkred',
            padding: '1rem 0',
            marginBottom: '1rem',
          }}
        >
          <Typography
            variant="h1"
            textAlign="center"
            style={{
              textTransform: 'uppercase',
              fontWeight: '700',
              color: '#fff',
              fontSize: isSmallScreen ? '1rem' : '3rem',
            }}
          >
            {getInitialStatusLabel(pet.initialStatus)} {getCategoryLabel(pet.category)}
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            style={{
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontSize: isSmallScreen ? '0.8rem' : '1rem',
            }}
          >
            {t(`posterTitles.haveYouSeen`)}!
          </Typography>
        </Box>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={5} sm={5} md={5} lg={5}>
          {pet.identifier && (
            <Grid item xs={12} sm={12} mb={2}>
              <Box
                gap={1}
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  fontSize: isSmallScreen ? '0.6rem' : '1rem',
                }}
              >
                <TagIcon style={{ fontSize: isSmallScreen ? '0.6rem' : '1rem' }} />
                <b> {t(`formLabels.identifier`)}:</b>{' '}
                <span style={{ textTransform: 'capitalize' }}>
                  {pet.identifier ? pet.identifier : 'N/A'}
                </span>
              </Box>
            </Grid>
          )}
          {pet.gender && (
            <Grid item xs={12} sm={12} mb={2}>
              <Box
                gap={1}
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  fontSize: isSmallScreen ? '0.6rem' : '1rem',
                }}
              >
                <MaleIcon style={{ fontSize: isSmallScreen ? '0.6rem' : '1rem' }} />{' '}
                <b>{t(`formLabels.gender`)}:</b>{' '}
                <span style={{ textTransform: 'capitalize' }}>{getGenderLabel(pet.gender)}</span>
              </Box>
            </Grid>
          )}
          {pet.size && (
            <Grid item xs={12} sm={12} mb={2}>
              <Box
                gap={1}
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  fontSize: isSmallScreen ? '0.6rem' : '1rem',
                }}
              >
                <HeightIcon style={{ fontSize: isSmallScreen ? '0.6rem' : '1rem' }} />{' '}
                <b>{t(`formLabels.size`)}:</b>{' '}
                <span style={{ textTransform: 'capitalize' }}>{getSizeLabel(pet.size)}</span>
              </Box>
            </Grid>
          )}
          {/* <Grid item xs={12} sm={12} mb={2}>
            <Box
              gap={1}
              style={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                fontSize: isSmallScreen ? '0.6rem' : '1rem',
              }}
            >
              <MoodIcon style={{ fontSize: isSmallScreen ? '0.6rem' : '1rem' }} />{' '}
              <b> {t(`formLabels.behavior`)}:</b>{' '}
              <span style={{ textTransform: 'capitalize' }}>
                {pet.behavior ? pet.behavior : 'N/A'}
              </span>
            </Box>
          </Grid> */}
          {pet.age && (
            <Grid item xs={12} sm={12} mb={2}>
              <Box
                gap={1}
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  fontSize: isSmallScreen ? '0.6rem' : '1rem',
                }}
              >
                <CakeIcon style={{ fontSize: isSmallScreen ? '0.6rem' : '1rem' }} />{' '}
                <b>{t(`formLabels.age`)}:</b>{' '}
                <span style={{ textTransform: 'capitalize' }}>{getAgeLabel(pet.age)}</span>
              </Box>
            </Grid>
          )}
          {pet.breed && (
            <Grid item xs={12} sm={12} mb={2}>
              <Box
                gap={1}
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  fontSize: isSmallScreen ? '0.6rem' : '1rem',
                }}
              >
                <MergeTypeIcon style={{ fontSize: isSmallScreen ? '0.6rem' : '1rem' }} />{' '}
                <b>{t(`formLabels.subcategory`)}:</b>{' '}
                <span style={{ textTransform: 'capitalize' }}>{getBreedLabel(pet.breed)}</span>
              </Box>
            </Grid>
          )}
          {pet.mainColor.hex && (
            <Grid item xs={12} sm={12} mb={2}>
              <Box
                gap={1}
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  fontSize: isSmallScreen ? '0.6rem' : '1rem',
                }}
              >
                <ColorLensIcon style={{ fontSize: isSmallScreen ? '0.6rem' : '1rem' }} />{' '}
                <b>{t(`formLabels.mainColor`)}:</b>{' '}
                <span style={{ textTransform: 'capitalize' }}>
                  {getMainColorLabel(pet.mainColor.hex)}
                </span>
              </Box>
            </Grid>
          )}
          {pet.markingPattern && (
            <Grid item xs={12} sm={12} mb={2}>
              <Box
                gap={1}
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  fontSize: isSmallScreen ? '0.6rem' : '1rem',
                }}
              >
                <TextureIcon style={{ fontSize: isSmallScreen ? '0.6rem' : '1rem' }} />{' '}
                <b>{t(`formLabels.markings`)}:</b>{' '}
                <span style={{ textTransform: 'capitalize' }}>
                  {getMarkingLabel(pet.markingPattern)}
                </span>
              </Box>
            </Grid>
          )}
          {pet.markingColors.length > 0 && (
            <Grid item xs={12} sm={12} mb={2}>
              <Box
                gap={1}
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  fontSize: isSmallScreen ? '0.6rem' : '1rem',
                }}
              >
                <ColorLensIcon style={{ fontSize: isSmallScreen ? '0.6rem' : '1rem' }} />{' '}
                <b>{t('formLabels.markingColors')}:</b>{' '}
                <span style={{ textTransform: 'capitalize' }}>
                  {pet.markingColors && pet.markingColors.length > 0
                    ? pet.markingColors.map((color, index) => (
                        <React.Fragment key={index}>
                          <span>{getMainColorLabel(color.hex)}</span>
                          {index !== pet.markingColors.length - 1 && ', '}
                        </React.Fragment>
                      ))
                    : 'N/A'}
                </span>
              </Box>
            </Grid>
          )}
          {pet.date && (
            <Grid item xs={12} sm={12} mb={2}>
              <Box
                gap={1}
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  fontSize: isSmallScreen ? '0.6rem' : '1rem',
                }}
              >
                <EventIcon style={{ fontSize: isSmallScreen ? '0.6rem' : '1rem' }} />{' '}
                <b>{t(`formLabels.date`)}:</b> {pet.date}
              </Box>
            </Grid>
          )}
          {pet.time && (
            <Grid item xs={12} sm={12} mb={2}>
              <Box
                gap={1}
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  fontSize: isSmallScreen ? '0.6rem' : '1rem',
                }}
              >
                <WatchLaterIcon style={{ fontSize: isSmallScreen ? '0.6rem' : '1rem' }} />
                <b>{t(`formLabels.time`)}:</b> {pet.time}
              </Box>
            </Grid>
          )}
        </Grid>
        <Grid item xs={7} sm={7} md={7} lg={7}>
          <Grid item xs={12} sm={12}>
            {/* <Grid item xs={12}> */}
            {pet.mainImage && (
              <Grid
                item
                xs={12}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  // marginBottom: "1rem",
                }}
              >
                {/* <img
                src={pet.mainImage}
                alt={pet.name}
                style={{ maxWidth: "100%", height: "auto", marginTop: "20px" }}
              /> */}
                <img
                  src={pet.mainImage}
                  alt={pet.name}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    // marginTop: "20px",
                  }}
                />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} mb={1}>
          {pet.notes && (
            <Box>
              <Box display="flex" alignItems="center" mb={1}>
                <FeedIcon style={{ fontSize: isSmallScreen ? '0.6rem' : '1rem' }} />
                <Typography
                  variant="h6"
                  ml={1}
                  style={{ fontSize: isSmallScreen ? '0.8rem' : '1rem' }}
                  fontWeight="bold"
                >
                  {t(`posterLabels.additionalInfo`)}:
                </Typography>
              </Box>

              <Typography variant="body2" style={{ fontSize: isSmallScreen ? '0.6rem' : '1rem' }}>
                {pet.notes ? pet.notes : 'No additional information given.'}
              </Typography>
            </Box>
          )}
        </Grid>
      </Grid>

      <Box style={{ background: 'darkred', padding: '1rem 0', width: '100%' }}>
        <Typography
          variant="h6"
          textAlign="center"
          style={{
            textTransform: 'uppercase',
            fontWeight: '700',
            color: '#fff',
            fontSize: isSmallScreen ? '0.7rem' : '1rem',
          }}
        >
          {t(`posterTitles.contact`)}
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          style={{
            color: '#fff',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontSize: isSmallScreen ? '0.6rem' : '1rem',
          }}
        >
          {pet.phoneCode} {pet.phone}
        </Typography>
      </Box>
      <Box
        id="page"
        // sx={{
        //   padding: 4,
        //   border: "1px solid #ccc",
        //   borderRadius: "8px",
        //   boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        //   backgroundColor: "#fff",
        // }}
      >
        {/* Your existing poster content */}
        {/* QR code section */}
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '1rem',
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            style={{
              marginRight: '1rem',
            }}
            mt={2}
          >
            {/* <Typography variant="h5" gutterBottom>
                Scan to view details and follow up on the pet
              </Typography> */}
            {/* Generate QR code with pet ID or any relevant information */}
            <QRCode
              value={`${DOMAIN_URL}/pets/${pet._id}`} // Change URL to your endpoint or pet details page
              style={{ width: isSmallScreen ? 100 : 200, height: isSmallScreen ? 100 : 200 }}
            />
          </Box>

          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'start',
              marginLeft: '1rem',
            }}
          >
            <Typography
              variant="body1"
              textAlign="start"
              sx={{ mt: 1, fontWeight: 'bold', fontSize: isSmallScreen ? '0.6rem' : '1rem' }}
            >
              {t(`posterSteps.stepOne`)}
            </Typography>
            <Typography
              variant="body1"
              textAlign="start"
              sx={{ mt: 1, fontWeight: 'bold', fontSize: isSmallScreen ? '0.6rem' : '1rem' }}
            >
              {t(`posterSteps.stepTwo`)}
            </Typography>
            <Typography
              variant="body1"
              textAlign="start"
              sx={{ mt: 1, fontWeight: 'bold', fontSize: isSmallScreen ? '0.6rem' : '1rem' }}
            >
              {t(`posterSteps.stepThree`)}
            </Typography>
            <Typography
              variant="body1"
              textAlign="start"
              sx={{ mt: 1, fontWeight: 'bold', fontSize: isSmallScreen ? '0.6rem' : '1rem' }}
            >
              {t(`posterSteps.stepFour`)}
            </Typography>
            <Typography
              variant="body1"
              textAlign="start"
              sx={{ mt: 1, fontWeight: 'bold', fontSize: isSmallScreen ? '0.6rem' : '1rem' }}
            >
              {t(`posterSteps.stepFive`)}
            </Typography>
            <Typography
              variant="body1"
              textAlign="start"
              sx={{ mt: 1, fontWeight: 'bold', fontSize: isSmallScreen ? '0.6rem' : '1rem' }}
            >
              {t(`posterSteps.stepSix`)}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Grid item xs={12}>
        <Box style={{ background: 'darkred', padding: '1rem 1rem', width: '100%' }}>
          <Typography
            variant="body1"
            textAlign="center"
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: isSmallScreen ? '0.7rem' : '1rem',
            }}
            gutterBottom
          >
            {t(`posterTitles.scanQRCode`)}
          </Typography>
          {/* <Typography
            variant="body1"
            textAlign="center"
            style={{ mt: 2, color: "#fff" }}
          >
            Poster generated by www.pawclix.com
          </Typography> */}
        </Box>
      </Grid>
      <Typography variant="caption" textAlign="center" sx={{ mt: 1 }}>
        {t(`posterTitles.posterGeneratedBy`)}
      </Typography>
    </Grid>
  );
};

export default DisplayComponent;
