import React, { useState } from "react";

function PersonalDataComponent() {
  const [name, setName] = useState("");
  const [LastName, setLastName] = useState("");

  const onChangeHandle = (e) => {
    const value = e.target.value;
    if (e.target.id == "name") {
      setName(value);
    } else if (e.target.id == "lastName") {
      setLastName(value);
    }

    if(counter > 0) {
      setCounter(counter - 1)
    }
  };
  return (
    <div>
      <div>
        <span>Name:</span>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChangeHandle}
        ></input>
      </div>
      <div>
        <span>LastName:</span>
        <input
          type="text"
          id="lastName"
          value={LastName}
          onChange={onChangeHandle}
        ></input>
      </div>
    </div>
  );
}

export default PersonalDataComponent;
