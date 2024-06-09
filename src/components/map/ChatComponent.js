// export default ChatComponent;
import React, { useState } from "react";
import axios from "axios";
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
import { BASE_URL } from "../../middleware/config";
const ChatComponent = ({ user, pet, location, onAddLocation }) => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    try {
      const token = localStorage.getItem("token"); // assuming the token is stored in local storage
      if (!token) {
        console.error("No token found");
        return;
      }

      // Replace with your server endpoint
      const url = `${BASE_URL}/pets/${pet._id}/comments`;
      const data = {
        message,
        location,
        petId: pet._id,
        author: user.id, // assuming user object has an id property
      };

      const response = await axios.post(url, data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Message sent:", response.data);
      setMessage("");
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingLeft: "0" }}>
      <Card
        style={{
          width: "100%",
          // backgroundColor: "#f5f5f5",
          paddingRight: "0 !important",
        }}
      >
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
              // disabled={!user}
              onChange={handleMessageChange}
            />
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Button
                variant="contained"
                color="primary"
                onClick={onAddLocation}
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
