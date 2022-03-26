import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([])

  function handleSubmit(event) {
    event.preventDefault();
    if(firstName && email) {
      const id = people.length
      const person={firstName,email, id}
      setPeople((people) => {
        return [...people, person]
      })
      setFirstName("")
      setEmail("")
    } else {
      console.log("Empty values")
    }
  }

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name:</label>
            <input
              type="text"
              id="firsName"
              name="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            ></input>
          </div>

          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></input>
          </div>
          <button className="btn" type="submit">
            Add Person
          </button>
        </form>
        {
          people.map(person => {
            const {id, firstName, email} = person
            return <p key={id}>{`${firstName} ${email}`}</p>;
          })
        }
      </article>
    </>
  );
};

export default ControlledInputs;
