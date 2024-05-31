// import React, { useState } from "react";
// import Grid from "@mui/material/Grid";
// import TextField from "@mui/material/TextField";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import Chip from "@mui/material/Chip";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Typography from "@mui/material/Typography";

// import axios from "axios";
// import { BASE_URL } from "../middleware/config";
// import TomTomMap from "../components/map/TomTomMap";
// import "@tomtom-international/web-sdk-maps/dist/maps.css";

// function CreatePetPage() {
//   const [petStatus, setPetStatus] = useState("");
//   const [petCategory, setPetCategory] = useState("");
//   const [petIdentifier, setPetIdentifier] = useState("");
//   const [petSize, setPetSize] = useState("");
//   const [petGender, setPetGender] = useState("");
//   const [petAge, setPetAge] = useState("");
//   const [petLocation, setPetLocation] = useState({ lat: null, lng: null });
//   // const [petLocation, setPetLocation] = useState("");
//   const [petCoatPattern, setPetCoatPattern] = useState("");

//   const [petColor, setPetColor] = useState("");
//   const [petCoatLength, setPetCoatLength] = useState("");

//   const [petLostOrFoundDate, setPetLostOrFoundDate] = useState(
//     new Date().toISOString().slice(0, 10)
//   );

//   // Define state variables for selected coat pattern and colors
//   const [selectedCoatPattern, setSelectedCoatPattern] = useState("");
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [notes, setNotes] = useState("");

//   const coatPatternOptions = [
//     { value: "solid", label: "Solid" },
//     { value: "stripes", label: "Stripes" },
//     { value: "spots", label: "Spots" },
//     { value: "patches", label: "Patches" },
//     { value: "marbled", label: "Marbled" },
//   ];

//   const handleLocationChange = (coords) => {
//     setPetLocation(coords);
//   };

//   const handleLostOrFoundDateChange = (event) => {
//     setPetLostOrFoundDate(event.target.value);
//   };

//   const handlePetIdentifierChange = (event) => {
//     setPetIdentifier(event.target.value);
//   };

//   const handleNotesChange = (event) => {
//     setNotes(event.target.value);
//   };

//   const handlePetStatusChange = (event) => {
//     setPetStatus(event.target.value);
//   };

//   const handlePetGenderChange = (event) => {
//     setPetGender(event.target.value);
//   };

//   const handlePetSizeChange = (event) => {
//     setPetSize(event.target.value);
//   };

//   const handlePetCoatLengthChange = (event) => {
//     setPetCoatLength(event.target.value);
//   };

//   const handlePetCategoryChange = (event) => {
//     setPetCategory(event.target.value);
//     // Reset pet age when changing pet category
//     setPetAge("");
//   };

//   const getAgeOptions = () => {
//     // Map pet categories to their corresponding age options
//     const ageOptionsMap = {
//       dog: [
//         { value: "puppy", label: "Puppy" },
//         { value: "adolescent", label: "Adolescent" },
//         { value: "adult", label: "Adult" },
//         { value: "senior", label: "Senior" },
//       ],
//       cat: [
//         { value: "kitten", label: "Kitten" },
//         { value: "adolescent", label: "Adolescent" },
//         { value: "adult", label: "Adult" },
//         { value: "senior", label: "Senior" },
//       ],
//       cow: [
//         { value: "calf", label: "Calf" },
//         { value: "adolescent", label: "Adolescent" },
//         { value: "adult", label: "Adult" },
//         { value: "senior", label: "Senior" },
//       ],
//       horse: [
//         { value: "foal", label: "Foal" },
//         { value: "adolescent", label: "Adolescent" },
//         { value: "adult", label: "Adult" },
//         { value: "senior", label: "Senior" },
//       ],
//       // Add more categories and age options as needed
//     };
//     return ageOptionsMap[petCategory] || [];
//   };

//   const colorsList = [
//     { name: "Black", hexCode: "#000000" },
//     { name: "Blue", hexCode: "#1A355E" },
//     { name: "Gray", hexCode: "#808080" },
//     { name: "Beige", hexCode: "#E5DECA" },
//     { name: "White", hexCode: "#f7f7f7" },

