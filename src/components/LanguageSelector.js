import React, { useContext } from 'react';
import { MenuItem, Select } from '@mui/material';
import { LanguageContext } from '../middleware/LanguageContext';

const LanguageSelector = () => {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);

  const handleChangeLanguage = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <Select
      value={selectedLanguage}
      onChange={handleChangeLanguage}
      size="small"
      sx={{
        color: '#fff', // Text color
        fontWeight: '500',
        fontSize: 'small',

        '& .MuiSelect-icon': {
          color: '#fff', // Dropdown arrow color
        },
      }}
      MenuProps={{
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        getContentAnchorEl: null,
      }}
      variant="outlined"
    >
      <MenuItem style={{ fontSize: 'small' }} value="en">
        EN
      </MenuItem>
      <MenuItem style={{ fontSize: 'small' }} value="lv">
        LV
      </MenuItem>
      <MenuItem style={{ fontSize: 'small' }} value="ru">
        RU
      </MenuItem>
    </Select>
  );
};

export default LanguageSelector;
