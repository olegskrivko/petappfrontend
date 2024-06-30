import React from 'react';
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

const LocationHistory = ({ pet }) => {
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
                Pet was {pet.initialStatus} {moment(`${pet.date}T${pet.time}`).fromNow()}
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
                Post created {moment(pet.createdAt).fromNow()}
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
                      <Avatar style={{ background: '#555' }}>
                        <LocationOnIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={`Show on map`}
                      secondary={`Added by ${loc.userId.username} on ${moment(loc.date).format(
                        'MMMM Do YYYY, HH:mm',
                      )}`}
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

      {/* {locations && locations.length > 0 ? (
        <Grid item xs={12} style={{ paddingLeft: "0" }}>
          <Card>
            <CardContent>
              <List>
                {locations.map((location, index) => (
                  <ListItem key={index} divider style={{ paddingLeft: "0" }}>
                    <ListItemAvatar>
                      <Avatar style={{ background: "#555" }}>
                        <LocationOnIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={`Show on map`}
                      secondary={`Added by: ${location.user} on ${moment(
                        location.timestamp
                      ).format("MMMM Do YYYY, h:mm a")}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      ) : (
        <Grid item xs={12}>
          <Typography variant="body1">
            No location history available.
          </Typography>
        </Grid>
      )} */}
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
                  <Typography variant="body1">{pet.updatedStatus}</Typography>
                  <ListItemText
                    // primary={`He was hiding in the city park.`}
                    secondary={`${moment(pet.updatedAt).format('MMMM Do YYYY, h:mm a')}`}
                  />
                </Box>
              </Box>
              <Box>
                <Grid item xs={12} style={{ marginTop: '1rem' }}>
                  <TextField
                    id="petLastStatusDescription"
                    name="petLastStatusDescription"
                    label="Comment"
                    fullWidth
                    value="He was hiding in the city park."
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
                <Typography variant="body1">No updates available</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      )}
      {/* <Grid item xs={12} style={{ paddingLeft: "0" }}>
        <Card>
          <CardContent>
            <Box
              gap={2}
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Avatar style={{ background: "#555" }}>
                <EventRepeatIcon />
              </Avatar>
              <Typography variant="body1">No Updates</Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid> */}

      {/* <Grid item xs={12} style={{ paddingLeft: "0" }}>
        <Card>
          <CardContent>
            <Box
              gap={2}
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Avatar style={{ background: "#555" }}>
                <AssistantPhotoIcon />
              </Avatar>
     
              <Box>
                <Typography variant="body1">Reunited</Typography>
                <ListItemText
                  primary={`He was hiding in the city park.`}
                  secondary={`${moment(locations[0].timestamp).format(
                    "MMMM Do YYYY, h:mm a"
                  )}`}
                />
              </Box>
            </Box>
            <Box>
              <Grid item xs={12} style={{ marginTop: "1rem" }}>
                <TextField
                  id="petLastStatusDescription"
                  name="petLastStatusDescription"
                  label="Comment"
                  fullWidth
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
      </Grid> */}
    </Grid>
  );
};

export default LocationHistory;
