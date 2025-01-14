import React, { useContext } from "react";
import "./Profile.scss";
import { AuthContext } from "../../context";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  
  return (
    <div>
      <h2>Profile</h2>
      <ul>
        <li>Nom:{user.name} </li>
        <li>Email:</li>
      </ul>
    </div>
  );
};

export default Profile;
