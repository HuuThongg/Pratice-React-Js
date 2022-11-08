import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameisValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailisValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: latNameBlurHandler,
    reset: resetlastNameInput,
  } = useInput((value) => value.trim() !== '');

  let formIsValid = false;

  if (enteredNameisValid && enteredEmailisValid && enteredLastNameIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameisValid) 
      return;
    if (!enteredEmailisValid) 
      return;   
    if (!enteredLastNameIsValid)
      return;

    // Not ideal, dont manipullate the dom
    // nameInputRef.current.value =''
    resetNameInput();
    resetEmailInput();
    resetlastNameInput();
  };
  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
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
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={latNameBlurHandler}
          />
          {lastNameInputHasError && (
            <p className="error-text">Email must no be emty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
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

export default BasicForm;
