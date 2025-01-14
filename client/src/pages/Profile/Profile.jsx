import React, { useEffect, useState } from "react";
import "./Profile.scss";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;


  if (!user) {
    navigate("/login"); // Redirige si l'utilisateur n'est pas connecté
    return null;
  }

  return (
    <div>
      <h2>Profile</h2>
      <ul>
        <li>Nom: {user.name} </li>
        <li>Email: {user.email} </li>
      </ul>
    </div>
  );
};

export default Profile;
