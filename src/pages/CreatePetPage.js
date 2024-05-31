import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import CloseIcon from "@mui/icons-material/Close";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import { BASE_URL } from "../middleware/config";
import TomTomMap from "../components/map/TomTomMap";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import ImageUploader from "../components/pets/ImageUploader";
import PetHealth from "../components/petcard/PetHealth";

function CreatePetPage() {
  const getCurrentTime = () => {
    const now = new Date();
    return now.toTimeString().slice(0, 5); // Returns time in HH:MM format
  };
  const [formState, setFormState] = useState({
    petStatus: "",
    petCategory: "",
    petIdentifier: "",
    petSize: "",
    petGender: "",
    petBehavior: "",
    petAge: "",
    petBreed: "",
    healthIssues: {},
    otherHealthIssues: "",
    petLocation: { lat: null, lng: null },
    markingPattern: "",
    mainColor: "",
    markingColors: [],
    petLostOrFoundDate: new Date().toISOString().slice(0, 10),
    petLostOrFoundTime: getCurrentTime(),
    petImage:
      "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    contactPhone: "",
    contactEmail: "",
    notes: "",
    petLastStatus: "",
    petLastStatusDescription: "",
  });

  const [mainColorDialogOpen, setMainColorDialogOpen] = useState(false);
  const [markingColorDialogOpen, setMarkingColorDialogOpen] = useState(false);

  const coatPatternOptions = [
    // { value: "solid", label: "Solid" },
    { value: "", label: "No" },
    { value: "striped", label: "Striped" },
    { value: "spotted", label: "Spotted" },
    { value: "patched", label: "Patched" },
    { value: "marbled", label: "Marbled" },
  ];

  const colorsList = [
    { name: "Black", hexCode: "#000000" },
    { name: "Gray", hexCode: "#BEBEBE" },
    { name: "White", hexCode: "#f7f7f7" },
    { name: "Cream", hexCode: "#FFF1B9" },
    { name: "Yellow", hexCode: "#FCDC5C" },
    { name: "Golden", hexCode: "#FFA500" },
    { name: "Brown", hexCode: "#C37C4D" },
    { name: "Red", hexCode: "#A71A20" },
    { name: "Lilac", hexCode: "#BA97AA" },
    { name: "Blue", hexCode: "#1A355E" },
    { name: "Green", hexCode: "#5F6F52" },
    { name: "Khaki", hexCode: "#BDB76B" },
    // { name: "Gray", hexCode: "#808080" },
    // { name: "Beige", hexCode: "#E5DECA" },
    // { name: "Red", hexCode: "#C30F16" },
    // { name: "Golden", hexCode: "#FFD700" },
    // { name: "Wine Red", hexCode: "#7B0323" },
    // { name: "Chestnut", hexCode: "#954535" },
    // { name: "Tan", hexCode: "#D2B48C" },
    // { name: "Emerald Green", hexCode: "#046307" },

    // { name: "Fawn", hexCode: "#E5AA70" },

    // { name: "Wine Red", hexCode: "#7B0323" },
  ];

  const petCategories = [
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "cow", label: "Cow" },
    { value: "horse", label: "Horse" },
  ];

  const petBehaviorOptions = [
    { value: "friendly", label: "Friendly" },
    { value: "aggressive", label: "Aggressive" },
    { value: "shy", label: "Shy" },
    { value: "playful", label: "Playful" },
    { value: "energetic", label: "Energetic" },
    { value: "calm", label: "Calm" },
    { value: "independent", label: "Independent" },
    { value: "protective", label: "Protective" },
    { value: "curious", label: "Curious" },
    { value: "anxious", label: "Anxious" },
  ];

  const petStatusOptions = [
    { value: "missing", label: "Missing" },
    { value: "found", label: "Found" },
    { value: "seen", label: "Seen" },
    // { value: "reunited", label: "Reunited" },
    // { value: "adopted", label: "Adopted" },
    // { value: "sheltered", label: "Sheltered" },
    // { value: "deceased", label: "Deceased" },
  ];

  const petLastStatusOptions = [
    // { value: "missing", label: "Missing" },
    // { value: "found", label: "Found" },
    { value: "reunited", label: "Reunited" },
    { value: "adopted", label: "Adopted" },
    { value: "sheltered", label: "Sheltered" },
    // { value: "deceased", label: "Deceased" },
  ];

  // const petCoatLengthOptions = [
  //   { value: "", label: "None" },
  //   { value: "hairless", label: "Hairless" },
  //   { value: "short", label: "Short" },
  //   { value: "medium", label: "Medium" },
  //   { value: "long", label: "Long" },
  // ];

  const petSizeOptions = [
    { value: "", label: "None" },
    { value: "small", label: "Small" },
    { value: "medium", label: "Medium" },
    { value: "large", label: "Large" },
  ];

  const petGenderOptions = [
    { value: "", label: "None" },
    { value: "he", label: "He" },
    { value: "she", label: "She" },
  ];

  const handleChange = (field, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // const handleMainColorChange = (colorName) => {
  //   setFormState((prevState) => ({
  //     ...prevState,
  //     mainColor: colorName,
  //   }));
  // };

  // const handleMainColorChange = (colorName) => {
  //   setFormState((prevState) => ({
  //     ...prevState,
  //     mainColor: prevState.mainColor === colorName ? "" : colorName,
  //   }));
  // };

  const handleMainColorChange = (colorName) => {
    handleChange("mainColor", colorName);
    setMainColorDialogOpen(false);
  };

  const handleLocationChange = (coords) => {
    setFormState((prevState) => ({
      ...prevState,
      petLocation: coords,
    }));
  };

  const handleMarkingPatternChange = (event) => {
    const value = event.target.value;
    handleChange("markingPattern", value);
  };

  // const handleMarkingColorChange = (colorName) => {
  //   const { markingColors } = formState;
  //   const isSelected = markingColors.includes(colorName);

  //   if (isSelected) {
  //     setFormState((prevState) => ({
  //       ...prevState,
  //       markingColors: markingColors.filter((color) => color !== colorName),
  //     }));
  //   } else if (markingColors.length < 2) {
  //     setFormState((prevState) => ({
  //       ...prevState,
  //       markingColors: [...markingColors, colorName],
  //     }));
  //   }
  // };

  const handleMarkingColorChange = (colorName) => {
    const currentMarkingColors = [...formState.markingColors];
    if (currentMarkingColors.includes(colorName)) {
      handleChange(
        "markingColors",
        currentMarkingColors.filter((color) => color !== colorName)
      );
    } else {
      handleChange("markingColors", [...currentMarkingColors, colorName]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${BASE_URL}/pets`, formState);
      console.log("Pet details sent successfully to the backend.");
    } catch (error) {
      console.error("Failed to send pet details to the backend:", error);
    }
  };

  const getAgeOptions = () => {
    const ageOptionsMap = {
      dog: [
        { value: "", label: "None" },
        { value: "puppy", label: "Puppy" },
        { value: "adolescent", label: "Adolescent" },
        { value: "adult", label: "Adult" },
        { value: "senior", label: "Senior" },
      ],
      cat: [
        { value: "", label: "None" },
        { value: "kitten", label: "Kitten" },
        { value: "adolescent", label: "Adolescent" },
        { value: "adult", label: "Adult" },
        { value: "senior", label: "Senior" },
      ],
      cow: [
        { value: "", label: "None" },
        { value: "calf", label: "Calf" },
        { value: "adolescent", label: "Adolescent" },
        { value: "adult", label: "Adult" },
        { value: "senior", label: "Senior" },
      ],
      horse: [
        { value: "", label: "None" },
        { value: "foal", label: "Foal" },
        { value: "adolescent", label: "Adolescent" },
        { value: "adult", label: "Adult" },
        { value: "senior", label: "Senior" },
      ],
    };
    return ageOptionsMap[formState.petCategory] || [];
  };

  const getLastStatusOptions = () => {
    const statusOptionsMap = {
      missing: [
        { value: "", label: "None" },
        { value: "activelySearching", label: "Actively Searching" },
        { value: "stillMissing", label: "Still Missing" },
        { value: "reunited", label: "Reunited" },
        { value: "deceased", label: "Deceased" },
        { value: "other", label: "Other" },
      ],
      found: [
        { value: "", label: "None" },
        { value: "awaitingOwner", label: "Awaiting Owner" },
        { value: "adopted", label: "Adopted" },
        { value: "takenToShelter", label: "Taken to Shelter" },
        {
          value: "takenToVeterinaryClinic",
          label: "Taken to Veterinary Clinic",
        },
        { value: "deceased", label: "Deceased" },
        { value: "other", label: "Other" },
      ],
      seen: [
        { value: "", label: "None" },
        { value: "reportedToAuthorities", label: "Reported to Authorities" },
        { value: "freeRoaming", label: "Free Roaming" },
        { value: "deceased", label: "Deceased" },
        { value: "other", label: "Other" },
      ],
    };
    return statusOptionsMap[formState.petStatus] || [];
  };

  const getBreedOptions = () => {
    const breedOptionsMap = {
      dog: [
        { value: "", label: "None" },
        { value: "labradorRetriever", label: "Labrador Retriever" },
        { value: "germanShepherd", label: "German Shepherd" },
        { value: "goldenRetriever", label: "Golden Retriever" },
        { value: "bulldog", label: "Bulldog" },
        { value: "beagle", label: "Beagle" },
        { value: "poodle", label: "Poodle" },
        { value: "rottweiler", label: "Rottweiler" },
        { value: "yorkshireTerrier", label: "Yorkshire Terrier" },
        { value: "boxer", label: "Boxer" },
        { value: "dachshund", label: "Dachshund" },
      ],
      cat: [
        { value: "", label: "None" },
        { value: "Persian", label: "Persian" },
        { value: "maineCoon", label: "Maine Coon" },
        { value: "ragdoll", label: "Ragdoll" },
        { value: "siamese", label: "Siamese" },
        { value: "scottishFold", label: "Scottish Fold" },
        { value: "sphynx", label: "Sphynx" },
        { value: "bengal", label: "Bengal" },
        { value: "birman", label: "Birman" },
        { value: "americanShorthair", label: "American Shorthair" },
      ],
      cow: [
        { value: "", label: "None" },
        { value: "holstein", label: "Holstein" },
        { value: "jersey", label: "Jersey" },
        { value: "guernsey", label: "Guernsey" },
        { value: "brownSwiss", label: "Brown Swiss" },
        { value: "ayrshire", label: "Ayrshire" },
        { value: "hereford", label: "Hereford" },
        { value: "angus", label: "Angus" },
        { value: "brahman", label: "Brahman" },
        { value: "simmental", label: "Simmental" },
        { value: "charolais", label: "Charolais" },
      ],
      horse: [
        { value: "", label: "None" },
        { value: "arabian", label: "Arabian" },
        { value: "thoroughbred", label: "Thoroughbred" },
        { value: "quarterHorse", label: "Quarter Horse" },
        { value: "clydesdale", label: "Clydesdale" },
        { value: "friesian", label: "Friesian" },
        { value: "appaloosa", label: "Appaloosa" },
        { value: "shetlandPony", label: "Shetland Pony" },
        { value: "americanPaintHorse", label: "American Paint Horse" },
        { value: "morgan", label: "Morgan" },
        { value: "tennesseeWalkingHorse", label: "Tennessee Walking Horse" },
      ],
    };
    return breedOptionsMap[formState.petCategory] || [];
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom textAlign="center">
            Report a Pet
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                style={{ fontWeight: "500" }}
                gutterBottom
                textAlign="left"
              >
                Pet Details
              </Typography>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="petStatus-label" shrink>
                    Status*
                  </InputLabel>
                  <Select
                    labelId="petStatus-label"
                    id="petStatus"
                    value={formState.petStatus}
                    onChange={(e) => handleChange("petStatus", e.target.value)}
                    label="Status*"
                    notched
                  >
                    {petStatusOptions.map((status) => (
                      <MenuItem key={status.value} value={status.value}>
                        {status.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="petCategory-label" shrink>
                    Category*
                  </InputLabel>
                  <Select
                    labelId="petCategory-label"
                    id="petCategory"
                    value={formState.petCategory}
                    label="Category*"
                    notched
                    onChange={(e) => {
                      handleChange("petCategory", e.target.value);
                      handleChange("petAge", "");
                    }}
                  >
                    {petCategories.map((category) => (
                      <MenuItem key={category.value} value={category.value}>
                        {category.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  id="petIdentifier"
                  name="petIdentifier"
                  label="Identifier"
                  fullWidth
                  autoComplete="petIdentifier"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={formState.petIdentifier}
                  placeholder="Pet's name or identifier (e.g. name on necklace, tag on ear)"
                  onChange={(e) =>
                    handleChange("petIdentifier", e.target.value)
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="petSize-label" shrink>
                    Size
                  </InputLabel>
                  <Select
                    labelId="petSize-label"
                    id="petSize"
                    value={formState.petSize}
                    label="Size"
                    notched
                    onChange={(e) => handleChange("petSize", e.target.value)}
                  >
                    {petSizeOptions.map((size) => (
                      <MenuItem key={size.value} value={size.value}>
                        {size.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="petGender-label" shrink>
                    Gender
                  </InputLabel>
                  <Select
                    labelId="petGender-label"
                    id="petGender"
                    value={formState.petGender}
                    label="Gender"
                    notched
                    onChange={(e) => handleChange("petGender", e.target.value)}
                  >
                    {petGenderOptions.map((gender) => (
                      <MenuItem key={gender.value} value={gender.value}>
                        {gender.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="petBehavior-label" shrink>
                    Behavior
                  </InputLabel>
                  <Select
                    labelId="petBehavior-label"
                    id="petBehavior"
                    value={formState.petBehavior}
                    onChange={(e) =>
                      handleChange("petBehavior", e.target.value)
                    }
                    label="Behavior"
                    notched
                  >
                    {petBehaviorOptions.map((behavior) => (
                      <MenuItem key={behavior.value} value={behavior.value}>
                        {behavior.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="petAge-label" shrink>
                    Age
                  </InputLabel>
                  <Select
                    labelId="petAge-label"
                    id="petAge"
                    value={formState.petAge}
                    disabled={!formState.petCategory}
                    label="Age"
                    notched
                    onChange={(e) => handleChange("petAge", e.target.value)}
                  >
                    {getAgeOptions().map((age) => (
                      <MenuItem key={age.value} value={age.value}>
                        {age.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="petBreed-label" shrink>
                    Breed
                  </InputLabel>
                  <Select
                    labelId="petBreed-label"
                    id="petBreed"
                    value={formState.petBreed}
                    disabled={!formState.petCategory}
                    onChange={(e) => handleChange("petBreed", e.target.value)}
                    label="Breed"
                    notched
                  >
                    {getBreedOptions().map((breed) => (
                      <MenuItem key={breed.value} value={breed.value}>
                        {breed.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <PetHealth formState={formState} setFormState={setFormState} />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  style={{ fontWeight: "500" }}
                  gutterBottom
                  textAlign="left"
                >
                  Pet Location
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {/* <Typography variant="body1" gutterBottom textAlign="left">
                  Pinpoint Pet Location
                </Typography> */}
                <TomTomMap onLocationChange={handleLocationChange} />
              </Grid>
              {/* <Grid item xs={12}>
                <Typography
                  variant="body1"
                  style={{ fontWeight: "500" }}
                  gutterBottom
                  textAlign="left"
                >
                  Appearance
                </Typography>
              </Grid> */}
              {/* <Grid item xs={12}>
                <Typography
                  variant="body1"
                  style={{ fontWeight: "500" }}
                  gutterBottom
                  textAlign="left"
                >
                  Main Color
                </Typography>
                <FormGroup row>
                  {colorsList.map((color) => (
                    <div
                      key={color.name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginRight: "15px",
                        cursor: "pointer",
                        width: "100px",
                      }}
                      onClick={(e) => {
                        handleMainColorChange(color.name);
                        // handleChange("petCoatPattern", "");
                        // handleChange("hasMarkings", e.target.checked);

                        // handleChange("markingPattern", "");
                        // handleChange("markingColors", []);
                      }}
                    >
                      <div
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          backgroundColor: color.hexCode,
                          marginRight: "8px",
                          marginBottom: "12px",
                          border:
                            formState.mainColor === color.name
                              ? "2px solid #2a9df4"
                              : "0px solid #dadada",
                        }}
                      ></div>
                      <Typography variant="body1">{color.name}</Typography>
                    </div>
                  ))}
                </FormGroup>
              </Grid> */}

              {/* <>
                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Does the pet have markings?
                    </FormLabel>
                    <RadioGroup
                      value={formState.markingPattern}
                      onChange={handleMarkingPatternChange}
                    >
                      {coatPatternOptions.map((pattern) => (
                        <FormControlLabel
                          key={pattern.value}
                          value={pattern.value}
                          control={<Radio />}
                          label={pattern.label}
                        />
                      ))}
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: "500" }}
                    gutterBottom
                    textAlign="left"
                  >
                    Marking Colors
                  </Typography>
                  <FormGroup row>
                    {colorsList.map((color) => (
                      <div
                        key={color.name}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginRight: "15px",
                          cursor:
                            formState.markingPattern !== "No"
                              ? "pointer"
                              : "not-allowed",
                          width: "100px",
                          opacity: formState.markingPattern !== "No" ? 1 : 0.5, // Adjust opacity based on marking pattern selection
                        }}
                        onClick={() =>
                          formState.markingPattern !== "No" &&
                          handleMarkingColorChange(color.name)
                        } // Only allow click if marking pattern is not "No"
                      >
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            backgroundColor: color.hexCode,
                            marginRight: "8px",
                            marginBottom: "12px",
                            border: formState.markingColors.includes(color.name)
                              ? "2px solid #2a9df4"
                              : "0px solid #dadada",
                          }}
                        ></div>
                        <Typography variant="body1">{color.name}</Typography>
                      </div>
                    ))}
                  </FormGroup>
                </Grid>
              </> */}
              {/* <> */}
              {/* <Grid container spacing={2}> */}
              {/* <Grid item xs={12}>
                <Typography
                  variant="body1"
                  style={{ fontWeight: "500" }}
                  gutterBottom
                  textAlign="left"
                >
                  Appearance
                </Typography>
              </Grid> */}
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  {/* <FormLabel component="legend">
                    Does the pet have markings?
                  </FormLabel> */}
                  <Typography
                    variant="body1"
                    style={{ fontWeight: "500" }}
                    gutterBottom
                    textAlign="left"
                  >
                    Does the pet have markings?
                  </Typography>
                  <RadioGroup
                    style={{ display: "flex !important", flexDirection: "row" }}
                    value={formState.markingPattern}
                    onChange={handleMarkingPatternChange}
                  >
                    {coatPatternOptions.map((pattern) => (
                      <FormControlLabel
                        key={pattern.value}
                        value={pattern.value}
                        control={<Radio />}
                        label={pattern.label}
                      />
                    ))}
                    {/* <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    /> */}
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Typography
                  variant="body1"
                  style={{ fontWeight: "500" }}
                  gutterBottom
                  textAlign="left"
                >
                  Main Color
                </Typography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    border: "1px solid #dadada",
                    borderRadius: "5px",
                    padding: "10px",
                    justifyContent: "center",
                  }}
                  onClick={() => setMainColorDialogOpen(true)}
                >
                  {formState.mainColor ? (
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        backgroundColor: colorsList.find(
                          (color) => color.name === formState.mainColor
                        ).hexCode,
                        marginRight: "10px",
                      }}
                    />
                  ) : null}
                  <Typography variant="body1">
                    {formState.mainColor
                      ? formState.mainColor
                      : "Click to choose one color"}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Typography
                  variant="body1"
                  style={{ fontWeight: "500" }}
                  gutterBottom
                  textAlign="left"
                >
                  Marking Colors
                </Typography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor:
                      formState.markingPattern === ""
                        ? "not-allowed"
                        : "pointer",
                    border: "1px solid #dadada",
                    borderRadius: "5px",
                    padding: "10px",
                    justifyContent: "center",
                    opacity: formState.markingPattern === "" ? 0.5 : 1,
                  }}
                  onClick={() =>
                    formState.markingPattern !== "" &&
                    setMarkingColorDialogOpen(true)
                  }
                >
                  {formState.markingColors.length > 0 ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center !important",
                        alignItems: "center !important",
                      }}
                    >
                      {formState.markingColors.map((colorName) => (
                        <div
                          key={colorName}
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            backgroundColor: colorsList.find(
                              (color) => color.name === colorName
                            ).hexCode,
                            marginRight: "10px",
                          }}
                        >
                          {/* <p>{colorName}</p> */}
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <Typography variant="body1">
                    {formState.markingColors.length > 0
                      ? // ? "Click to change colors"
                        ""
                      : "Click to choose up to two colors"}
                  </Typography>
                </div>
              </Grid>
              {/* <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    Does the pet have markings?
                  </FormLabel>
                  <RadioGroup
                    value={formState.markingPattern}
                    onChange={handleMarkingPatternChange}
                  >
                    {coatPatternOptions.map((pattern) => (
                      <FormControlLabel
                        key={pattern.value}
                        value={pattern.value}
                        control={<Radio />}
                        label={pattern.label}
                      />
                    ))}
                    <FormControlLabel value="" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              </Grid> */}
            </Grid>

            {/* {formState.markingPattern !== "" && (
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Typography
                  variant="body1"
                  style={{ fontWeight: "500" }}
                  gutterBottom
                  textAlign="left"
                >
                  Marking Colors
                </Typography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    border: "1px solid #dadada",
                    borderRadius: "5px",
                    padding: "10px",
                    justifyContent: "center",
                  }}
                  onClick={() => setMarkingColorDialogOpen(true)}
                >
                  {formState.markingColors.length > 0 ? (
                    <div style={{ display: "flex" }}>
                      {formState.markingColors.map((colorName) => (
                        <div
                          key={colorName}
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            backgroundColor: colorsList.find(
                              (color) => color.name === colorName
                            ).hexCode,
                            marginRight: "10px",
                          }}
                        />
                      ))}
                    </div>
                  ) : null}
                  <Typography variant="body1">
                    {formState.markingColors.length > 0
                      ? "Click to change colors"
                      : "Click to choose colors"}
                  </Typography>
                </div>
              </Grid>
            )} */}

            {/* Main Color Dialog */}
            <Dialog
              open={mainColorDialogOpen}
              onClose={() => setMainColorDialogOpen(false)}
            >
              <DialogTitle>
                Select Main Color
                <IconButton
                  aria-label="close"
                  onClick={() => setMainColorDialogOpen(false)}
                  style={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <FormGroup row>
                  {colorsList.map((color) => (
                    <div
                      key={color.name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginRight: "1rem",
                        marginBottom: "1rem",
                        cursor: "pointer",
                        width: "100px",
                      }}
                      onClick={() => handleMainColorChange(color.name)}
                    >
                      <div
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          backgroundColor: color.hexCode,
                          marginRight: "8px",
                          border:
                            formState.mainColor === color.name
                              ? "2px solid #2a9df4"
                              : "0px solid #dadada",
                        }}
                      />
                      <Typography variant="body1">{color.name}</Typography>
                    </div>
                  ))}
                </FormGroup>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={() => setMainColorDialogOpen(false)}
                  color="primary"
                >
                  Close
                </Button>
              </DialogActions>
            </Dialog>

            <Dialog
              open={markingColorDialogOpen}
              onClose={() => setMarkingColorDialogOpen(false)}
            >
              <DialogTitle>
                Select Marking Colors
                <IconButton
                  aria-label="close"
                  onClick={() => setMarkingColorDialogOpen(false)}
                  style={{ position: "absolute", right: 8, top: 8 }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <FormGroup row>
                  {colorsList.map((color) => (
                    <div
                      key={color.name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginRight: "1rem",
                        marginBottom: "1rem",
                        cursor: "pointer",
                        width: "100px",
                      }}
                      onClick={() => handleMarkingColorChange(color.name)}
                    >
                      <div
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          backgroundColor: color.hexCode,
                          marginRight: "8px",
                          border: formState.markingColors.includes(color.name)
                            ? "2px solid #2a9df4"
                            : "0px solid #dadada",
                        }}
                      />
                      <Typography variant="body1">{color.name}</Typography>
                    </div>
                  ))}
                </FormGroup>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={() => setMarkingColorDialogOpen(false)}
                  color="primary"
                >
                  Close
                </Button>
              </DialogActions>
            </Dialog>

            <Grid item xs={12}>
              <Typography
                variant="body1"
                style={{ fontWeight: "500" }}
                gutterBottom
                textAlign="left"
              >
                Date / Time
              </Typography>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  required
                  id="petLostOrFoundDate"
                  name="petLostOrFoundDate"
                  label="Date"
                  type="date"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={formState.petLostOrFoundDate}
                  onChange={(e) =>
                    handleChange("petLostOrFoundDate", e.target.value)
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  required
                  id="time"
                  name="petLostOrFoundDate"
                  label="Time"
                  type="time"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={formState.petLostOrFoundTime}
                  onChange={(e) =>
                    handleChange("petLostOrFoundTime", e.target.value)
                  }
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                style={{ fontWeight: "500" }}
                gutterBottom
                textAlign="left"
              >
                Upload File
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ImageUploader />
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  style={{ fontWeight: "500" }}
                  gutterBottom
                  textAlign="left"
                >
                  Contact Information
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  id="contactPhone"
                  name="contactPhone"
                  label="Phone"
                  type="text"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={formState.contactPhone}
                  onChange={(e) => handleChange("contactPhone", e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  id="contactEmail"
                  name="contactEmail"
                  label="Email"
                  type="email"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={formState.contactEmail}
                  onChange={(e) => handleChange("contactEmail", e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="notes"
                  name="notes"
                  label="Notes"
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  value={formState.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                  placeholder="Appearance, behavior, special medical care, circumstances of loss, or any other relevant notes."
                  InputLabelProps={{
                    shrink: true, // Always shrink the label
                  }}
                />
                {/* <InputLabel htmlFor="notes">Notes</InputLabel> */}
              </Grid>

              {/* <Grid item xs={12} sm={12} md={12} lg={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="petStatus-label" shrink>
                    Follow-Up Updates
                  </InputLabel>
                  <Select
                    labelId="petStatus-label"
                    id="petStatus"
                    value={formState.petStatus}
                    onChange={(e) => handleChange("petStatus", e.target.value)}
                    label="Follow-Up Updates"
                    notched
                  >
                    {petLastStatusOptions.map((status) => (
                      <MenuItem key={status.value} value={status.value}>
                        {status.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid> */}

              <Grid item xs={12} sm={12} md={12} lg={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="petLastStatus-label" shrink>
                    Updated Status
                  </InputLabel>
                  <Select
                    labelId="petLastStatus-label"
                    id="petLastStatus"
                    value={formState.petLastStatus}
                    disabled={!formState.petStatus}
                    label="Follow Up Updates"
                    notched
                    onChange={(e) =>
                      handleChange("petLastStatus", e.target.value)
                    }
                  >
                    {getLastStatusOptions().map((status) => (
                      <MenuItem key={status.value} value={status.value}>
                        {status.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="petLastStatusDescription"
                  name="petLastStatusDescription"
                  label="Updated Status Description"
                  disabled={!formState.petLastStatus}
                  fullWidth
                  // multiline
                  // rows={4}
                  variant="outlined"
                  value={formState.petLastStatusDescription}
                  onChange={(e) =>
                    handleChange("petLastStatusDescription", e.target.value)
                  }
                  placeholder="Enter details such as where the pet was found, shelter name, vet clinic name, and any additional information."
                  InputLabelProps={{
                    shrink: true, // Always shrink the label
                  }}
                />
                {/* <InputLabel htmlFor="notes">Notes</InputLabel> */}
              </Grid>

              {/* <Grid item xs={12}>
                Follow-Up Actions: Update on Pet's Status (e.g., Reunited,
                Adopted) Feedback on Services Provided
              </Grid>
              <Grid item xs={12}>
                Emergency Contacts: Local Animal Shelters Veterinary Clinics
                Animal Control Agencies
              </Grid> */}
              <Grid item xs={12}>
                <Alert severity="info">
                  <AlertTitle>{"INFORMATION"}</AlertTitle>
                  {
                    "This will be made public, please do not provide sensitive information that you would like kept private!"
                  }
                </Alert>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  // startIcon={<SearchIcon />}
                  // size="large"
                  style={{
                    // marginTop: "2rem",
                    marginLeft: "auto",
                    marginRight: "0",
                    display: "flex",
                    backgroundColor: "#ffc107",
                    color: "rgba(0, 0, 0, 0.87)",
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CreatePetPage;

// Basic Information:

// Pet Name
// Pet Species (e.g., Dog, Cat, Bird, Rabbit)
// Pet Breed
// Pet Color
// Pet Gender
// Pet Age
// Pet Size (e.g., Small, Medium, Large)
// Pet Weight
// Unique Identifiers (e.g., Microchip ID, Collar ID)
// Appearance Details:

// Coat Pattern
// Markings
// Eye Color
// Fur Length
// Tail Type
// Ear Shape
// Health Information:

// Health Condition (e.g., Healthy, Injured, Sick)
// Medical Conditions
// Required Medications
// Allergies
// Vaccination Status
// Microchip Status
// Dietary Needs
// Lost/Found Details:

// Date and Time Lost/Found
// Location Lost/Found
// Last Seen Location
// Circumstances of Loss/Discovery
// Area Description (e.g., Urban, Rural, Wooded)
// Contact Information:

// Owner's Name
// Owner's Contact Information (Phone, Email)
// Finder's Contact Information (if found)
// Additional Information:

// Reward Offered
// Behavior Traits
// Pet's Likes and Dislikes
// Personality Description
// Any Identifying Features
// Collar Description
// Photos of the Pet
// Videos of the Pet
// Legal Information (if applicable):

// Pet License Information
// Proof of Ownership
// Police Report Details (for theft cases)
// Follow-Up Actions:

// Update on Pet's Status (e.g., Reunited, Adopted)
// Feedback on Services Provided
// Social Media Integration:

// Share Buttons for Social Media Platforms
// Links to Share Lost/Found Pet Information
// Emergency Contacts:

// Local Animal Shelters
// Veterinary Clinics
// Animal Control Agencies
