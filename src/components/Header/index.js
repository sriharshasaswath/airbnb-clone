import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import { BsGlobe } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header-container">
          <div className="header-website-logo1">
            <NavLink to="/">
              <>
                <img
                  className="header-website-logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
                  alt="website logo"
                />
              </>
            </NavLink>
          </div>
          <ul className="tabs-container">
            <a className="inactive" href="https://www.airbnb.co.in/host/homes">
              <strong>Become a host</strong>
            </a>
            <a className="inactive" href="/">
              <BsGlobe />
            </a>
            <Dropdown className="icons-container">
              <Dropdown.Toggle variant="white" id="dropdown-basic">
                <HiMenu className="active" />
                <CgProfile className="active" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/">Sign Up</Dropdown.Item>
                <Dropdown.Item href="#/">Log In</Dropdown.Item>
                <Dropdown.Item href="#/">Host Your Home</Dropdown.Item>
                <Dropdown.Item href="#/">Host an Experience</Dropdown.Item>
                <Dropdown.Item href="#/">Help</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ul>
        </div>
        <div className="header-navbar-responsive-container">
          <div className="header-nav-container">
            <NavLink to="/">
              <img
                className="header-nav-bar-website-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
                alt="website logo"
              />
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
