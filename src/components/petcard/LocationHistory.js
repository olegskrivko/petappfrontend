import React, { useContext, useEffect } from 'react';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Box,
  Avatar,
  Tooltip,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import moment from 'moment';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import EventIcon from '@mui/icons-material/Event';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import LocationOffIcon from '@mui/icons-material/LocationOff';
import { LanguageContext } from '../../middleware/LanguageContext';
import { useTranslation } from 'react-i18next';
// import 'moment/locale/ru'; // Import the Russian locale
// // Set the locale to Russian
// moment.locale('ru');

const LocationHistory = ({ pet }) => {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();

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

  const getInitialStatusLabel = (value) => {
    const options = t('selectOptions.initialStatusOptions', { returnObjects: true });
    const option = options.find((option) => option.value === value);
    return option ? option.label : '';
  };

  const getUpdatedStatusOptions = (value) => {
    const initialStatus = pet.initialStatus; // Assuming 'initialStatus' exists in the pet object
    console.log('initialStatus', initialStatus);
    // if (!initialStatus) return [];

    const options = t(`selectOptions.updatedStatusOptions.${initialStatus}`, {
      returnObjects: true,
    });
    return options[value].label || '';
  };
  return (
    <Grid container rowSpacing={2}>
      <Grid item xs={12} style={{ paddingLeft: '0' }}>
        <Card>
          <CardContent>
            <Box
              gap={2}
              style={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
              }}
            >
              <Avatar style={{ background: '#555' }}>
                <EventAvailableIcon />
              </Avatar>
              <Typography variant="body1">
                {t(`historyTab.pet`)}{' '}
                <span style={{ textTransform: 'lowercase' }}>
                  {getInitialStatusLabel(pet.initialStatus)}
                </span>{' '}
                {moment(`${pet.date}T${pet.time}`).fromNow()}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} style={{ paddingLeft: '0' }}>
        <Card>
          <CardContent>
            <Box
              gap={2}
              style={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
              }}
            >
              <Avatar style={{ background: '#555' }}>
                <EditCalendarIcon />
              </Avatar>
              <Typography variant="body1">
                {t(`historyTab.post`)} {moment(pet.createdAt).fromNow()}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      {/* {loc.location.coordinates} */}
      {pet && pet.locationHistory && pet.locationHistory.length > 0 ? (
        <Grid item xs={12} style={{ paddingLeft: '0' }}>
          <Card>
            <CardContent>
              <List>
                {pet.locationHistory.map((loc, index) => (
                  <ListItem key={loc._id} divider style={{ paddingLeft: '0' }}>
                    <ListItemAvatar>
                      <Tooltip title="Show on map">
                        <Avatar style={{ background: '#555' }}>
                          <LocationOnIcon />
                        </Avatar>
                      </Tooltip>
                    </ListItemAvatar>
                    {/* <ListItemText
                      primary={`Show on map`}
                      secondary={`Added by ${loc.userId?.username} on ${moment(loc.date).format(
                        'MMMM Do YYYY, HH:mm',
                      )}`}
                    /> */}
                    <ListItemText
                      primary={`${loc.userId?.username}`}
                      secondary={`${t(`iconLabelTabs.locationAdded`)} ${moment(
                        loc.date,
                      ).fromNow()}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      ) : (
        <Grid item xs={12} style={{ paddingLeft: '0' }}>
          <Card>
            <CardContent>
              <Box
                gap={2}
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                }}
              >
                <Avatar style={{ background: '#555' }}>
                  <LocationOffIcon />
                </Avatar>
                <Typography variant="body1">No location history available</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      )}

      {pet && pet.updatedStatus ? (
        <Grid item xs={12} style={{ paddingLeft: '0' }}>
          <Card>
            <CardContent>
              <Box
                gap={2}
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                }}
              >
                <Avatar style={{ background: '#555' }}>
                  <AssistantPhotoIcon />
                </Avatar>
                {/* <Typography variant="body1">Reunited</Typography> */}
                <Box>
                  <Typography variant="body1">
                    {getUpdatedStatusOptions(pet.updatedStatus)}
                  </Typography>
                  {/* <ListItemText secondary={`${moment(pet.locationHistory?.createdAt).fromNow()}`} /> */}
                </Box>
              </Box>
              <Box>
                <Grid item xs={12} style={{ marginTop: '1rem' }}>
                  <TextField
                    id="petLastStatusDescription"
                    name="petLastStatusDescription"
                    fullWidth
                    value={pet.updatedStatusDescription}
                    // multiline
                    // rows={4}
                    variant="outlined"
                    placeholder="Enter details such as where the pet was found, shelter name, vet clinic name, and any additional information."
                    InputLabelProps={{
                      shrink: true, // Always shrink the label
                    }}
                  />
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ) : (
        <Grid item xs={12} style={{ paddingLeft: '0' }}>
          <Card>
            <CardContent>
              <Box
                gap={2}
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                }}
              >
                <Avatar style={{ background: '#555' }}>
                  {/* <EventRepeatIcon /> */}
                  <EventBusyIcon />
                </Avatar>
                <Typography variant="body1">{t(`historyTab.updates`)}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      )}
    </Grid>
  );
};

export default LocationHistory;
