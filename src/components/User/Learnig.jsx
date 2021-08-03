import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./User.module.css"
import Button from "../UI/Button/Button";
import ErrorModal from '../UI/ErrorModal/ErrorModal'
function Learnig(props) {
  
  const [inputValue, setInputValue] = useState("");
  const [age, setAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState()
  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length === 0 || age.trim().length === 0){
      setError({
        title: "Invalid Input",
        message: "Please enter valid name and age"
      })
      return;
    }
    if(+age < 1){
      setError({
        title: "Invalid Age",
        message: "Please enter valid name and age"
      })
      return;
    }
    if (inputValue.trim().length === 0) {
      setIsValid(false);
    } else {
      let newItem = {
        id: Math.floor(Math.random() * 10000),
        name: inputValue,
        age
      };
      props.getUser( newItem);
      setInputValue("");
      setAge("")
    }
  };

  const errrorHandler = (err) => {
    setError(null)
  }
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onClick={errrorHandler}/>}
    <Card  className={classes.input}>
      <form action="" >
        <label htmlFor="input">Name</label>
        <input
          type="text"
        
          name="inputValue"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          id="input"
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          name="age"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Button type="submit" onClick={handleSubmit} >Add User</Button>
      </form>
     
    </Card>
    </div>
  );
}

export default Learnig;
