import React from "react";
import { useState } from "react";
import NoteContext from "./notecontext";

const NoteState = (props) => {
  const s1 = {
    "name": "Saveen",
    "class": "5Z",
  };

  const [state, setState] = useState(s1);

  const update = () => {
    setTimeout(() => {
      setState({
        "name": "Now Saveen is changed to -> Harry",
        "class": "7P",
      });
    }, 1000);
  };

  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
