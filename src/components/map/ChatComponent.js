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
// import React, { useState } from 'react';
// import {
//   Avatar,
//   Card,
//   CardContent,
//   Grid,
//   Typography,
//   Box,
//   TextField,
//   Tooltip,
//   Button,
//   IconButton,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';
// import WrongLocationIcon from '@mui/icons-material/WrongLocation';
// import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
// import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
// import EventIcon from '@mui/icons-material/Event';
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
//   const [filePreview, setFilePreview] = useState(null); // State to hold the file preview URL or name
//   const [locationAdded, setLocationAdded] = useState(false); // State to track location existence
//   const theme = useTheme();
//   const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
//   const [openDateTimeDialog, setOpenDateTimeDialog] = useState(false); // State to manage dialog visibility
//   const [selectedDateTime, setSelectedDateTime] = useState('');

//   const handleMessageChange = (event) => {
//     setMessage(event.target.value);
//   };

//   const handleAddLocation = () => {
//     console.log('Adding location');
//     onAddLocation();
//     setLocationAdded(true); // Update state to indicate location is added
//   };

//   const handleOpenDateTimeDialog = () => {
//     setOpenDateTimeDialog(true);
//   };

//   const handleCloseDateTimeDialog = () => {
//     setOpenDateTimeDialog(false);
//   };

//   const handleDateTimeChange = (event) => {
//     setSelectedDateTime(event.target.value);
//   };

//   const handleSaveDateTime = () => {
//     console.log('Selected Date and Time:', selectedDateTime);
//     handleCloseDateTimeDialog();
//   };

//   const handleAddDatetime = () => {};

//   const resizeAndCropImage = (file, callback) => {
//     const reader = new FileReader();
//     reader.onload = function (event) {
//       const img = new Image();
//       img.onload = function () {
//         const canvas = document.createElement('canvas');
//         const ctx = canvas.getContext('2d');

//         // Set target dimensions for the canvas
//         const targetAspectRatio = 4 / 3;
//         const targetWidth = 800;
//         const targetHeight = targetWidth / targetAspectRatio;

//         // Calculate the source dimensions
//         let srcX = 0,
//           srcY = 0,
//           srcWidth = img.width,
//           srcHeight = img.height;

//         if (img.width / img.height > targetAspectRatio) {
//           // Source is wider than target aspect ratio
//           srcWidth = img.height * targetAspectRatio;
//           srcX = (img.width - srcWidth) / 2;
//         } else {
//           // Source is taller than target aspect ratio
//           srcHeight = img.width / targetAspectRatio;
//           srcY = (img.height - srcHeight) / 2;
//         }

//         // Set canvas dimensions
//         canvas.width = targetWidth;
//         canvas.height = targetHeight;

//         // Draw image on canvas with cropping
//         ctx.drawImage(img, srcX, srcY, srcWidth, srcHeight, 0, 0, targetWidth, targetHeight);

//         // Convert canvas to Blob
//         canvas.toBlob(
//           (blob) => {
//             callback(blob);
//           },
//           'image/jpeg',
//           0.7,
//         ); // Adjust quality as needed
//       };
//       img.src = event.target.result;
//     };
//     reader.readAsDataURL(file);
//   };
//   // const handleFileInputChange = (event) => {
//   //   const file = event.target.files[0];
//   //   console.log('file', file);
//   //   if (file) {
//   //     setFile(file);
//   //     setFilePreview(URL.createObjectURL(file)); // Generate preview URL
//   //     onUploadImage(file); // Pass the file to the parent component
//   //   }
//   // };
//   const handleFileInputChange = (event) => {
//     const file = event.target.files[0];
//     console.log('file', file);
//     if (file) {
//       resizeAndCropImage(file, (resizedImage) => {
//         setFile(resizedImage);
//         setFilePreview(URL.createObjectURL(resizedImage)); // Generate preview URL
//         onUploadImage(resizedImage); // Pass the resized file to the parent component
//       });
//     }
//   };

