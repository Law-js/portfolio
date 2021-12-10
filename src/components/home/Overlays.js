import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const TopOverlayContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 20%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  z-index: 99;
`;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 700;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  margin-top: 1em;
  transform: translateX(-40px);
`;

const BottomOverlayContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 20%;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  z-index: 99;
`;

const Button = styled.button`
  outline: none;
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  border-radius: 20px;
  padding: 8px 15px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: #000;
  }
`;

const Overlay = () => {
  useEffect(() => {
    let array = ["Web", "Javascript", "Front", "API"];
    let wordIndex = 0;
    let letterIndex = 0;

    const target = document.getElementById("text-target");

    const createLetter = () => {
      const letter = document.createElement("span");
      target.appendChild(letter);
      letter.classList.add("letter");
      letter.style.opacity = "0";
      letter.style.animation = "anim 3s ease forwards";
      letter.textContent = array[wordIndex][letterIndex];
      setTimeout(() => {
        letter.remove();
      }, 2000);
    };

    const loop = () => {
      setTimeout(() => {
        if (wordIndex >= array.length) {
          wordIndex = 0;
          letterIndex = 0;
          loop();
        } else if (letterIndex < array[wordIndex].length) {
          createLetter();
          letterIndex++;
          loop();
        } else {
          wordIndex++;
          letterIndex = 0;
          setTimeout(() => {
            loop();
          }, 2500);
        }
      }, 20);
    };
    loop();
  }, []);
  return (
    <>
      <TopOverlayContainer>
        <Logo>Pascal Hector</Logo>
        <Slogan className="dynamic-text">
          <span className="dev">Développeur</span>
          <span id="text-target"></span>
        </Slogan>
      </TopOverlayContainer>
      <BottomOverlayContainer>
        <Button title="Vers le site">
          <NavLink exact to="/profil">
            Click Here!
          </NavLink>
        </Button>
      </BottomOverlayContainer>
    </>
  );
};

export default Overlay;
