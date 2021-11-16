import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });

  const inputEvent = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.value);

    // const value = event.target.value;
    // const name = event.target.value;

    // setFullName((preValue) => {
    //   if (name == "fname") {
    //     return {
    //       fname: value,
    //       lname: preValue.lname,
    //     };
    //   } else if (name == "lname") {
    //     return {
    //       fname: preValue.fname,
    //       lname: value,
    //     };
    //   }
    // });
    setFullName({ ...fullName, [event.target.name]: event.target.value });
  };

  const onSubmits = (event) => {
    event.preventDefault();
    alert("form submitted");
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div>
            <h1>
              Hello {fullName.fname} {fullName.lname}
            </h1>
            <input
              type="text"
              placeholder="Enter Your name"
              name="fname"
              onChange={inputEvent}
              value={fullName.fname}
              name="fname"
            />
            <br />
            <input
              type="text"
              placeholder="Enter Your Last name"
              name="lname"
              onChange={inputEvent}
              value={fullName.lname}
              name="lname"
            />
            <br />
            <button>Click me </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default App;