//   const handleRemoveLocation = () => {
//     console.log('Removing location');
//     onRemoveLocation();
//     setLocationAdded(false); // Update state to indicate location is removed
//   };

//   const handleSendMessage = () => {
//     // Call the parent component's function to send the message
//     onSendMessage(message);
//     // Clear the message input field after sending
//     setMessage('');
//     setFile(null);
//     setFilePreview(null);
//   };

//   return (
//     <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingLeft: '0', marginBottom: '1rem' }}>
//       <Card style={{ width: '100%', paddingRight: '0 !important', backgroundColor: '#f7f9fd' }}>
//         <CardContent style={{ paddingBottom: '1rem' }}>
//           <Box display="flex" alignItems="center" marginBottom="1rem">
//             <Avatar
//               alt={user.username}
//               src={user.avatar + '.svg'}
//               style={{ background: user.color }}
//             ></Avatar>
//             <Box ml={2}>
//               <Typography variant="body2" style={{ fontWeight: 'bold' }}>
//                 {user.username}
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
//           {filePreview && (
//             // <Box mb={2}>
//             //   <img src={filePreview} alt="Preview" style={{ maxWidth: '100%' }} />
//             // </Box>
//             <Box mb={2} style={{ width: '100%' }}>
//               <img src={filePreview} alt="Preview" style={{ width: '100%', height: 'auto' }} />
//             </Box>
//           )}

//           <Box display="flex" justifyContent="space-between">
//             <Box>
//               {!locationAdded && ( // Show Add Location button if location is not added
//                 <Tooltip title="Add location marker">
//                   <IconButton
//                     variant="contained"
//                     onClick={handleAddLocation}
//                     style={{ backgroundColor: '#555', color: '#fff' }}
//                   >
//                     <AddLocationAltIcon />
//                   </IconButton>
//                 </Tooltip>
//               )}

//               {/* Conditionally render Remove Location button */}
//               {locationAdded && ( // Only show if location is added
//                 <Tooltip title="Remove location marker">
//                   <IconButton
//                     variant="contained"
//                     onClick={handleRemoveLocation}
//                     style={{ backgroundColor: '#555', color: '#fff' }}
//                   >
//                     <WrongLocationIcon />
//                   </IconButton>
//                 </Tooltip>
//               )}

//               <Tooltip title="Upload image">
//                 <label htmlFor="photo-upload-input" style={{ marginLeft: '1rem' }}>
//                   <IconButton
//                     variant="contained"
//                     style={{ backgroundColor: '#555', color: '#fff' }}
//                     onClick={() => document.getElementById('photo-upload-input').click()} // Open file input on button click
//                   >
//                     <AddPhotoAlternateIcon />
//                   </IconButton>
//                 </label>
//                 <input
//                   accept="image/*"
//                   id="photo-upload-input"
//                   type="file"
//                   onChange={handleFileInputChange}
//                   style={{ display: 'none' }}
//                 />
//               </Tooltip>
//               {locationAdded && (
//                 <Tooltip title="Add date and time">
//                   <IconButton
//                     variant="contained"
//                     onClick={handleOpenDateTimeDialog}
//                     style={{ backgroundColor: '#555', color: '#fff', marginLeft: '1rem' }}
//                   >
//                     <EventIcon />
//                   </IconButton>
//                 </Tooltip>
//               )}
//             </Box>

//             <Box>
//               <Tooltip title="Send message">
//                 <IconButton
//                   variant="contained"
//                   onClick={handleSendMessage}
//                   style={{ backgroundColor: '#555', color: '#fff' }}
//                 >
//                   <SendIcon />
//                 </IconButton>
//               </Tooltip>
//             </Box>
//           </Box>
//         </CardContent>
//       </Card>
//       {/* DateTime Picker Dialog */}
//       <Dialog open={openDateTimeDialog} onClose={handleCloseDateTimeDialog}>
//         <DialogTitle>Select Date and Time</DialogTitle>
//         <DialogContent>
//           <TextField
//             id="datetime-input"
//             label="Select Date and Time"
//             type="datetime-local"
//             fullWidth
//             value={selectedDateTime}
//             onChange={handleDateTimeChange}
//             InputLabelProps={{
//               shrink: true,
//             }}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDateTimeDialog} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleSaveDateTime} color="primary">
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import WrongLocationIcon from '@mui/icons-material/WrongLocation';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import EventIcon from '@mui/icons-material/Event';

