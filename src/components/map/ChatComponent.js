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

// import React, { useState } from 'react';
// import {
//   Avatar,
//   Card,
//   CardContent,
//   Grid,
//   Typography,
//   Box,
//   TextField,
//   Button,
//   IconButton,
// } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';
// import LocationOffIcon from '@mui/icons-material/LocationOff';
// import WrongLocationIcon from '@mui/icons-material/WrongLocation';
// import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
// import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
// const ChatComponent = ({
//   user,
//   onSendMessage,
//   onUploadImage,
//   imagePreview,
//   onAddLocation,
//   onRemoveLocation,
// }) => {
//   const [message, setMessage] = useState('');
//   const [file, setFile] = useState(null); // State to hold the selected file
//   const theme = useTheme();
//   const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
//   const handleMessageChange = (event) => {
//     setMessage(event.target.value);
//   };

//   const handleAddLocation = () => {
//     console.log('Adding location');
//     onAddLocation();
//   };

//   const handleFileInputChange = (event) => {
//     const file = event.target.files[0];
//     console.log('file', file);
//     if (file) {
//       setFile(file);
//       onUploadImage(file); // Pass the file to the parent component
//     }
//   };

//   const handleRemoveLocation = () => {
//     console.log('Removing location');
//     onRemoveLocation();
//   };

//   const handleSendMessage = () => {
//     // Call the parent component's function to send the message
//     onSendMessage(message);
//     // Clear the message input field after sending
//     setMessage('');
//   };

//   return (
//     <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingLeft: '0', marginBottom: '1rem' }}>
//       <Card style={{ width: '100%', paddingRight: '0 !important' }}>
//         <CardContent>
//           <Box display="flex" alignItems="center" marginBottom="1rem">
//             <Avatar alt={user.username} src={user.avatar}></Avatar>
//             <Box ml={2}>
//               <Typography variant="body1" style={{ fontWeight: 'bold' }}>
//                 @{user.username}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Online
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
//               onChange={handleMessageChange}
//             />
//           </Box>
//           <Box display="flex" justifyContent="space-between">
//             <Box>
//               {isSmallScreen ? (
//                 <IconButton
//                   variant="contained"
//                   color="primary"
//                   onClick={handleAddLocation}
//                   style={{ backgroundColor: '#555' }}
//                 >
//                   <AddLocationAltIcon />
//                 </IconButton>
//               ) : (
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={handleAddLocation}
//                   endIcon={<AddLocationAltIcon />}
//                   style={{ backgroundColor: '#555' }}
//                 >
//                   Add Location
//                 </Button>
//               )}
//               {isSmallScreen ? (
//                 <IconButton
//                   variant="contained"
//                   onClick={handleRemoveLocation}
//                   style={{ backgroundColor: '#555', color: 'tomato', marginLeft: '1rem' }}
//                 >
//                   <WrongLocationIcon />
//                 </IconButton>
//               ) : (
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={handleRemoveLocation}
//                   endIcon={<WrongLocationIcon />}
//                   size="small"
//                   style={{ background: '#555', marginLeft: '1rem' }}
//                 >
//                   Remove Location
//                 </Button>
//               )}
//               {isSmallScreen ? (
//                 <label htmlFor="photo-upload-input">
//                   <IconButton
//                     variant="contained"
//                     color="primary"
//                     style={{ background: '#555', marginLeft: '1rem' }}
//                   >
//                     <AddPhotoAlternateIcon />
//                   </IconButton>
//                 </label>
//               ) : (
//                 <label htmlFor="photo-upload-input">
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     component="span"
//                     endIcon={<AddPhotoAlternateIcon />}
//                     size="small"
//                     style={{ background: '#555', marginLeft: '1rem' }}
//                   >
//                     Add Photo
//                   </Button>
//                 </label>
//               )}

