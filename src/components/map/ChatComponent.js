// // export default ChatComponent;
// import React, { useState } from 'react';
// import axios from 'axios';
// import {
//   Avatar,
//   Card,
//   CardContent,
//   Grid,
//   Typography,
//   Box,
//   TextField,
//   IconButton,
//   Button,
// } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';

// import LocationOffIcon from '@mui/icons-material/LocationOff';
// import WrongLocationIcon from '@mui/icons-material/WrongLocation';
// import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
// import { BASE_URL } from '../../middleware/config';

// const ChatComponent = ({ user, pet, location, onAddLocation, onRemoveLocation }) => {
//   const [message, setMessage] = useState('');

//   const handleMessageChange = (event) => {
//     setMessage(event.target.value);
//   };

//   const handleSendMessage = async () => {
//     try {
//       const token = localStorage.getItem('token'); // assuming the token is stored in local storage
//       if (!token) {
//         console.error('No token found');
//         return;
//       }

//       // Replace with your server endpoint
//       const url = `${BASE_URL}/pets/${pet._id}/comments`;
//       const data = {
//         message,
//         location,
//         image:
//           'https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         // image: null,
//         petId: pet._id,
//         author: user.id, // assuming user object has an id property
//       };

//       const response = await axios.post(url, data, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       console.log('Message sent:', response.data);
//       setMessage('');
//     } catch (error) {
//       console.error('Failed to send message:', error);
//     }
//   };

//   return (
//     <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingLeft: '0', marginBottom: '1rem' }}>
//       <Card
//         style={{
//           width: '100%',
//           // backgroundColor: "#f5f5f5",
//           paddingRight: '0 !important',
//         }}
//       >
//         <CardContent>
//           <Box display="flex" alignItems="center" marginBottom="1rem">
//             <Avatar alt={user.username}></Avatar>
//             <Box ml={2}>
//               <Typography variant="h6" component="div">
//                 {user.username}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 {user.username}
//               </Typography>
//             </Box>
//           </Box>
//           <Box mb={2}>
//             <TextField
//               id="message-input"
//               label="Type a message"
//               variant="outlined"
//               fullWidth
//               multiline
//               rows={3}
//               value={message}
//               // disabled={!user}
//               onChange={handleMessageChange}
//             />
//           </Box>
//           <Box display="flex" justifyContent="space-between">
//             <Box>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() => onAddLocation(null)}
//                 endIcon={<AddLocationAltIcon />}
//                 size="small"
//                 style={{ background: '#555' }}
//               >
//                 Add Location
//               </Button>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={onRemoveLocation}
//                 endIcon={<WrongLocationIcon />}
//                 size="small"
//                 style={{ background: '#555', marginLeft: '1rem' }}
//               >
//                 Remove Location
//               </Button>
//             </Box>
//             <Box>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleSendMessage}
//                 endIcon={<SendIcon />}
//                 size="small"
//                 style={{ background: '#555' }}
//               >
//                 Send
//               </Button>
//             </Box>
//           </Box>
//         </CardContent>
//       </Card>
//     </Grid>
//   );
// };

// export default ChatComponent;
// ChatComponent.js

import React, { useState } from 'react';
import { Avatar, Card, CardContent, Grid, Typography, Box, TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LocationOffIcon from '@mui/icons-material/LocationOff';
import WrongLocationIcon from '@mui/icons-material/WrongLocation';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
const ChatComponent = ({ user, onSendMessage, onAddPhoto, onAddLocation, onRemoveLocation }) => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleAddLocation = () => {
    console.log('I clicked in chatcomponent add loc');
    // This will be handled in the map component
    onAddLocation();
  };
  const handleAddPhoto = () => {
    console.log('I clicked in chatcomponent add photo');
    // This will be handled in the map component
    onAddPhoto();
  };

  const handleRemoveLocation = () => {
    console.log('I clicked in chatcomponent remove loc');
    // This will be handled in the map component
    onRemoveLocation();
  };

  const handleSendMessage = () => {
    onSendMessage(message);
    setMessage('');
  };

  return (
    <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingLeft: '0', marginBottom: '1rem' }}>
      <Card style={{ width: '100%', paddingRight: '0 !important' }}>
        <CardContent>
          <Box display="flex" alignItems="center" marginBottom="1rem">
            <Avatar alt={user.username}></Avatar>
            <Box ml={2}>
              <Typography variant="h6" component="div">
                {user.username}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {user.username}
              </Typography>
            </Box>
          </Box>
          <Box mb={2}>
            <TextField
              id="message-input"
              label="Type a message"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={message}
              onChange={handleMessageChange}
            />
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddLocation}
                endIcon={<AddLocationAltIcon />}
                size="small"
                style={{ background: '#555' }}
              >
                Add Location
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleRemoveLocation}
                endIcon={<WrongLocationIcon />}
                size="small"
                style={{ background: '#555', marginLeft: '1rem' }}
              >
                Remove Location
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddPhoto}
                endIcon={<AddPhotoAlternateIcon />}
                size="small"
                style={{ background: '#555', marginLeft: '1rem' }}
              >
                Add Photo
              </Button>
            </Box>

            <Box>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSendMessage}
                endIcon={<SendIcon />}
                size="small"
                style={{ background: '#555' }}
              >
                Send
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ChatComponent;
