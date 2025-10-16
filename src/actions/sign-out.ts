"use server"
import { signOut } from "@/auth/auth";

const signOutFunc = async () => {
  try {
    const result = await signOut({ redirect: false });

    return result;
  } catch (error) {
    console.error("Помилка авторизації:", error);
    throw error;
  }
}

export default signOutFunc;