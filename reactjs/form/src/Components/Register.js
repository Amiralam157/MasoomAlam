import React from "react";
import styled from "styled-components";

export default function Register(props) {
  // Styled component for the container
  const StyledRegisterContainer = styled.div`
    width: 600px;
    &:hover {
      box-shadow: 0px 0px 5px grey;
    }
    @media (min-width: 0px) and (max-width: 600px) {
      width: 300px;
    }
  `;

  // Logic to determine button text and classes based on props.showPass
  let btnText, passBoxType;
  let btnClasses = ["btn", "m-1"];
  if (props.showPass === true) {
    btnText = "Hide Password";
    passBoxType = "text";
    btnClasses.push("btn-danger");
  } else {
    btnText = "Show Password";
    passBoxType = "Password";
    btnClasses.push("btn-success");
  }

  // Styled component for the button
  const StyledButton = styled.button`
    /* display:block; */
    display: ${props => (props.flag ? "inline-block" : "block")};
    padding: 10px 5px;
    background-color: ${props => props.bgcolor};
    border: none;
    color: white;
    width: ${props => (props.flag==="1" ? "45%" : "100%")};
    margin: 5px;
  `;

  // Styled component for the flex container to hold the buttons
  const StyledFlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: flex-start;
  `;

  return (
    <StyledRegisterContainer className="container card p-3 mt-2 register-container">
      <h1 className="text-center">Registration Form</h1>
      <form onSubmit={props.submit}>
        <div className="form-group">
          <label htmlFor="">Name:</label>
          <input type="text" name="name" required className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="">Email:</label>
          <input type="email" name="email" required className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="">Password:</label>
          <input
            type={passBoxType}
            name="password"
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary m-1">
          Register
        </button>
        <button
          type="button"
          className={btnClasses.join(" ")}
          onClick={props.click}
        >
          {btnText}
        </button>
        <br />
        <StyledFlexContainer>
          <StyledButton type="button" flag="1" bgcolor="orange">
            Login
          </StyledButton>
          <StyledButton type="button" flag="1" bgcolor="green">
            Login with Google
          </StyledButton>
        </StyledFlexContainer>
        <StyledButton flag="0" bgcolor="blue">Login with facebook</StyledButton>
      </form>
    </StyledRegisterContainer>
  );
}
