import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.css"
function UserList(props) {
  return (
    <Card className={classes.users}>
      <ul>
       {props.usersList.map(user =>{
         return (
           <li key={user.id}>{user.name} is {user.age} old.</li> 
         )
       })}
       </ul>
    </Card>
  );
}

export default UserList;
