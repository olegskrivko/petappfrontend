// import React, { useState } from "react";
// import {
//   Avatar,
//   Card,
//   CardContent,
//   Button,
//   Grid,
//   Typography,
//   Box,
//   TextField,
//   IconButton,
// } from "@mui/material";
// import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
// import VerifiedIcon from "@mui/icons-material/Verified";
// import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
// import LocationOffIcon from "@mui/icons-material/LocationOff";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import SendIcon from "@mui/icons-material/Send";
// const ChatComponent = () => {
//   const [message, setMessage] = useState("");

//   const handleMessageChange = (event) => {
//     setMessage(event.target.value);
//   };

//   const handleSendMessage = () => {
//     // Add logic to send the message
//     console.log("Sending message:", message);
//     // Clear the input after sending
//     setMessage("");
//   };

//   return (
//     <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingLeft: "0" }}>
//       <Card style={{ width: "100%" }}>
//         <CardContent>
//           <Box
//             display="flex"
//             gap={1}
//             justifyContent="start"
//             alignItems="center"
//             marginBottom="1rem"
//           >
//             <Avatar>L</Avatar>
//             <Typography variant="body1">Leo Megven</Typography>
//             <Typography variant="body1" style={{ color: "#777" }}>
//               @Leven4232
//             </Typography>
//             {/* <VerifiedIcon /> */}
//           </Box>
//           <Grid item xs>
//             <TextField
//               id="message-input"
//               label="Type a message"
//               variant="outlined"
//               fullWidth
//               value={message}
//               onChange={handleMessageChange}
//             />
//           </Grid>
//           <Grid item>
//             <IconButton>
//               <SendIcon />
//             </IconButton>
//             {/* <Button
//               variant="contained"
//               color="primary"
//               onClick={handleSendMessage}
//             > */}
//             Send
//             {/* </Button> */}
//             <IconButton>
//               <AddLocationAltIcon />
//             </IconButton>
//             {/* <Button
//               variant="contained"
//               color="primary"
//               onClick={handleSendMessage}
//             > */}
//             Add Location
//             {/* </Button> */}
//             <IconButton>
//               <LocationOffIcon />
//             </IconButton>
//             {/* <Button
//               variant="contained"
//               color="primary"
//               onClick={handleSendMessage}
//             > */}
//             Remove Location
//             {/* </Button> */}
//           </Grid>
//         </CardContent>
//       </Card>
//     </Grid>
//   );
// };

// export default ChatComponent;
import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  TextField,
  IconButton,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import LocationOffIcon from "@mui/icons-material/LocationOff";

const ChatComponent = () => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    // Add logic to send the message
    console.log("Sending message:", message);
    // Clear the input after sending
    setMessage("");
  };

  return (
    <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingLeft: "0" }}>
      <Card
        style={{
          width: "100%",
          backgroundColor: "#f5f5f5",
          paddingRight: "0 !important",
        }}
      >
        <CardContent>
          <Box display="flex" alignItems="center" marginBottom="1rem">
            <Avatar>L</Avatar>
            <Box ml={2}>
              <Typography variant="h6" component="div">
                Leo Megven
              </Typography>
              <Typography variant="body2" color="textSecondary">
                @Leven4232
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
                onClick={handleSendMessage}
                endIcon={<AddLocationAltIcon />}
                size="small"
                style={{ background: "#555" }}
              >
                Add Location
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSendMessage}
                endIcon={<SendIcon />}
                size="small"
                style={{ background: "#555" }}
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
