import React from 'react'
import "./Profile.css";
import ThemeContext from "../Components/ThemeContext";
import { useContext,useEffect } from 'react';
import PersonDispatchContext from "../Components/PersonDispatchContext";

const Profile = ({id,name,email,updateVideo}) => {
  const theme = useContext(ThemeContext);
  const dispatch = useContext(PersonDispatchContext);
  return (
    <div>
    <h1>{id}{name}{email}</h1>
    <button className={theme.mode} onClick={()=>dispatch({type:'DELETE',payload:id})}>Delete</button>
    <button className={theme.mode}  onClick={()=>updateVideo(id)}>Update</button>
    </div>
  )
}

export default Profile
