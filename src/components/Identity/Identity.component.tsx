import React from "react";
import styled from "styled-components";

import image from "../../assets/img/oie_91212204d4HMuK4-1.jpg";
import Hover from "../Hover-Component/Hover.component";

interface identityProps {
  comment: string;
  // image: any;
}

const Identity: React.FC<identityProps> = ({ comment }) => {
  const IdentityContainer = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@300;900&display=swap");
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 400px;
    width: 600px;
    background: #f2f2f2;
    overflow: hidden;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 0 0 20px 8px #d0d0d0;

    .content {
      position: absolute;
      top: 50%;
      transform: translatey(-50%);
      text-align: justify;
      color: black;
      padding: 40px;
      font-family: "Merriweather", serif;
    }

    h1 {
      font-weight: 900;
      text-align: center;
    }

    h3 {
      font-weight: 300;
    }

    .flap {
      width: 100%;
      height: 100%;

      ::before {
        position: absolute;
        content: "";
        height: 100%;
        width: 50%;
        left: 0;
        background: url(${image}) white;
        background-position: 100px;
        background-repeat: no-repeat;
        transition: 1s;
      }

      ::after {
        position: absolute;
        content: "";
        height: 100%;
        width: 50%;
        right: 0;
        background: url(${image}) white;
        background-position: -200px;
        background-repeat: no-repeat;
        transition: 1s;
      }
    }


    :hover .flap::after {
      transform: translatex(300px);
    }

    :hover .flap::before {
      transform: translatex(-300px);
    }
  `;
  return (
    <IdentityContainer>
      <div className="content">
        <Hover name="Akius" />
        <h3>{comment}</h3>
      </div>
      <div className="flap"></div>
    </IdentityContainer>
  );
};

export default Identity;
