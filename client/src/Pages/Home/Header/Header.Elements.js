import styled from "styled-components";

import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  position: fixed;
  height: 120px;
  width: 100%;
`;

export const NavBar = styled.nav`
  height: 100%;
  width: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SiteName = styled(Link)`
  text-decoration: none;
  font-family: Poppins;
  font-weight: 900;
  color: white;
  margin: 0 2rem;
  font-size: 2.4rem;

  span {
    color: #3c9e63;
  }
`;

export const NavBtnContainer = styled(NavBar)`
  width: 25%;
  justify-content: center;
`;

export const NavLogin = styled(Link)`
  font-family: Poppins;
  font-weight: 900;
  color: white;
  margin: 0 2rem;
  font-size: 1.6rem;
  text-decoration: none;
`;

export const NavButton = styled.button`
  width: 150px;
  height: 60px;
  background: #3c9e63;
  border: 0;
  font-size: 1.6rem;
  font-weight: 900;
  font-family: Poppins;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;
