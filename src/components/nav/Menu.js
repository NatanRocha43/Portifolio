import React, { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import IconTranslate from '../../assets/svg/icon - translate.svg';
import languageOptions from './language/json/options.json';
import menuItems from './language/json/items.json';

import LanguageSelect from './language/Language';
import './Menu.scss';

const Menu = () => {
  const { t, i18n: { changeLanguage, language } } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const navRef = useRef();

  const handleChangeLanguage = (newLanguage) => {
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  const CustomDropdownIndicator = (props) => (
    <div {...props.innerProps} className="custom-indicator">
      {props.selectProps.menuIsOpen ? 'ᐱ' : 'ᐯ'}
    </div>
  );

  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle('responsive_nav');
    }
  };
  const closeNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.remove('responsive_nav');
    }
  };

  return (
    <header className="header">
      <nav ref={navRef} className="main-nav">
      {menuItems.map((item) => (
          <NavLink key={item.path} className="header__menu--li" to={item.path} onClick={closeNavbar}>
            {t(item.translationKey)}
          </NavLink>
        ))}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>

      <ul className="header__menu">
        <li>
          <span className="select-icon">
            <img src={IconTranslate} alt="Select Icon" />
          </span>
        </li>
        <li className="header__menu options">
          <LanguageSelect
            handleChangeLanguage={handleChangeLanguage}
            currentLanguage={currentLanguage}
            languageOptions={languageOptions}
            CustomDropdownIndicator={CustomDropdownIndicator}
          />
        </li>
      </ul>
    </header>
  );
};

export default Menu;