import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Chip,
  Box,
  List,
  InputLabel,
  TextField,
  ListItem,
  ListItemText,
  Select,
  MenuItem,
  Button,
  Slider,
  Checkbox,
  FormControlLabel,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

// MUI
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";

const Sidebar = () => {
  const [breed, setBreed] = useState("");

  const handleBreedChange = (event) => {
    setBreed(event.target.value);
  };

  return (
    <Box>
      <form>
        <Typography variant="h6">Filters</Typography>
        <List>
          <ListItem
            sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}
          >
            <Box>
              <InputLabel sx={{ fontWeight: "500", color: "#000" }}>
                Status
              </InputLabel>
              <Chip sx={{ marginRight: "5px" }} size="small" label="Missing" />
              <Chip sx={{ marginRight: "5px" }} size="small" label="Found" />
              <Chip sx={{ marginRight: "5px" }} size="small" label="Reunited" />
              <Chip sx={{ marginRight: "5px" }} size="small" label="Adopted" />
              <Chip
                sx={{ marginRight: "5px" }}
                size="small"
                label="Sheltered"
              />
              <Chip sx={{ marginRight: "5px" }} size="small" label="Deceased" />
            </Box>
          </ListItem>
          <ListItem
            sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}
          >
            <Box>
              <InputLabel sx={{ fontWeight: "500", color: "#000" }}>
                Category
              </InputLabel>
              <Chip sx={{ marginRight: "5px" }} size="small" label="Dog" />
              <Chip sx={{ marginRight: "5px" }} size="small" label="Cat" />
              <Chip sx={{ marginRight: "5px" }} size="small" label="Cow" />
              <Chip sx={{ marginRight: "5px" }} size="small" label="Horse" />
            </Box>
          </ListItem>
          <ListItem
            sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}
          >
            <Box>
              <InputLabel sx={{ fontWeight: "500", color: "#000" }}>
                Gender
              </InputLabel>
              <Chip sx={{ marginRight: "5px" }} size="small" label="He" />
              <Chip sx={{ marginRight: "5px" }} size="small" label="She" />
            </Box>
          </ListItem>
          <ListItem
            sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}
          >
            <Box>
              <InputLabel sx={{ fontWeight: "500", color: "#000" }}>
                Size
              </InputLabel>
              <Chip sx={{ marginRight: "5px" }} size="small" label="Small" />
              <Chip sx={{ marginRight: "5px" }} size="small" label="Medium" />
              <Chip sx={{ marginRight: "5px" }} size="small" label="Large" />
            </Box>
          </ListItem>

          {/* <ListItem
            sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}
          >
            <Box>
              <InputLabel sx={{ fontWeight: "500", color: "#000" }}>
                Country
              </InputLabel>
              <Chip sx={{ marginRight: "5px" }} size="small" label="Latvia" />
              <Chip
                sx={{ marginRight: "5px" }}
                size="small"
                label="Lithuania"
              />
              <Chip sx={{ marginRight: "5px" }} size="small" label="Estonia" />
            </Box>
          </ListItem> */}

          <Box
            sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}
          >
            {/* <InputLabel>Minimum Score {minimumScore}</InputLabel> */}
            <InputLabel sx={{ fontWeight: "500", color: "#000" }}>
              Distance {}
            </InputLabel>
            <Slider
              sx={{ height: "8px", color: "#ff6600" }}
              value={2}
              //valueLabelDisplay="auto"
              step={1}
              //             // marks={[{ value: 0, label: 0 }, { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5, label: 5 }]}
              min={0}
              max={5}
            />
          </Box>

          <ListItem
            sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}
          >
            <Box sx={{ width: "100%" }}>
              <InputLabel sx={{ fontWeight: "500", color: "#000" }}>
                Lost or Found Date
              </InputLabel>
              <TextField
                label=""
                type="date"
                variant="outlined"
                size="small"
                fullWidth
                placeholder=""
                value=""
              />
            </Box>
          </ListItem>
          <ListItem
            sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}
          >
            <Box sx={{ width: "100%" }}>
              <InputLabel sx={{ fontWeight: "500", color: "#000" }}>
                Identifier
              </InputLabel>
              <TextField
                label=""
                variant="outlined"
                size="small"
                fullWidth
                placeholder=""
                value=""
              />
            </Box>
          </ListItem>
          <ListItem
            sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}
          >
            <Box>
              <InputLabel sx={{ fontWeight: "500", color: "#000" }}>
                Age
              </InputLabel>
              <Chip sx={{ marginRight: "5px" }} size="small" label="Kitten" />
              <Chip sx={{ marginRight: "5px" }} size="small" label="Puppy" />
              <Chip
                sx={{ marginRight: "5px" }}
                size="small"
                label="Adolescent"
              />
              <Chip sx={{ marginRight: "5px" }} size="small" label="Adult" />
              <Chip sx={{ marginRight: "5px" }} size="small" label="Senior" />
            </Box>
          </ListItem>

          <ListItem
            sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}
          >
            <Box>
              <InputLabel sx={{ fontWeight: "500", color: "#000" }}>
                Distance
              </InputLabel>
              <Chip sx={{ marginRight: "5px" }} size="small" label="1km" />
              <Chip sx={{ marginRight: "5px" }} size="small" label="5km" />
              <Chip sx={{ marginRight: "5px" }} size="small" label="10km" />
              <Chip sx={{ marginRight: "5px" }} size="small" label="50km" />
              <Chip sx={{ marginRight: "5px" }} size="small" label="100km" />
              <Chip sx={{ marginRight: "5px" }} size="small" label=">100km" />
            </Box>
          </ListItem>

          {/* <ListItem
            sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}
          >
            <Box>
              <InputLabel sx={{ fontWeight: "500", color: "#000" }}>
                Coat Type
              </InputLabel>
              <Chip sx={{ marginRight: "5px" }} size="small" label="Hairless" />
              <Chip sx={{ marginRight: "5px" }} size="small" label="Short" />
              <Chip sx={{ marginRight: "5px" }} size="small" label="Medium" />
              <Chip sx={{ marginRight: "5px" }} size="small" label="Long" />
            </Box>
          </ListItem> */}

          <ListItem
            sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}
          >
            <Box>
              <InputLabel sx={{ fontWeight: "500", color: "#000" }}>
                Color
              </InputLabel>
              <Chip sx={{ marginRight: "5px" }} size="small" label="Black" />
              <Chip sx={{ marginRight: "5px" }} size="small" label="White" />
              <Chip sx={{ marginRight: "5px" }} size="small" label="Brown" />
              <Chip sx={{ marginRight: "5px" }} size="small" label="Red" />
              <Chip sx={{ marginRight: "5px" }} size="small" label="Gold" />
              <Chip sx={{ marginRight: "5px" }} size="small" label="Blue" />
              <Chip sx={{ marginRight: "5px" }} size="small" label="Gray" />
              <Chip sx={{ marginRight: "5px" }} size="small" label="Cream" />
              <Chip sx={{ marginRight: "5px" }} size="small" label="Yellow" />
            </Box>
          </ListItem>

          <ListItem
            sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}
          >
            <Box>
              <InputLabel sx={{ fontWeight: "500", color: "#000" }}>
                Breed
              </InputLabel>
              <Select
                value={breed}
                onChange={handleBreedChange}
                sx={{ minWidth: 220 }}
              >
                <MenuItem value="labrador">Labrador</MenuItem>
                <MenuItem value="poodle">Poodle</MenuItem>
                <MenuItem value="bulldog">Bulldog</MenuItem>
                {/* Add more MenuItem components for each breed */}
              </Select>
            </Box>
          </ListItem>

          {/* <div
            style={{
              backgroundColor: "#f0f0f0",
              padding: "16px",
              height: "100%",
            }}
          > */}
          {/* <Typography variant="h6">Filters</Typography> */}
          {/* <Typography variant="body1">Species</Typography>
            <Typography variant="body2">- Dog</Typography>
            <Typography variant="body2">- Cat</Typography>
            <Typography variant="body2">- Rabbit</Typography>
            <Typography variant="body2">- Bird</Typography>
            <Typography variant="body2">- Reptile</Typography> */}
          {/* <Typography variant="body1">Pet Gender</Typography>
            <Typography variant="body2">- He</Typography>
            <Typography variant="body2">- She</Typography> */}
          {/* <Typography variant="body1">Breed</Typography>
            <Typography variant="body2">- Labrador Retriever</Typography>
            <Typography variant="body2">- Persian</Typography>
            <Typography variant="body2">- Holland Lop</Typography>
            <Typography variant="body2">- Parrot</Typography>
            <Typography variant="body2">- Bearded Dragon</Typography> */}
          {/* <Typography variant="body1">Color</Typography>
            <Typography variant="body2">- Black</Typography>
            <Typography variant="body2">- White</Typography>
            <Typography variant="body2">- Brown</Typography>
            <Typography variant="body2">- Orange</Typography>
            <Typography variant="body2">- Gray</Typography> */}
          {/* <Typography variant="body1">Pet Status</Typography>
            <Typography variant="body2">- Missing</Typography>
            <Typography variant="body2">- Found</Typography>
            <Typography variant="body2">- Reunited</Typography>
            <Typography variant="body2">- Adopted</Typography>
            <Typography variant="body2">- Fostered</Typography>
            <Typography variant="body2">- Deceased</Typography> */}
          {/* <Typography variant="body1">Size</Typography>
            <Typography variant="body2">- Small</Typography>
            <Typography variant="body2">- Medium</Typography>
            <Typography variant="body2">- Large</Typography> */}
          {/* <Typography variant="body1">Country</Typography>
            <Typography variant="body2">- Latvia</Typography>
            <Typography variant="body2">- Lithunia</Typography>
            <Typography variant="body2">- Estonia</Typography> */}
          {/* <Typography variant="body1">Identifier</Typography> */}
          {/* <Typography variant="body1">Lost or Found Date</Typography> */}
          {/* <Typography variant="body1">Coat Type</Typography> */}
          {/* <Typography variant="body1">Pet Age</Typography> */}
          {/* <Typography variant="body1">Distance</Typography>
            <Typography variant="body2">- 1km</Typography>
            <Typography variant="body2">- 5km</Typography>
            <Typography variant="body2">- 10km</Typography>
            <Typography variant="body2">- 20km</Typography>
            <Typography variant="body2">- 50km</Typography> */}
          {/* Add more filter options as needed */}
          {/* </div> */}
        </List>
      </form>
    </Box>
  );
};

export default Sidebar;
