import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { MenuItem, Box, Select } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import PublicIcon from "@mui/icons-material/Public";
import { Label } from "@mui/icons-material";
import InputLabel from "@mui/material/InputLabel";
import { LanguageContext } from "../middleware/LanguageContext";

const LanguageSelector = () => {
  // const { i18n } = useTranslation();

  // const handleChangeLanguage = (event) => {
  //   const selectedLanguage = event.target.value;
  //   i18n.changeLanguage(selectedLanguage);
  //   localStorage.setItem("preferredLanguage", selectedLanguage);

  //   if (updateUserLanguagePreference) {
  //     updateUserLanguagePreference(selectedLanguage);
  //   }
  // };
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);

  const handleChangeLanguage = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", color: "#fff" }}>
      <Select
        value={selectedLanguage}
        onChange={handleChangeLanguage}
        size="small"
        // value={i18n.language}
        // onChange={handleChangeLanguage}
        style={{
          color: "#fff",
          fontSize: "small",
        }}
      >
        <MenuItem style={{ fontSize: "small" }} value="en">
          EN
        </MenuItem>
        <MenuItem style={{ fontSize: "small" }} value="lv">
          LV
        </MenuItem>
        <MenuItem style={{ fontSize: "small" }} value="ru">
          RU
        </MenuItem>
      </Select>
    </Box>
  );
};

export default LanguageSelector;
// import React from "react";
// import { useTranslation } from "react-i18next";
// import { MenuItem, Select, InputLabel, FormControl, Box } from "@mui/material";
// import LanguageIcon from "@mui/icons-material/Language";

// const LanguageSelector = ({ updateUserLanguagePreference }) => {
//   const { i18n } = useTranslation();

//   const handleChangeLanguage = (event) => {
//     const selectedLanguage = event.target.value;
//     i18n.changeLanguage(selectedLanguage);
//     localStorage.setItem("preferredLanguage", selectedLanguage);

//     if (updateUserLanguagePreference) {
//       updateUserLanguagePreference(selectedLanguage);
//     }
//   };

//   return (
//     <Box sx={{ display: "flex", alignItems: "center", color: "#fff" }}>
//       <LanguageIcon sx={{ mr: 1 }} />
//       <FormControl variant="standard">
//         <InputLabel id="language-selector-label" sx={{ color: "#fff" }}>
//           Language
//         </InputLabel>
//         <Select
//           labelId="language-selector-label"
//           id="language-selector"
//           size="small"
//           value={i18n.language}
//           onChange={handleChangeLanguage}
//           label="Language"
//           style={{ color: "#fff", fontSize: "small" }}
//         >
//           <MenuItem style={{ fontSize: "small" }} value="en">
//             English
//           </MenuItem>
//           <MenuItem style={{ fontSize: "small" }} value="lv">
//             Latvian
//           </MenuItem>
//           <MenuItem style={{ fontSize: "small" }} value="ru">
//             Russian
//           </MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// };

// export default LanguageSelector;