//     { name: "Cream", hexCode: "#FFFDD0" },
//     { name: "Golden", hexCode: "#FFD700" },
//     { name: "Orange", hexCode: "#FFA500" },
//     { name: "Yellow", hexCode: "#FFFF00" },
//     { name: "Tan", hexCode: "#D2B48C" },
//     { name: "Emerald Green", hexCode: "#046307" },
//     // { name: "Buff", hexCode: "#F0DC82" },
//     { name: "Fawn", hexCode: "#E5AA70" },
//     { name: "Chocolate", hexCode: "#D2691E" },
//     { name: "Chestnut", hexCode: "#954535" },
//     // { name: "Brown", hexCode: "#A52A2A" },
//     { name: "Wine Red", hexCode: "#7B0323" },
//     { name: "Christmas Red", hexCode: "#C30F16" },
//     { name: "Lilac", hexCode: "#BA97AA" },
//   ];

//   const petCategories = [
//     { value: "dog", label: "Dog" },
//     { value: "cat", label: "Cat" },
//     { value: "cow", label: "Cow" },
//     { value: "horse", label: "Horse" },
//     // { value: "chicken", label: "Chicken" },
//     // { value: "sheep", label: "Sheep" },
//     // { value: "goat", label: "Goat" },
//     // { value: "pig", label: "Pig" },

//     // { value: "rabbit", label: "Rabbit" },
//     // { value: "ferret", label: "Ferret" },
//     // { value: "parrot", label: "Parrot" },
//     // { value: "canary", label: "Canary" },
//     // { value: "budgerigar", label: "Budgerigar" },
//     // Add more pet categories as needed
//   ];

//   const petStatusOptions = [
//     { value: "missing", label: "Missing" },
//     { value: "found", label: "Found" },
//     { value: "reunited", label: "Reunited" },
//     { value: "adopted", label: "Adopted" },
//     { value: "sheltered", label: "Sheltered" },
//     { value: "deceased", label: "Deceased" },
//   ];

//   const petCoatLengthOptions = [
//     { value: "", label: "None" },
//     { value: "hairless", label: "Hairless" },
//     { value: "short", label: "Short" },
//     { value: "medium", label: "Medium" },
//     { value: "long", label: "Long" },
//   ];

//   const petSizeOptions = [
//     { value: "", label: "None" },
//     { value: "small", label: "Small" },
//     { value: "medium", label: "Medium" },
//     { value: "large", label: "Large" },
//   ];

//   const petGenderOptions = [
//     { value: "", label: "None" },
//     { value: "he", label: "He" },
//     { value: "she", label: "She" },
//   ];

//   const handleCoatPatternChange = (event) => {
//     const selectedPattern = event.target.value;
//     setSelectedCoatPattern(selectedPattern);

//     // Reset selected colors when coat pattern changes
//     setSelectedColors([]);
//   };
//   const getSelectedColorsText = () => {
//     if (selectedCoatPattern === "solid" && selectedColors.length > 0) {
//       return `Main color: ${selectedColors[0]}`;
//     }

//     if (selectedColors.length > 0) {
//       let colorsText = `Main color: ${selectedColors[0]}`;
//       if (selectedColors.length > 1) {
//         const otherColors = selectedColors.slice(1).join(", ");
//         colorsText += `, ${selectedCoatPattern} colors: ${otherColors}`;
//       }
//       return colorsText;
//     }

//     return "No colors selected";
//   };

//   const handleColorChange = (colorName) => {
//     const isSelected = selectedColors.includes(colorName);
//     const isSolidPattern = selectedCoatPattern === "solid";
//     const maxColors = isSolidPattern ? 1 : 3;

//     let updatedColors;

//     if (isSelected) {
//       // Only allow unselecting the last selected color
//       if (selectedColors[selectedColors.length - 1] === colorName) {
//         updatedColors = selectedColors.filter((color) => color !== colorName);
//       } else {
//         return; // Do nothing if the color is not the last selected one
//       }
//     } else if (selectedColors.length < maxColors) {
//       updatedColors = [...selectedColors, colorName];
//     } else {
//       return;
//     }

//     setSelectedColors(updatedColors);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(`${BASE_URL}/pets`, {
//         petStatus,
//         petCategory,
//         petIdentifier,
//         petSize,
//         petGender,
//         petAge,
//         selectedCoatPattern,
//         petColor,
//         petCoatLength,
//         petLocation,
//         petLostOrFoundDate,
//         notes,
//       });
//       console.log("Pet details sent successfully to the backend.");
//     } catch (error) {
//       console.error("Failed to send pet details to the backend:", error);
//     }
//   };

