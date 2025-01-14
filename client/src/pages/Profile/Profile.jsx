import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.scss";
import { fetchProfile } from "../../api/user";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profile = await fetchProfile();
        setUser(profile);
      } catch (err) {
        setError(err.message);
        if (err.message == "Non autorisé.") {
          navigate("/signin");
        }
      }
    };

    loadProfile();
  }, [navigate]);

  if (error) return <div>Erreur : {error} </div>;

  if (!user) return <div>Chargement...</div>;

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