const ChatComponent = ({ user, onSendMessage, onUploadImage, onAddLocation, onRemoveLocation }) => {
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [locationAdded, setLocationAdded] = useState(false);
  const [openDateTimeDialog, setOpenDateTimeDialog] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleAddLocation = () => {
    console.log('Adding location');
    onAddLocation();
    setLocationAdded(true);
  };

  const handleOpenDateTimeDialog = () => {
    console.log('Open DateTime Dialog'); // Debugging statement
    setOpenDateTimeDialog(true);
  };

  const handleCloseDateTimeDialog = () => {
    console.log('Close DateTime Dialog'); // Debugging statement
    setOpenDateTimeDialog(false);
  };

  const handleDateTimeChange = (event) => {
    setSelectedDateTime(event.target.value);
  };

  const handleSaveDateTime = () => {
    console.log('Selected Date and Time:', selectedDateTime);
    handleCloseDateTimeDialog();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      setFilePreview(URL.createObjectURL(file));
      onUploadImage(file);
    }
  };

  const handleRemoveLocation = () => {
    onRemoveLocation();
    setLocationAdded(false);
  };

  const handleSendMessage = () => {
    onSendMessage(message);
    setMessage('');
    setFile(null);
    setFilePreview(null);
  };

  return (
    <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingLeft: '0', marginBottom: '1rem' }}>
      <Card style={{ width: '100%', paddingRight: '0 !important', backgroundColor: '#f7f9fd' }}>
        <CardContent style={{ paddingBottom: '1rem' }}>
          <Box display="flex" alignItems="center" marginBottom="1rem">
            <Avatar
              alt={user.username}
              src={user.avatar + '.svg'}
              style={{ background: user.color }}
            />
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
          {locationAdded && (
            <Box mb={2}>
              <TextField
                id="date-input"
                label="Date and time"
                variant="outlined"
                fullWidth
                InputProps={{
                  readOnly: true, // Make the TextField read-only
                }}
                value={selectedDateTime}
                onChange={handleDateTimeChange}
              />
            </Box>
          )}
          {filePreview && (
            <Box mb={2} style={{ width: '100%' }}>
              <img src={filePreview} alt="Preview" style={{ width: '100%', height: 'auto' }} />
            </Box>
          )}

          <Box display="flex" justifyContent="space-between">
            <Box>
              {!locationAdded && (
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
              {locationAdded && (
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
              <Tooltip title="Upload image">
                <label htmlFor="photo-upload-input" style={{ marginLeft: '1rem' }}>
                  <IconButton
                    variant="contained"
                    style={{ backgroundColor: '#555', color: '#fff' }}
                    onClick={() => document.getElementById('photo-upload-input').click()}
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
              {locationAdded && (
                <Tooltip title="Add date and time">
                  <IconButton
                    variant="contained"
                    onClick={handleOpenDateTimeDialog}
                    style={{ backgroundColor: '#555', color: '#fff', marginLeft: '1rem' }}
                  >
                    <EventIcon />
                  </IconButton>
                </Tooltip>
              )}
            </Box>

            <Box>
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

      {/* DateTime Picker Dialog */}
      <Dialog open={openDateTimeDialog} onClose={handleCloseDateTimeDialog}>
        <DialogTitle>Select Date and Time</DialogTitle>
        <DialogContent>
          <TextField
            id="datetime-input"
            // label="Select Date and Time"
            type="datetime-local"
            fullWidth
            value={selectedDateTime}
            onChange={handleDateTimeChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDateTimeDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveDateTime} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default ChatComponent;
