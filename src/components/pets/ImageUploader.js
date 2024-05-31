// import React, { useState } from "react";
// import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";

// function ImageUploader() {
//   const [images, setImages] = useState([]);

//   const handleImageUpload = (event) => {
//     const newImages = Array.from(event.target.files);
//     setImages([...images, ...newImages]);
//   };

//   return (
//     <Grid container spacing={3}>
//       <Grid item xs={12}>
//         <input
//           accept="image/*"
//           style={{ display: "none" }}
//           id="contained-button-file"
//           multiple
//           type="file"
//           onChange={handleImageUpload}
//         />
//         <label htmlFor="contained-button-file">
//           <Button variant="contained" component="span">
//             Choose Images
//           </Button>
//         </label>
//       </Grid>
//       {/* Display uploaded images */}
//       {images.map((image, index) => (
//         <Grid item key={index} xs={4}>
//           <img
//             src={URL.createObjectURL(image)}
//             alt={`Uploaded ${index}`}
//             style={{ maxWidth: "100%" }}
//           />
//         </Grid>
//       ))}
//     </Grid>
//   );
// }

// export default ImageUploader;
// import React, { useState } from "react";
// import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";

// function ImageUploader() {
//   const [images, setImages] = useState([null, null, null]); // Initialize with 3 null values

//   const handleImageUpload = (event, index) => {
//     const newImage = event.target.files[0];
//     const updatedImages = [...images];
//     updatedImages[index] = newImage;
//     setImages(updatedImages);
//   };

//   return (
//     <Grid container spacing={3}>
//       {/* Display 3 boxes to select images */}
//       {[0, 1, 2].map((index) => (
//         <Grid item key={index} xs={4}>
//           <input
//             accept="image/*"
//             style={{ display: "none" }}
//             id={`contained-button-file-${index}`}
//             type="file"
//             onChange={(e) => handleImageUpload(e, index)}
//           />
//           <label htmlFor={`contained-button-file-${index}`}>
//             <Button variant="contained" component="span">
//               {images[index]
//                 ? `Image ${index + 1} Selected`
//                 : `Select Image ${index + 1}`}
//             </Button>
//           </label>
//         </Grid>
//       ))}
//       {/* Display selected images */}
//       {images.map((image, index) => (
//         <Grid item key={index} xs={4}>
//           {image && (
//             <img
//               src={URL.createObjectURL(image)}
//               alt={`Uploaded ${index}`}
//               style={{ maxWidth: "100%" }}
//             />
//           )}
//         </Grid>
//       ))}
//     </Grid>
//   );
// }

// export default ImageUploader;
// import React, { useState } from "react";
// import Grid from "@mui/material/Grid";
// import { Button, IconButton } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// function ImageUploader() {
//   const [images, setImages] = useState([null, null, null]); // Initialize with 3 null values

//   const handleImageUpload = (event, index) => {
//     const newImage = event.target.files[0];
//     const updatedImages = [...images];
//     updatedImages[index] = newImage;
//     setImages(updatedImages);
//   };

//   return (
//     <Grid container spacing={3}>
//       {/* Display 3 boxes to select images */}
//       {[0].map((index) => (
//         <Grid item key={index} xs={4}>
//           <input
//             accept="image/*"
//             style={{ display: "none" }}
//             id={`contained-button-file-${index}`}
//             type="file"
//             onChange={(e) => handleImageUpload(e, index)}
//           />
//           <label htmlFor={`contained-button-file-${index}`}>
//             <div
//               style={{
//                 width: 200,
//                 height: 200,
//                 border: "2px dashed #ccc",
//                 borderRadius: "1rem",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 position: "relative",
//                 cursor: "pointer",
//               }}
//             >
//               {images[index] ? (
//                 <img
//                   src={URL.createObjectURL(images[index])}
//                   alt={`Uploaded ${index}`}
//                   style={{ maxWidth: "100%", maxHeight: "100%" }}
//                 />
//               ) : (
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                 >
//                   <div>
//                     <p
//                       style={{
//                         position: "absolute",
//                         top: "50%",
//                         left: "50%",
//                         transform: "translate(-50%, -50%)",
//                       }}
//                     >
//                       Drag files to upload or
//                     </p>
//                   </div>
//                   <div>
//                     <IconButton
//                       component="span"
//                       style={{
//                         position: "absolute",
//                         top: "30%",
//                         left: "50%",
//                         transform: "translate(-50%, -50%)",
//                       }}
//                     >
//                       <CloudUploadIcon
//                         style={{ width: "50px", height: "50px" }}
//                       />
//                     </IconButton>
//                   </div>
//                   <Button
//                     size="small"
//                     style={{ marginTop: "4rem" }}
//                     variant="contained"
//                   >
//                     Browse Files
//                   </Button>
//                   <p>Max file size: 5MB</p>
//                   <p>Supported file types: JPG, PNG</p>
//                 </div>
//               )}
//             </div>
//           </label>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }

// export default ImageUploader;
// import React, { useState } from "react";
// import Grid from "@mui/material/Grid";
// import { IconButton, Typography, Box, Button } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// function ImageUploader() {
//   const [image, setImage] = useState(null);

//   const handleImageUpload = (event) => {
//     const newImage = event.target.files[0];
//     setImage(newImage);
//   };

//   return (
//     <Grid container justifyContent="center">
//       <Grid item>
//         <input
//           accept="image/*"
//           style={{ display: "none" }}
//           id="contained-button-file"
//           type="file"
//           onChange={handleImageUpload}
//         />
//         <label htmlFor="contained-button-file">
//           <Box
//             sx={{
//               minWidth: 220,
//               maxWidth: 400,
//               minHeight: 220,
//               maxHeight: 400,
//               border: "2px dashed #ccc",
//               borderRadius: "8px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               cursor: "pointer",
//               position: "relative",
//               backgroundColor: "#f9f9f9",
//               flexDirection: "column",
//               textAlign: "center",
//               padding: "1rem",
//             }}
//           >
//             {image ? (
//               <img
//                 src={URL.createObjectURL(image)}
//                 alt="Uploaded"
//                 style={{ maxWidth: "100%", maxHeight: "100%" }}
//               />
//             ) : (
//               <>
//                 <IconButton component="span">
//                   <CloudUploadIcon
//                     fontSize="large"
//                     style={{ color: "#00DCE4", width: "3rem", height: "3rem" }}
//                   />
//                 </IconButton>
//                 <Typography variant="h6" style={{ fontSize: "1rem" }}>
//                   Drag files to upload <br />
//                   <Typography
//                     variant="h6"
//                     style={{ fontSize: "0.9rem", fontWeight: "400" }}
//                   >
//                     or
//                   </Typography>
//                 </Typography>

//                 <Typography variant="h6" style={{ fontSize: "1rem" }}>
//                   Browse Files
//                 </Typography>

//                 {/* <Button
//                   variant="outline"
//                   style={{
//                     textTransform: "Capitalize",
//                     border: "1px solid #00DCE4",
//                     borderRadius: "1rem",
//                     padding: "0.1rem 1rem",
//                     color: "#00DCE4",
//                     fontWeight: "500",
//                   }}
//                 >
//                   Browse Files
//                 </Button> */}
//                 <Typography variant="caption" style={{ marginTop: "1rem" }}>
//                   Max file size: 5MB
//                 </Typography>
//                 <Typography variant="caption">
//                   Supported file types: JPG, PNG, GIF
//                 </Typography>
//               </>
//             )}
//           </Box>
//         </label>
//       </Grid>
//     </Grid>
//   );
// }

// export default ImageUploader;
// import React, { useState } from "react";
// import Grid from "@mui/material/Grid";
// import { IconButton, Typography, Box } from "@mui/material";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";

// function ImageUploader() {
//   const [image, setImage] = useState(null);

//   const handleImageUpload = (event) => {
//     const newImage = event.target.files[0];
//     setImage(newImage);
//   };

//   return (
//     <Grid container justifyContent="center" spacing={2}>
//       <Grid item>
//         <input
//           accept="image/*"
//           style={{ display: "none" }}
//           id="contained-button-file"
//           type="file"
//           onChange={handleImageUpload}
//         />
//         <label htmlFor="contained-button-file">
//           <Box
//             sx={{
//               minWidth: 220,
//               maxWidth: 400,
//               minHeight: 220,
//               maxHeight: 400,
//               border: "2px dashed #ccc",
//               borderRadius: "8px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               cursor: "pointer",
//               position: "relative",
//               backgroundColor: "#f9f9f9",
//               flexDirection: "column",
//               textAlign: "center",
//               padding: "1rem",
//             }}
//           >
//             {image ? (
//               <img
//                 src={URL.createObjectURL(image)}
//                 alt="Uploaded"
//                 style={{ maxWidth: "100%", maxHeight: "100%" }}
//               />
//             ) : (
//               <>
//                 <IconButton component="span">
//                   <CloudUploadIcon
//                     fontSize="large"
//                     style={{ color: "#00DCE4", width: "3rem", height: "3rem" }}
//                   />
//                 </IconButton>
//                 <Typography variant="h6" style={{ fontSize: "1rem" }}>
//                   Drag files to upload <br />
//                   <Typography
//                     variant="h6"
//                     style={{ fontSize: "0.9rem", fontWeight: "400" }}
//                   >
//                     or
//                   </Typography>
//                 </Typography>
//                 <Typography variant="h6" style={{ fontSize: "1rem" }}>
//                   Browse Files
//                 </Typography>
//                 <Typography variant="caption" style={{ marginTop: "1rem" }}>
//                   Max file size: 5MB
//                 </Typography>
//                 <Typography variant="caption">
//                   Supported file types: JPG, PNG, GIF
//                 </Typography>
//               </>
//             )}
//           </Box>
//         </label>
//       </Grid>
//       {image && (
//         <Grid item>
//           <Typography variant="body1" style={{ marginTop: "1rem" }}>
//             {image.name}
//           </Typography>
//         </Grid>
//       )}
//     </Grid>
//   );
// }

