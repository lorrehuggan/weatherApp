import React from 'react';

//Styles
import { Wrapper, Links, Logo, List } from './Header.styles';

function Header() {
  return (
    <Wrapper>
      <Links>
        <List>Home</List>
        <List>Link</List>
        <List>List</List>
      </Links>
      <Logo>
        <p>My Logo</p>
      </Logo>
    </Wrapper>
  );
}

export default Header;
