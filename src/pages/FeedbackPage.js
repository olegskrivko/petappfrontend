import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";

import CardMedia from "@mui/material/CardMedia";
import { Link as MuiLink } from "@mui/material";
import FeedbackImg from "../images/customer_feedback_amico.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
{
  /* <a href="https://storyset.com/people">People illustrations by Storyset</a> */
}

const subjects = [
  "General Feedback",
  "Feature Request",
  "Bug Report",
  "Technical Support",
  "Advertising and Sponsorship",
  "Data Privacy Concerns",
  "Partnership Opportunities",
  "Other",
];

function FeedbackPage() {
  const creditLink = "https://storyset.com/people";
  const credit = "People illustrations by Storyset";
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [subject, setSubject] = useState("General Feedback");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ subject, email, message });
  };

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom textAlign="center">
        Leave Your Feedback
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            {/* Banner Image */}
            <CardMedia
              component="img"
              src={FeedbackImg}
              alt="Helping a partner"
              style={{
                width: isLargeScreen ? "400px" : "100%",
                maxHeight: isLargeScreen ? "100%" : "60vh", // Adjust height for large screens
                objectFit: "cover",
              }}
            />
            <Box
              style={{
                marginTop: "0.5rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <MuiLink
                href={creditLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.6rem",
                  fontStyle: "italic",
                  color: "#999",
                  fontWeight: "300",
                }}
              >
                {credit}
              </MuiLink>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} textAlign="left">
          {/* <Grid container justifyContent="center" alignItems="center"> */}
          {/* <Grid item xs={12} sm={8} md={6}> */}
          <form onSubmit={handleSubmit}>
            <Box mb={2}>
              <TextField
                select
                label="Subject"
                fullWidth
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                {subjects.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box mb={2}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Message"
                multiline
                fullWidth
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Box>
            <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center">
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#ffc107", color: "#000" }}
              >
                Submit
              </Button>
            </Grid>
          </form>
          {/* </Grid> */}
          {/* </Grid> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default FeedbackPage;
<select
  class="form-control"
  style="max-width: 50%"
  id="country"
  required=""
  name="subject"
>
  <option value=""></option>

  <option value="General Inquiry">General Inquiry</option>
  <option value="Technical Support">Technical Support</option>
  <option value="Report a Bug">Report a Bug</option>
  <option value="Feature Request">Feature Request</option>

  <option value="Account Assistance">Account Assistance</option>

  <option value="Pet Reunification Assistance">
    Pet Reunification Assistance
  </option>

  <option value="Website/App Navigation">Website/App Navigation</option>

  <option value="Data Privacy Concerns">Data Privacy Concerns</option>

  <option value="Partnership Opportunities">Partnership Opportunities</option>

  <option value="Media Inquiry">Media Inquiry</option>

  <option value="Advertising and Sponsorship">
    Advertising and Sponsorship
  </option>

  <option value="Other">Other</option>
</select>;
