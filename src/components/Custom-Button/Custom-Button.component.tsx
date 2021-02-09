import React from 'react'
import styled from 'styled-components';

import {BsArrowRight} from 'react-icons/bs'

interface ButtonType {
    handleClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined
    name: string;
    width: string;
    color: string;
    border: string;
    backgroundcolor: string;
    height: string;
}
const Button: React.FC<ButtonType> = (props) => {
    const { handleClick, name, width, border, color, backgroundcolor,  height } = props;

    let borderRadius = "";
    switch(border.toLowerCase()){
        
        case "oblong":
            borderRadius = "8px";
            break;
        case "spherical":
            borderRadius = "50%";
            break;
        case "block":
            borderRadius = "0";
            break;
        default:
            borderRadius = "10px 0px"
    }

    const ButtonContainer = styled.div`
    background-color:${color};
    color: ${ backgroundcolor};
    max-width:  ${width};
    border-radius: ${borderRadius};
    padding: 8px 12px;
    border: 1px solid ${color};
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0.9;
    :hover{
        background-color:${backgroundcolor};
        color: ${ color};
    }
`

    return (
        <ButtonContainer onClick={handleClick}>
           <span>{name}</span> 
             <BsArrowRight />
        </ButtonContainer>
    )
}

export default Button;
