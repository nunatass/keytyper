import React from 'react';

import { FaKeyboard } from 'react-icons/fa';
import { AiFillSetting, AiOutlineFullscreen } from 'react-icons/ai';

import MenuOption from '../MenuOption';

import { SideMenuContainer } from './style';

function SideMenu() {
  return (
    <SideMenuContainer>
      <MenuOption title={'Settings'}>
        <AiFillSetting size={20} color={'var(--primary-color)'} />
      </MenuOption>
      <MenuOption title={'Full Screen'}>
        <AiOutlineFullscreen size={20} color={'var(--primary-color)'} />
      </MenuOption>
      <MenuOption title={'Practice'}>
        <FaKeyboard size={20} color={'var(--primary-color)'} />
      </MenuOption>
    </SideMenuContainer>
  );
}

export default SideMenu;
