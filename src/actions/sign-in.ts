"use server"
import { signIn } from "@/auth/auth";

const signInWithCredetials = async (email:string, password:string) => {
  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false
    });
    return result;
  } catch (error) {
    console.error("Помилка авторизації:", error);
    throw error;
  }
}

export default signInWithCredetials;