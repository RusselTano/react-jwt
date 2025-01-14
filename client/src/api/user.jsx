const BASE_URL = "https://api.myaddressesbook.com";

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
