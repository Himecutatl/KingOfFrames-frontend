import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBarContainer = styled.div`
    body {
        position: relative;
        bottom: 100px;
        
    }

  .logo {
    display: flex;
    justify-content: space-between;
    height: 10%;
    width: 10%;
    align-items: center;
    position: relative;
    top: 80px;
    left: 30px;

  }
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    li {
      padding: 6px 0;
      .nav {
        position: relative;
        display: block;
        padding: 4px 0;
        font-family: Lato, sans-serif;
        color: black;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        margin: 0 2vw 0 0vw;
        &::after {
          position: absolute;
          content: "";
          top: 100%;
          left: 0;
          width: 100%;
          height: 3px;
          background: red;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.5s;
        }
        &:hover {
          color: #95a5a6;
        }
        &:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
      }
    }
  }
`;

const NavBar = () => {
  return (
    <div>
      <NavBarContainer>
            <body>
            <Link className="nav" to="/">
              <img
                className="logo"
                src="https://i.imgur.com/ZUTLIGv.png"
                alt="Wheelie"
              />
            </Link>
         
        <ul>
          
          <li>
              <h1> King of Frames </h1>
            
          </li>
          
        </ul>
        <hr></hr>
        </body>
      </NavBarContainer>
    </div>
    
  );
};

export default NavBar;