//   return (
//     <React.Fragment>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={12} md={12} lg={12}>
//           <Typography variant="h4" gutterBottom textAlign="center">
//             Report a Pet
//           </Typography>
//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <FormControl fullWidth variant="standard">
//                   <InputLabel id="petStatus-label">Pet Status</InputLabel>
//                   <Select
//                     labelId="petStatus-label"
//                     id="petStatus"
//                     value={petStatus}
//                     label="Pet Status"
//                     onChange={handlePetStatusChange}
//                   >
//                     {petStatusOptions.map((status) => (
//                       <MenuItem key={status.value} value={status.value}>
//                         {status.label}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControl fullWidth variant="standard">
//                   <InputLabel id="petCategory-label">Pet Category</InputLabel>
//                   <Select
//                     labelId="petCategory-label"
//                     id="petCategory"
//                     value={petCategory}
//                     label="Pet Category"
//                     onChange={handlePetCategoryChange}
//                   >
//                     {petCategories.map((category) => (
//                       <MenuItem key={category.value} value={category.value}>
//                         {category.label}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   id="petIdentifier"
//                   label="Pet Identifier"
//                   value={petIdentifier}
//                   onChange={handlePetIdentifierChange}
//                   variant="standard"
//                   placeholder="Pet's name or identifier (e.g. name on necklace, tag on ear)"
//                 />
//               </Grid>

//               <Grid item xs={12}>
//                 <FormControl fullWidth variant="standard">
//                   <InputLabel id="petSize-label">Pet Size</InputLabel>
//                   <Select
//                     labelId="petSize-label"
//                     id="petSize"
//                     value={petSize}
//                     label="Pet Size"
//                     onChange={handlePetSizeChange}
//                   >
//                     {petSizeOptions.map((size) => (
//                       <MenuItem key={size.value} value={size.value}>
//                         {size.label}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControl fullWidth variant="standard">
//                   <InputLabel id="petGender-label">Pet Gender</InputLabel>
//                   <Select
//                     labelId="petGender-label"
//                     id="petGender"
//                     value={petGender}
//                     label="Pet Gender"
//                     onChange={handlePetGenderChange}
//                   >
//                     {/* <MenuItem value="">
//                       <em>None</em>
//                     </MenuItem> */}
//                     {petGenderOptions.map((gender) => (
//                       <MenuItem key={gender.value} value={gender.value}>
//                         {gender.label}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//                 {/* {petGender && (
//                   <Chip
//                     label={petGender}
//                     onDelete={handleDeselectGender}
//                     style={{ marginTop: "8px" }}
//                   />
//                 )} */}
//               </Grid>

//               <Grid item xs={12}>
//                 <FormControl fullWidth variant="standard">
//                   <InputLabel id="petAge-label">Pet Age</InputLabel>
//                   <Select
//                     labelId="petAge-label"
//                     id="petAge"
//                     value={petAge}
//                     label="Pet Age"
//                     onChange={(e) => setPetAge(e.target.value)}
//                     disabled={!petCategory}
//                   >
//                     {getAgeOptions().map((option) => (
//                       <MenuItem key={option.value} value={option.value}>
//                         {option.label}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               </Grid>

//               <Grid item xs={12}>
//                 <FormControl fullWidth variant="standard">
//                   <InputLabel id="petCoatPattern-label">
//                     Coat Pattern
//                   </InputLabel>
//                   <Select
//                     labelId="petCoatPattern-label"
//                     id="petCoatPattern"
//                     value={selectedCoatPattern}
//                     label="Coat Pattern"
//                     onChange={handleCoatPatternChange}
//                   >
//                     {coatPatternOptions.map((pattern) => (
//                       <MenuItem key={pattern.value} value={pattern.value}>
//                         {pattern.label}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               </Grid>

