const BASE_URL = "http://localhost:3000";
// const BASE_URL = "https://api.myaddressesbook.com";

export async function createUser(newUser) {
  const response = await fetch(`${BASE_URL}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
    credentials: "include",
  });

  const body = await response.json();
  console.log(body);
  
  console.log(newUser)
  if (response.ok) {
    return body;
  } else {
    throw new Error("Erro api createUser");
  }
}

export async function loginUser(user) {
  const response = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {"Content-Type": "Application/json"},
    body: JSON.stringify(user),
    credentials: "include"
  })

  const body = await response.json();
  console.log(body);

  if(response.ok){
    return body;
  }else {
    throw new Error("Error api login")
  }
}

export const fetchProfile = async () => {
  try {
    const response = await fetch("/api/me", {
      method: "GET",
      credentials: "include", // Important pour inclure les cookies
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erreur lors de la récupération du profil.");
    }

    const user = await response.json();
    console.log("Profil utilisateur récupéré :", user);
    return user;
  } catch (error) {
    console.error("Erreur lors de la récupération du profil :", error.message);
    throw error;
  }
};

