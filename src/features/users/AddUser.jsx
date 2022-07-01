import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { useState } from "react";
import { userAdded } from "./usersSlice";

export function AddUser() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role,setRole] = useState("");
  const[location, setLocation] = useState("");
  const[active, setActive] = useState("");
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleRole = (e) => setRole(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);
  const handleActive = (e) => setActive(e.target.value);

  const usersAmount = useSelector((state) => state.users.entities.length);

  const handleClick = () => {
    if (name && email) {
      dispatch(
        userAdded({
          id: usersAmount + 1,
          name,
          email,
        })
      );

      setError(null);
      history.push("/");
    } else {
      setError("Fill in all fields. ");
    }

    setName("");
    setEmail("");
    setRole("");
    setLocation("");
    setActive("");
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Add user</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label htmlFor="nameInput">User Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Username"
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          <label htmlFor="emailInput">Email</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="abc@xyx.com"
            id="emailInput"
            onChange={handleEmail}
            value={email}
          />
          <label htmlFor="roleInput">Role</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Role"
            id="roleInput"
            onChange={handleRole}
            value={role}
          />
          <label htmlFor="locationInput">Location</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Location"
            id="locationInput"
            onChange={handleLocation}
            value={location}
          />
          <label htmlFor="activeInput">Active</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Active"
            id="activeInput"
            onChange={handleActive}
            value={active}
          />
          {error && error}
          <button onClick={handleClick} className="button-primary">
            Add user
          </button>
        </div>
      </div>
    </div>
  );
}
