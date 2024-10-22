export const validate = (email, password, signIn = true) => {
  console.log(signIn);
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isValidEmail && !isValidPassword) {
    return "Invalid Password and Email";
  }
  if (!isValidEmail) {
    return "Invalid Email";
  }
  if (!isValidPassword) {
    return "Invalid Password";
  }
  return null;
};
