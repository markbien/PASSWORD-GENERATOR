const PasswordGenerator = (() => {
  function generatePassword(allowedChars) {
    let newPassword = "";

    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      newPassword += allowedChars[randomIndex];
    }
    return newPassword;
  }

  return { generatePassword };
})();

const DomHandler = (() => {
  const passwordLengthDom = document.querySelector("#password-length");
  const passwordLength = () => {
    return parseInt(passwordLengthDom.value);
  };

  let isMouseDown = false;
  passwordLengthDom.addEventListener("mousedown", function () {
    isMouseDown = true;
  });

  passwordLengthDom.addEventListener("mouseup", function () {
    isMouseDown = false;
  });

  passwordLengthDom.addEventListener("mousemove", function () {
    if (isMouseDown === true) {
      const passwordLengthText = document.querySelector(".preferred-password-length");
      passwordLengthText.textContent = passwordLength();
    }
  });

  const isLowerCaseIncluded = () => {
    const lowercaseDom = document.querySelector("#lowercase");
    return lowercaseDom.checked;
  };

  const isUpperCaseIncluded = () => {
    const uppercaseDom = document.querySelector("#uppercase");
    return uppercaseDom.checked;
  };

  const isNumberIncluded = () => {
    const numberDom = document.querySelector("#numbers");
    return numberDom.checked;
  };

  const isSymbolIncluded = () => {
    const symbolDom = document.querySelector("#symbols");
    return symbolDom.checked;
  };

  return {
    passwordLength,
    isLowerCaseIncluded,
    isUpperCaseIncluded,
    isNumberIncluded,
    isSymbolIncluded,
  };
})();

const Main = (() => {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+";

  const atLeastOneOptionIsEnabled = () => {
    if (
      DomHandler.isLowerCaseIncluded() === true ||
      DomHandler.isUpperCaseIncluded() === true ||
      DomHandler.isNumberIncluded() === true ||
      DomHandler.isSymbolIncluded() === true
    ) {
      return true;
    } else {
      alert("At least one option should be selected!");
      return false
    }
  };

  const containsAtLeastOneCharInSet = (chars, password) => {
    for (let i = 0; i < password.length; i++) {
      const char_array = chars.split("");
      const result = char_array.findIndex(char => {
        return char === password[i];
      });

      if (result != -1) return true;
    }
    return false;
  }

  // const passwordContainsAtLeastOneCharFromSelectedOptions = (allowedChars, password) => {
  //   for (let i = 0; i < allowedChars.length; i++) {
      
  //   }
  // }

  const generateBtn = document.querySelector("#generatePassword");
  generateBtn.addEventListener("click", function () {
    if (atLeastOneOptionIsEnabled()) {
      let allowedChars = "";

      allowedChars += DomHandler.isLowerCaseIncluded() ? lowercase : "";
      allowedChars += DomHandler.isUpperCaseIncluded() ? uppercase : "";
      allowedChars += DomHandler.isNumberIncluded() ? numbers : "";
      allowedChars += DomHandler.isSymbolIncluded() ? symbols : "";

      let newPassword = "";

      while (true) {
        const tempPassword = PasswordGenerator.generatePassword(allowedChars);
        // if ()
      }

      // const passwordTextBox = document.querySelector('#password');
      // passwordTextBox.value = PasswordGenerator.generatePassword(allowedChars);
    }
  });
})();
