import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { taskContext } from "../../../Contexts/textContext";
import {
  HeaderContainer,
  NavBar,
  NavBtnContainer,
  NavButton,
  NavLogin,
  SiteName,
} from "./Header.Elements";

const Header = () => {
  const location = useLocation();
  const { setnavbarToggle, navbarToggle } = useContext(taskContext);
  useEffect(() => {
    if (location.pathname === "/taskmern/home") {
      setnavbarToggle(false);
      console.log(location.pathname);
    } else {
      console.log(location.pathname);

      setnavbarToggle(true);
    }
  }, [location.pathname, setnavbarToggle]);

  return (
    <HeaderContainer>
      <NavBar>
        <SiteName to="/">
          task<span>mern</span>
        </SiteName>
        <NavBtnContainer>
          {navbarToggle ? (
            <>
              <NavLogin to="/taskmern/login">login</NavLogin>
              <Link to="/taskmern/register">
                <NavButton>register</NavButton>
              </Link>
            </>
          ) : (
            <>
              <NavLogin to="/">logout</NavLogin>
            </>
          )}
        </NavBtnContainer>
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;
