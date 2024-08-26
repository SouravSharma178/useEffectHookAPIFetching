import React, { useEffect } from "react";
import { useState, useContext } from "react";
import ThemeContext from "../Components/ThemeContext";
import usePersonDispatch from "../Hooks/PersonDispatch";

const AddPerson = ({ editableVideo }) => {
  const theme = useContext(ThemeContext);
  const dispatch = usePersonDispatch();

  const [video, setVideo] = useState({
    id: 1111,
    name: "",
    email: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: "UPDATE", payload: video });
    } else {
      dispatch({ type: "ADD", payload: video });
    }
    setVideo({
      id: 1111,
      name: "",
      email: "",
    });
  }
  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    } else {
      setVideo({
        id: 1111,
        name: "",
        email: "",
      });
    }
  }, [editableVideo]);

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="title"
          onChange={handleChange}
          value={video.name}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={handleChange}
          value={video.email}
        />
        <button className={theme.mode} onClick={handleSubmit}>
          {editableVideo ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default AddPerson;
