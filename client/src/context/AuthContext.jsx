import React, { createContext, useContext, useState, useEffect } from "react";

// Création du contexte
const AuthContext = createContext();

// Fournisseur du contexte
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stocke les informations utilisateur
  const [loading, setLoading] = useState(true); // Indique si la récupération des données est en cours

  // Récupérer l'utilisateur connecté depuis l'API `/api/me`
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("/api/me", {
          method: "GET",
          credentials: "include", // Inclure les cookies
        });

        if (!response.ok) {
          throw new Error("Non autorisé");
        }

        const userData = await response.json();
        setUser(userData); // Met à jour les informations utilisateur
      } catch (error) {
        setUser(null); // Aucun utilisateur connecté
      } finally {
        setLoading(false); // Chargement terminé
      }
    };

    fetchUserProfile();
  }, []);

  // Déconnexion
  const logout = async () => {
    try {
      await fetch("/api/logout", {
        method: "POST",
        credentials: "include", // Inclure les cookies
      });
      setUser(null); // Efface l'utilisateur localement
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personnalisé pour accéder au contexte
export const useAuth = () => useContext(AuthContext);
