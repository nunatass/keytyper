import React from 'react';

import { MenuOptionContainer, Title } from './style';

const MenuOption = ({ children, title }) => {
  return (
    <>
      <MenuOptionContainer>
        {children}
        <Title>{title}</Title>
      </MenuOptionContainer>
    </>
  );
};

export default MenuOption;
