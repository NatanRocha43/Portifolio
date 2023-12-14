
import React from 'react';
import ReactSelect from 'react-select';
import PropTypes from 'prop-types';


const Language = ({ handleChangeLanguage, currentLanguage, languageOptions, CustomDropdownIndicator }) => {
  return (
    <ReactSelect
      className="custom-select"
      styles={{ 
        control: (provided) => ({
          ...provided,
          background: 'transparent', 
          borderColor: 'transparent',
          border:'none',
          boxShadow:'transparent',
          "&:hover": {
            borderColor: "transparent"
          },                  
        }),  
        singleValue: (provided) => ({
          ...provided,
          color: '#CCCCCC', 
          cursor: 'pointer',
        }), 
        dropdownIndicator: (provided) => ({
          ...provided,
          cursor: 'pointer', 
          margin: '0px'      
        }),  
        menu: (provided) => ({
          ...provided,
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          background: '#0A0A0A',
          borderRadius: '8px',
          boxShadow: '0px 2px 7px 0px rgba(255, 255, 255, 0.10)',
        }),  
        option: (provided, state) => ({
          ...provided,
          cursor: 'pointer',
          fontSize: '16px',
          background: state.isSelected ? 'transparent' : 'transparent',
          color: state.isSelected ? '#4A4A4A' : '#CCCCCC',
          "&:hover": {
            color: '#4A4A4A',
          },
        }),
        indicatorSeparator: (provided) => ({
          ...provided,
          display: 'none',
        }),
        indicatorsContainer: (provided) => ({
          ...provided,
          cursor: 'pointer',
          justifyContent: 'flex-start',
        }),
                              
      }}
      isSearchable={false}
      options={languageOptions}
      components={{ DropdownIndicator: CustomDropdownIndicator }}
      value={languageOptions.find((option) => option.value === currentLanguage)}
      onChange={(selectedOption) => handleChangeLanguage(selectedOption.value)}

    />
  );
};

Language.propTypes = {
  handleChangeLanguage: PropTypes.func.isRequired,
  currentLanguage: PropTypes.string.isRequired,
  languageOptions: PropTypes.array.isRequired,
  CustomDropdownIndicator: PropTypes.func.isRequired,
};

export default Language;