//               <Grid item xs={12}>
//                 <div style={{ marginTop: "10px" }}>
//                   {getSelectedColorsText()}
//                 </div>
//               </Grid>
//               <Grid item xs={12}>
//                 <InputLabel id="petColors-label">Pet Colors</InputLabel>
//                 <FormControl fullWidth variant="standard">
//                   <FormGroup
//                     style={{
//                       display: "flex",
//                       flexDirection: "row",
//                       alignItems: "center",
//                     }}
//                   >
//                     {colorsList.map((color) => (
//                       <div
//                         key={color.name}
//                         // onClick={() => handleColorChange(color.name)}
//                         onClick={
//                           selectedCoatPattern
//                             ? () => handleColorChange(color.name)
//                             : null
//                         }
//                         style={{
//                           display: "flex",
//                           alignItems: "center",
//                           marginRight: "10px",
//                           cursor: selectedCoatPattern
//                             ? "pointer"
//                             : "not-allowed",
//                           border: selectedColors.includes(color.name)
//                             ? "3px solid aquamarine"
//                             : "1px solid #fff",
//                           borderRadius: "50%",
//                           width: "50px",
//                           height: "50px",
//                           backgroundColor: color.hexCode,
//                           opacity: selectedCoatPattern ? 1 : 0.5, // Add opacity for visual feedback
//                         }}
//                       />
//                     ))}
//                   </FormGroup>
//                 </FormControl>
//               </Grid>
//               {/* <Grid item xs={12}>
//           <InputLabel id="petColors-label">Pet Colors</InputLabel>
//           <FormControl fullWidth variant="standard">
//             <FormGroup
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//               }}
//             >
//               {colorsList.map((color) => (
//                 <div
//                   key={color.name}
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     marginRight: "10px",
//                     cursor: "pointer", // Add cursor pointer to make it clear it's clickable
//                   }}
//                   onClick={() => handleColorChange(color.name)} // Handle color selection on click
//                 >
//                   <div
//                     style={{
//                       width: "50px",
//                       height: "50px",
//                       backgroundColor: color.hexCode,
//                       // Add outline when color is selected
//                       outline: selectedColors.includes(color.name)
//                         ? "3px solid #0096FF"
//                         : "none",
//                       marginRight: "5px",
//                       marginBottom: "8px",
//                       borderRadius: "50%",
//                     }}
//                   ></div>
//                   <span style={{ width: "150px" }}>{color.name}</span>{" "}

//                 </div>
//               ))}
//             </FormGroup>
//           </FormControl>
//         </Grid> */}

//               <Grid item xs={12}>
//                 <FormControl fullWidth variant="standard">
//                   <InputLabel id="petCoatLength-label">
//                     Pet Coat Length
//                   </InputLabel>
//                   <Select
//                     labelId="petCoatLength-label"
//                     id="petCoatLength"
//                     value={petCoatLength}
//                     label="Pet Coat Length"
//                     onChange={handlePetCoatLengthChange}
//                   >
//                     {petCoatLengthOptions.map((length) => (
//                       <MenuItem key={length.value} value={length.value}>
//                         {length.label}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControl fullWidth variant="standard">
//                   {/* <InputLabel id="petLostOrFoundDate-label">
//               Pet Lost or Found Date
//             </InputLabel> */}
//                   <TextField
//                     fullWidth
//                     id="petLostOrFoundDate"
//                     label={`${
//                       petStatus.charAt(0).toUpperCase() + petStatus.slice(1)
//                     } Date`}
//                     type="date"
//                     variant="standard"
//                     value={petLostOrFoundDate}
//                     onChange={handleLostOrFoundDateChange}
//                     disabled={!petStatus}
//                     InputLabelProps={{
//                       shrink: true,
//                     }}
//                   />
//                 </FormControl>
//               </Grid>

//               <Grid item xs={12}>
//                 <Typography variant="body1" gutterBottom textAlign="left">
//                   Pinpoint Pet Location
//                 </Typography>
//                 <TomTomMap onLocationChange={handleLocationChange} />
//               </Grid>

//               <Grid item xs={12}>
//                 picture1, picture2, picture3
//               </Grid>
//               {/* Add more Grid items for additional fields */}
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   multiline
//                   rows={3}
//                   id="notes"
//                   label="Notes"
//                   value={notes}
//                   onChange={handleNotesChange}
//                   placeholder="Appearance, behavior, special medical care, circumstances of loss, or any other relevant notes."
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <button type="submit">Submit</button>
//               </Grid>
//             </Grid>
//           </form>
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }

// export default CreatePetPage;

// // Appearance and Identification: Species (dog, cat, etc.) Breed (if known)
// // Color(s) Markings or distinctive features Size (small, medium, large) Age
// // Collar or tags (if applicable) Location and Time: Date and time lost/found
// // Specific location (address, landmark, neighborhood) City or area Nearby
// // landmarks or notable features Contact Information: Reporter's name Contact
// // phone number Email address Any additional contact details Additional
// // Details: Behavior (friendly, shy, etc.) Medical conditions or special
// // needs (if known) Any relevant circumstances surrounding the loss or
// // discovery Photo upload option for a picture of the pet (if available)