// export default ImageUploader;
// import React, { useState } from "react";
// import Grid from "@mui/material/Grid";
// import {
//   IconButton,
//   Typography,
//   Box,
//   Checkbox,
//   FormControlLabel,
// } from "@mui/material";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import CancelIcon from "@mui/icons-material/Cancel";

// const MAX_FILE_SIZE_MB = 5;
// const SUPPORTED_FORMATS = ["image/jpeg", "image/png", "image/gif"];

// function ImageUploader() {
//   const [image, setImage] = useState(null);
//   const [isValid, setIsValid] = useState(false);

//   const handleImageUpload = (event) => {
//     const newImage = event.target.files[0];
//     if (newImage) {
//       const isFileSizeValid = newImage.size <= MAX_FILE_SIZE_MB * 1024 * 1024;
//       const isFileTypeValid = SUPPORTED_FORMATS.includes(newImage.type);
//       setIsValid(isFileSizeValid && isFileTypeValid);
//       setImage(newImage);
//     }
//   };

//   return (
//     <Grid container justifyContent="center" spacing={2}>
//       <Grid item>
//         <input
//           accept="image/*"
//           style={{ display: "none" }}
//           id="contained-button-file"
//           type="file"
//           onChange={handleImageUpload}
//         />
//         <label htmlFor="contained-button-file">
//           <Box
//             sx={{
//               minWidth: 220,
//               maxWidth: 400,
//               minHeight: 220,
//               maxHeight: 400,
//               border: "2px dashed #ccc",
//               borderRadius: "8px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               cursor: "pointer",
//               position: "relative",
//               backgroundColor: "#f9f9f9",
//               flexDirection: "column",
//               textAlign: "center",
//               padding: "1rem",
//             }}
//           >
//             {image ? (
//               <img
//                 src={URL.createObjectURL(image)}
//                 alt="Uploaded"
//                 style={{ maxWidth: "100%", maxHeight: "100%" }}
//               />
//             ) : (
//               <>
//                 <IconButton component="span">
//                   <CloudUploadIcon
//                     fontSize="large"
//                     style={{ color: "#00DCE4", width: "3rem", height: "3rem" }}
//                   />
//                 </IconButton>
//                 <Typography variant="h6" style={{ fontSize: "1rem" }}>
//                   Drag files to upload <br />
//                   <Typography
//                     variant="h6"
//                     style={{ fontSize: "0.9rem", fontWeight: "400" }}
//                   >
//                     or
//                   </Typography>
//                 </Typography>
//                 <Typography variant="h6" style={{ fontSize: "1rem" }}>
//                   Browse Files
//                 </Typography>
//                 <Typography variant="caption" style={{ marginTop: "1rem" }}>
//                   Max file size: 5MB
//                 </Typography>
//                 <Typography variant="caption">
//                   Supported file types: JPG, PNG, GIF
//                 </Typography>
//               </>
//             )}
//           </Box>
//         </label>
//       </Grid>
//       {image && (
//         <Grid item>
//           <Typography variant="body1" style={{ marginTop: "1rem" }}>
//             {image.name}
//           </Typography>
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={image.size <= MAX_FILE_SIZE_MB * 1024 * 1024}
//                 icon={<CancelIcon />}
//                 checkedIcon={<CheckCircleOutlineIcon />}
//                 disabled
//               />
//             }
//             label="File size is less than 5MB"
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={SUPPORTED_FORMATS.includes(image.type)}
//                 icon={<CancelIcon />}
//                 checkedIcon={<CheckCircleOutlineIcon />}
//                 disabled
//               />
//             }
//             label="File type is supported (JPG, PNG, GIF)"
//           />
//           {isValid ? (
//             <Typography variant="h6" color="green">
//               All criteria met!
//             </Typography>
//           ) : (
//             <Typography variant="h6" color="red">
//               Please upload a valid file.
//             </Typography>
//           )}
//         </Grid>
//       )}
//     </Grid>
//   );
// }

