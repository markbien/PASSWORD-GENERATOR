const passwordGenerator = (()=> {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+";

  function generatePassword() {
    let newPassword = "";
    let allowedChars = "";

    allowedChars += lowercase;
    allowedChars += uppercase;
    allowedChars += numbers;
    allowedChars += symbols;
    
    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      newPassword += allowedChars[randomIndex];
    }

    return newPassword;
  }

  return { generatePassword };
})();