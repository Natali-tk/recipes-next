import bcryptjs from "bcryptjs";

const saltAndHashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;

  return await bcryptjs.hash(password, saltRounds);
}

export default saltAndHashPassword;