// export default ImageUploader;
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import {
  IconButton,
  Typography,
  Box,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const MAX_FILE_SIZE_MB = 5;
const SUPPORTED_FORMATS = ["image/jpeg", "image/png", "image/gif"];

function ImageUploader() {
  const [image, setImage] = useState(null);
  const [isValid, setIsValid] = useState(false);

  const handleImageUpload = (event) => {
    const newImage = event.target.files[0];
    if (newImage) {
      const isFileSizeValid = newImage.size <= MAX_FILE_SIZE_MB * 1024 * 1024;
      const isFileTypeValid = SUPPORTED_FORMATS.includes(newImage.type);
      setIsValid(isFileSizeValid && isFileTypeValid);
      setImage(newImage);
    }
  };

  return (
    <Grid container justifyContent="center" spacing={2}>
      {/* <Grid item xs={12}> */}
      <Grid item xs={12}>
        {isValid ? (
          <Alert severity="success">
            <AlertTitle>Good!</AlertTitle>
          </Alert>
        ) : (
          image && (
            <Alert severity="warning">
              <AlertTitle>Please upload a valid file.</AlertTitle>
            </Alert>
          )
        )}
      </Grid>
      {/* </Grid> */}

      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="contained-button-file"
          type="file"
          onChange={handleImageUpload}
        />
        <label htmlFor="contained-button-file">
          <Box
            sx={{
              // minWidth: 220,
              // maxWidth: 400,
              // minHeight: 220,
              // maxHeight: 400,
              width: 300,
              height: 300,
              border: "2px dashed #ccc",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              position: "relative",
              backgroundColor: "#f9f9f9",
              flexDirection: "column",
              textAlign: "center",
              padding: "1rem",
            }}
          >
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Uploaded"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            ) : (
              <>
                <IconButton component="span">
                  <CloudUploadIcon
                    fontSize="large"
                    // style={{ color: "#00DCE4", width: "3rem", height: "3rem" }}
                    style={{ color: "#ffc107", width: "3rem", height: "3rem" }}
                  />
                </IconButton>
                <Typography variant="h6" style={{ fontSize: "1rem" }}>
                  Drag files to upload <br />
                  <Typography
                    variant="h6"
                    style={{ fontSize: "0.9rem", fontWeight: "400" }}
                  >
                    or
                  </Typography>
                </Typography>
                <Typography variant="h6" style={{ fontSize: "1rem" }}>
                  Browse Files
                </Typography>
                <Typography variant="caption" style={{ marginTop: "1rem" }}>
                  Max file size: 5MB
                </Typography>
                <Typography variant="caption">
                  Supported file types: JPG, PNG, GIF
                </Typography>
              </>
            )}
          </Box>
        </label>
      </Grid>
      {image && (
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          display={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          {/* <Typography variant="body1" style={{ marginTop: "1rem" }}>
            <span style={{ fontWeight: "500" }}>File:</span> {image.name}
          </Typography> */}
          <FormControlLabel
            control={
              <Checkbox
                checked={image.size}
                icon={<CancelIcon />}
                checkedIcon={<CheckCircleOutlineIcon />}
                disabled
                style={{
                  color: image.size ? "green" : "red",
                }}
              />
            }
            label={
              <Typography
              // style={{
              //   color: image.size ? "green" : "red",
              // }}
              >
                {image.name}
              </Typography>
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={image.size <= MAX_FILE_SIZE_MB * 1024 * 1024}
                icon={<CancelIcon />}
                checkedIcon={<CheckCircleOutlineIcon />}
                disabled
                style={{
                  color:
                    image.size <= MAX_FILE_SIZE_MB * 1024 * 1024
                      ? "green"
                      : "red",
                }}
              />
            }
            label={
              <Typography
              // style={{
              //   color:
              //     image.size <= MAX_FILE_SIZE_MB * 1024 * 1024
              //       ? "green"
              //       : "red",
              // }}
              >
                File size is less than 5MB
              </Typography>
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={SUPPORTED_FORMATS.includes(image.type)}
                icon={<CancelIcon />}
                checkedIcon={<CheckCircleOutlineIcon />}
                disabled
                style={{
                  color: SUPPORTED_FORMATS.includes(image.type)
                    ? "green"
                    : "red",
                }}
              />
            }
            label={
              <Typography
              // style={{
              //   color: SUPPORTED_FORMATS.includes(image.type)
              //     ? "green"
              //     : "red",
              // }}
              >
                File type is supported (JPG, PNG, GIF)
              </Typography>
            }
          />
          {/* {isValid ? (
            <Typography variant="h6" style={{ color: "green" }}>
              Good!
            </Typography>
          ) : (
            <Typography variant="h6" style={{ color: "red" }}>
              Please upload a valid file.
            </Typography>
          )} */}
        </Grid>
      )}
    </Grid>
  );
}

export default ImageUploader;
