import React, { useEffect, useRef, useState } from "react";

export default function Home(props) {
  const [userName, setUserName] = useState("");
  const [res, setRes] = useState(" ");
  const [label, setLabel] = useState("Login");
  //get the value from input field
  const nameInput = useRef();
  //to set inputfield as a autofocus after the page load
  useEffect(() => {
    nameInput.current.focus();
    props.setVisibility("hidden");
  }, [props]);

  function handleClick() {
    if (userName === "") {
      setRes(`U should enter the field`);
    } else if (label === "logout") {
      setRes("");
      setLabel("Login");
      setUserName("");
    } else {
      setRes(`Welcome ${userName}`);
      setLabel("logout");
    }
  }
  return (
    <div>
      <h2>Welcome to homepage!</h2>
      {/* <nav>
        <Link to="/login">Login</Link>
      </nav> */}
      {/* onChange to set the value from input field */}
      <input
        name="name"
        placeholder="Enter user Name"
        value={userName}
        ref={nameInput}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />

      <button type="submit" onClick={handleClick}>
        {label}
      </button>

      <h1>{res}</h1>
    </div>
  );
}
