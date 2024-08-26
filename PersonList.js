import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { useEffect } from "react";
import usePersonDispatch from "../Hooks/PersonDispatch";
import usePerson from "../Hooks/Person";

const PersonList = ({ updateVideo }) => {
  const persons = usePerson();
  const dispatch = usePersonDispatch();
  const url = "https://jsonplaceholder.typicode.com/users/";
  async function handleClick() {
    let data = await axios.get(url);
    //setPersons(data.data)
    dispatch({ type: "LOAD", payload: data.data });
  }

  useEffect(() => {
    handleClick();
  }, [dispatch]);

  return (
    <div>
      {persons.map((person) => {
        return (
          <div key={Math.random()}>
            <Profile
              key={Math.random()}
              id={person.id}
              name={person.name}
              email={person.email}
              updateVideo={updateVideo}
            ></Profile>
          </div>
        );
      })}
    </div>
  );
};

export default PersonList;
