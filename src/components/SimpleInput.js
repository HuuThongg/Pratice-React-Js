import {  useState } from "react";
import useInput from "../hooks/use-input";
const SimpleInput = (props) => {

  const {
    value: enteredName,
    isValid : enteredNameisValid,
    hasError : nameInputHasError,
    valueChangeHandler : nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !=='');

  const {
    value: enteredEmail,
    isValid: enteredEmailisValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  let formIsValid =false;

  if(enteredNameisValid && enteredEmailisValid){
    formIsValid = true;
  }


  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameisValid) {
      return;
    }
    if (!enteredEmailisValid) {
      return;
    }

    // Not ideal, dont manipullate the dom
    // nameInputRef.current.value =''
    resetNameInput();
    resetEmailInput();
  };
  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
    
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must no be emty</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Email must no be emty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
