
import { useState, useRef } from "react";

import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props =>{

   const nameInputRef = useRef();
   const ageInputRef = useRef();


   const [enteredUsername, setEnteredUsername]=useState('');
   const [enteredAge, setEnteredAge] = useState("");
   const [error,setError] = useState('')


   const usernameChangeHandler  = event =>{
      setEnteredUsername(event.target.value)
   }
   const ageChangeHandler = (event) => {
      setEnteredAge(event.target.value);
   };

   const addUserHandler = event =>{
      event.preventDefault();
      
      if(enteredUsername.trim().length===0 || enteredAge.trim().length === 0){
         setError({
            title:'Invalid input',
            message: 'PLease enter a valid name and age'
         })
         return;
      }
      if(+enteredAge < 1){
         setError({
            title: "Invalid age",
            message: "Please Enter a valid Age",
         });
         return;
      }
      props.onAddUser(enteredUsername,enteredAge)
      setEnteredUsername('');
      setEnteredAge('');

   }
   const errorHandler = ()=>{
      setError(null)
   }
   return (
      <>
         {error && <ErrorModal title={error.title} message={error.message} onConfirm = {errorHandler}/>}
            <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
               <label htmlFor="username">Username</label>
               <input
                  type="text"
                  id="username"
                  value={enteredUsername}
                  onChange={usernameChangeHandler}
                  ref = {nameInputRef}
               ></input>
               <label htmlFor="age">Age (Years)</label>
               <input
                  type="number"
                  value={enteredAge}
                  id="age"
                  onChange={ageChangeHandler}
                  ref={ageInputRef}
               ></input>
               <Button type="submit"> Add User</Button>
            </form>
            </Card>
      </>
   );
}
export default AddUser;