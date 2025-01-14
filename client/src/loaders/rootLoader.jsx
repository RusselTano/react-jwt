import { getCurrentUser } from "../api/user";

export async function rootLoader(){
  return getCurrentUser();
}