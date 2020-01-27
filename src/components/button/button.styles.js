import styled,{css} from "styled-components";

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;
     &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover{
      background: #000;
      color:#fff;
      border:none;
    }
`;

const googleSingInStyles = css`
    background: #4285f4;
    color: #ffffff;
    &:hover{
      background: #357ae8;
      border: none;
    }
`;

const getButtonStyles = props =>{
    return props.isGoogleSignIn ? googleSingInStyles : props.inverted ? invertedButtonStyles :buttonStyles
}


export const CustomButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;