//               <input
//                 accept="image/*"
//                 id="photo-upload-input"
//                 type="file"
//                 onChange={handleFileInputChange}
//                 style={{ display: 'none' }}
//               />
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
import React, { useState } from 'react';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  TextField,
  Tooltip,
  Button,
  IconButton,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import WrongLocationIcon from '@mui/icons-material/WrongLocation';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const ChatComponent = ({
  user,
  onSendMessage,
  onUploadImage,
  imagePreview,
  onAddLocation,
  onRemoveLocation,
}) => {
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null); // State to hold the selected file
  const [filePreview, setFilePreview] = useState(null); // State to hold the file preview URL or name
  const [locationAdded, setLocationAdded] = useState(false); // State to track location existence
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleAddLocation = () => {
    console.log('Adding location');
    onAddLocation();
    setLocationAdded(true); // Update state to indicate location is added
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    console.log('file', file);
    if (file) {
      setFile(file);
      setFilePreview(URL.createObjectURL(file)); // Generate preview URL
      onUploadImage(file); // Pass the file to the parent component
    }
  };

  const handleRemoveLocation = () => {
    console.log('Removing location');
    onRemoveLocation();
    setLocationAdded(false); // Update state to indicate location is removed
  };

  const handleSendMessage = () => {
    // Call the parent component's function to send the message
    onSendMessage(message);
    // Clear the message input field after sending
    setMessage('');
    setFile(null);
    setFilePreview(null);
  };

  return (
    <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingLeft: '0', marginBottom: '1rem' }}>
      <Card style={{ width: '100%', paddingRight: '0 !important' }}>
        <CardContent style={{ paddingBottom: '1rem' }}>
          <Box display="flex" alignItems="center" marginBottom="1rem">
            <Avatar
              alt={user.username}
              src={user.avatar + '.svg'}
              style={{ background: user.color }}
            ></Avatar>
            <Box ml={2}>
              <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                {user.username}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Online
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
          {filePreview && (
            <Box mb={2}>
              <img src={filePreview} alt="Preview" style={{ maxWidth: '100%' }} />
            </Box>
          )}

          {/* <Box display="flex" justifyContent="space-between">
            <Box>
              {isSmallScreen ? (
                <IconButton
                  variant="contained"
                  onClick={handleAddLocation}
                  style={{ backgroundColor: '#555', color: '#fff' }}
                >
                  <AddLocationAltIcon />
                </IconButton>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddLocation}
                  endIcon={<AddLocationAltIcon />}
                  style={{ backgroundColor: '#555' }}
                >
                  Add Location
                </Button>
              )}
              {isSmallScreen ? (
                <IconButton
                  variant="contained"
                  onClick={handleRemoveLocation}
                  style={{ backgroundColor: '#555', color: '#fff', marginLeft: '1rem' }}
                >
                  <WrongLocationIcon />
                </IconButton>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleRemoveLocation}
                  endIcon={<WrongLocationIcon />}
                  size="small"
                  style={{ background: '#555', marginLeft: '1rem' }}
                >
                  Remove Location
                </Button>
              )}
              <label htmlFor="photo-upload-input" style={{ marginLeft: '1rem' }}>
                <Button
                  variant="contained"
                  component="span"
                  endIcon={<AddPhotoAlternateIcon />}
                  size="small"
                  style={{ background: '#555' }}
                >
                  Add Photo
                </Button>
              </label>
              <input
                accept="image/*"
                id="photo-upload-input"
                type="file"
                onChange={handleFileInputChange}
                style={{ display: 'none' }}
              />
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
          </Box> */}
          <Box display="flex" justifyContent="space-between">
            <Box>
              {!locationAdded && ( // Show Add Location button if location is not added
                <Tooltip title="Add location marker">
                  <IconButton
                    variant="contained"
                    onClick={handleAddLocation}
                    style={{ backgroundColor: '#555', color: '#fff' }}
                  >
                    <AddLocationAltIcon />
                  </IconButton>
                </Tooltip>
              )}

              {/* Conditionally render Remove Location button */}
              {locationAdded && ( // Only show if location is added
                <Tooltip title="Remove location marker">
                  <IconButton
                    variant="contained"
                    onClick={handleRemoveLocation}
                    style={{ backgroundColor: '#555', color: '#fff' }}
                  >
                    <WrongLocationIcon />
                  </IconButton>
                </Tooltip>
              )}

              {/* <label htmlFor="photo-upload-input" style={{ marginLeft: '1rem' }}>
                <Button
                  variant="contained"
                  component="span"
                  endIcon={<AddPhotoAlternateIcon />}
                  size="small"
                  style={{ background: '#555' }}
                >
                  Add Photo
                </Button>
              </label>
              <input
                accept="image/*"
                id="photo-upload-input"
                type="file"
                onChange={handleFileInputChange}
                style={{ display: 'none' }}
              /> */}
              <Tooltip title="Upload image">
                <label htmlFor="photo-upload-input" style={{ marginLeft: '1rem' }}>
                  <IconButton
                    variant="contained"
                    style={{ backgroundColor: '#555', color: '#fff' }}
                    onClick={() => document.getElementById('photo-upload-input').click()} // Open file input on button click
                  >
                    <AddPhotoAlternateIcon />
                  </IconButton>
                </label>
                <input
                  accept="image/*"
                  id="photo-upload-input"
                  type="file"
                  onChange={handleFileInputChange}
                  style={{ display: 'none' }}
                />
              </Tooltip>
            </Box>

            <Box>
              {/* <Button
                variant="contained"
                color="primary"
                onClick={handleSendMessage}
                endIcon={<SendIcon />}
                size="small"
                style={{ background: '#555' }}
              >
                Send
              </Button> */}
              <Tooltip title="Send message">
                <IconButton
                  variant="contained"
                  onClick={handleSendMessage}
                  style={{ backgroundColor: '#555', color: '#fff' }}
                >
                  <SendIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ChatComponent;
