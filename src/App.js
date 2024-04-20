import './App.css';
import React, { useState } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { CiSearch } from 'react-icons/ci';
import { IoIosPhonePortrait } from 'react-icons/io';
import { PiSignInLight } from 'react-icons/pi';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { IoIosContact } from 'react-icons/io';
import { GiMeal } from 'react-icons/gi';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { TbFreeRights } from 'react-icons/tb';
import SidebarLogo from './SidebarLogo';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="side-bar">
      <SidebarLogo />
      <ul>
        <ListItem
          title="HYPERTROPHY APP"
          index={0}
          activeIndex={activeIndex}
          onItemClick={handleItemClick}
          icon={<IoIosPhonePortrait size={25} />}
        />
        <ListItem
          title="DIET COACH APP"
          index={1}
          activeIndex={activeIndex}
          onItemClick={handleItemClick}
          icon={<GiMeal size={25} />}
        />
        <ListItem
          title="COACHING"
          index={2}
          activeIndex={activeIndex}
          onItemClick={handleItemClick}
          icon={<GiWeightLiftingUp size={25} />}
        />
        <ListItem
          title="SHOP"
          index={3}
          activeIndex={activeIndex}
          onItemClick={handleItemClick}
          icon={<MdOutlineShoppingBag size={25} />}
        />
        <ListItem
          title="FREE CONTENT"
          index={4}
          activeIndex={activeIndex}
          onItemClick={handleItemClick}
          icon={<TbFreeRights size={25} />}
        />
        <ListItem
          title="ABOUT US"
          index={5}
          activeIndex={activeIndex}
          onItemClick={handleItemClick}
          icon={<IoIosContact size={25} />}
        />
        <ListItem
          title="SIGN IN"
          index={6}
          activeIndex={activeIndex}
          onItemClick={handleItemClick}
          icon={<PiSignInLight size={25} />}
        />
        <ListItem
          title="SEARCH"
          index={7}
          activeIndex={activeIndex}
          onItemClick={handleItemClick}
          icon={<CiSearch size={25} />}
        />
        <ListItem
          title="CART"
          index={8}
          activeIndex={activeIndex}
          onItemClick={handleItemClick}
          icon={<CiShoppingCart size={25} />}
        />
      </ul>
    </div>
  );
}

function ListItem({ title, icon, index, activeIndex, onItemClick }) {
  const isActive = index === activeIndex;
  return (
    <li
      className={`list ${isActive ? 'active' : ''}`}
      onClick={() => onItemClick(index)}
    >
      <a href="#">
        <span className="icon">{icon}</span>
        <span className="title">{title}</span>
      </a>
    </li>
  );
}

export default App;
