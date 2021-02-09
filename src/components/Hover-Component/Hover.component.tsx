import React from "react";
import styled from "styled-components";

interface hoverProps {
  name: string;
}
const Hover: React.FC<hoverProps> = (props) => {
  const HoverContainer = styled.div`
    min-block-size: 100%;
    min-inline-size: 100%;
    margin: 0;
    box-sizing: border-box;
    display: grid;
    place-content: center;
    font-family: system-ui, sans-serif;

    h3::before {
      transform: scaleX(0);
      transform-origin: bottom right;
    }

    h3:hover::before {
      transform: scaleX(1);
      transform-origin: bottom left;
      background: #ffffff;
    }

    h3::before {
      content: " ";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      inset: 0 0 0 0;
      background: #2f2a2a;
      border-radius: 5%;
      z-index: -1;
      transition: transform 0.3s ease;
    }

    h3 {
      position: relative;
      font-size: 2.5rem;
    }

    @media (orientation: landscape) {
      grid-auto-flow: column;
    }
  `;
  return (
    <HoverContainer>
      <h3>{props.name}</h3>
    </HoverContainer>
  );
};

export default Hover;
