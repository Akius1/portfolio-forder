import React, { useState } from "react";
import styled from "styled-components";

import { BsSearch } from "react-icons/bs";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

interface Props {
  color: string;
  shape?: string;
  value?: string;
  width?: string | number;
  type: string;
  size?: string;
  padding?: string;
  placeholder?: string;
  handleChange?: (event: any) => void;
  formType?: string;
  name?: string;
  id?: string;
  onKeyPress?: () => string;
}

const InputField: React.FC<Props> = (props) => {
  const {
    color,
    type,
    shape,
    size,
    placeholder,
    width,
    formType,
    name,
    value,
    handleChange,
    onKeyPress,
  } = props;
  const [viewPassword, setViewPassword] = useState(false);

  let borderRadius: string = "";
  switch (shape) {
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
      borderRadius = "10px 0px";
  }

    const Input = styled.input`
    background: #ffffff;
    border: none;
    height:45px;
    font-size: 1.2rem;
    line-height: 3rem;
    border-radius:0.3rem;
    outline: none;
    color: grey;
    padding-left: 1rem;
    /* width: 100%; */
    &::-webkit-input-placeholder {
        font-size: 0.8rem;
  }

  &:-internal-autofill-selected{
    background: #f8f8f8 !important;
  }
  `;

  const PasswordContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr min-content;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    min-width: ${width};
    border-radius: ${borderRadius}
  `;

  const ViewPasswordIcon = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background: #ffffff;
    cursor: pointer;
    /* width: 2rem; */
    border-radius: ${borderRadius};
  `;

  const InputContainer = styled.div`
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    min-width: ${width};
    border-radius: ${borderRadius}
  `;

  const changePasswordView = () => {
    setViewPassword(!viewPassword);
  };

  return (
    <div>
      {type === "password" ? (
        <>
          <PasswordContainer>
            <Input
              placeholder={placeholder}
              onChange={handleChange}
              id={`${formType}-${name}`}
              name={name}
              type={viewPassword ? "text" : "password"}
              value={value}
            />
            <ViewPasswordIcon
              onClick={changePasswordView}
              style={{ borderRadius: borderRadius }}
            >
              {viewPassword ? <FaEyeSlash /> : <FaRegEye />}
            </ViewPasswordIcon>
          </PasswordContainer>
        </>
      ) : type === "search" ? (
        <>
          <InputContainer
            style={{ minWidth: width, borderRadius: borderRadius }}
          >
            <BsSearch />
            <Input
              placeholder={placeholder}
              onChange={handleChange}
              id={`${formType}-${name}`}
              name={name}
              type={type}
              value={value}
            />
          </InputContainer>
        </>
      ) : (
        <>
          <InputContainer
            style={{ minWidth: width, borderRadius: borderRadius }}
          >
            <Input
              placeholder={placeholder}
              onChange={handleChange}
              id={`${formType}-${name}`}
              name={name}
              type={type}
              value={value}
            />
          </InputContainer>
        </>
      )}
    </div>
  );
};

export default InputField;
