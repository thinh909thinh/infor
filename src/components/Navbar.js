import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import styled from "styled-components";
import NetflixLogo from "../assets/images/Netflix_Logo_RGB.png";
import { Link } from "react-scroll";
import { useScroll } from "../hooks";
import { useNavigate } from "react-router-dom";

const HOME_PATH = "/";

function Navbar(props) {
  const [scrollDimensions] = useScroll();
  const [keywordsInput, setKeywordsInput] = useState("");
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    let keywords = e.target.value;
    setKeywordsInput(keywords);
    if (keywords.length > 0) {
      navigate(`${HOME_PATH}search?keywords=${keywords.trim()}`);
    } else navigate(HOME_PATH);
  };

  return (
    <Navigation
      style={
        scrollDimensions.scrollY < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "var(--color-background)" }
      }
    >
      <div className="navContainer">
        <Link
          to={""}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="logo"
        >
          <img
            src={NetflixLogo}
            alt="logo"
            onClick={() => navigate(HOME_PATH)}
          />
        </Link>

        <div className="navSearch">
          <MdSearch className="iconSearch" />
          <input
            type="text"
            placeholder="Input title, genres, people"
            onChange={handleChangeInput}
            value={keywordsInput}
          />
        </div>
      </div>
    </Navigation>
  );
}
export default React.memo(Navbar);

const Navigation = styled.nav`
  z-index: 100;
  position: fixed;
  width: 100%;
  height: var(--height-navbar);
  padding: 8px 20px;
  transition-timing-function: ease-in;
  transition: all 1s;
  top: 0;

  .navContainer {
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
      height: 100px;
    }
    .logo {
      width: 120px;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
    .subNav {
      font-weight: 500;
      font-size: 14px;
      color: var(--color-white);
      text-decoration: none;
      margin-right: 20px;
      transition: all 0.2s;
      cursor: pointer;
    }
    .navSearch {
      color: var(--color-white);
      padding-right: 20px;
      display: flex;
      justify-content: flex-end;
      &:hover .iconSearch {
        color: var(--color-white);
      }

      .iconSearch {
        width: 20px;
        height: 20px;
        cursor: pointer;
        transform: translateX(24px) translateY(10px);
        color: #bbb;
      }

      input {
        font-size: 14px;
        border: none;
        color: var(--color-white);
        outline: none;
        width: 0px;
        padding: 10px;
        background: var(--color-background);
        border: 1px solid #fff;
        transition: width 0.5s;
        cursor: pointer;
        opacity: 0;

        &:focus {
          padding-left: 26px;
          width: 300px;
          cursor: text;
          opacity: 1;
          border-radius: 4px;
        }
      }
    }
  }
`;
