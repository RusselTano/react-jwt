import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context";
import { loginUser } from "../../api/user";

const AuthProvider = ({ children }) => {
  const initialUser = useLoaderData();
  const [user, setUser] = useState(initialUser);

  async function login(credentials) {
    const res = await loginUser(credentials);
    
    setUser(res.user);
  }

  async function logout(params) {}

  console.log(initialUser);
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
