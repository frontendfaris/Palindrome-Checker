const userInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultContainer = document.getElementById("result");
const funFactButton = document.getElementById("funfact-btn");

function checkTheInput(input) {
  const theirInput = input;

  if (theirInput === "") {
    alert("Please input a value");
    return;
  }

  resultContainer.replaceChildren();

  const strMsg = input.replace(/[^A-Za-z0-9]/, "").toLowerCase();

  let isOrIsNot = "";
  if (strMsg === [...strMsg].reverse().join("")) {
    isOrIsNot = "is";
  } else {
    isOrIsNot = "is not";
  }

  let resultMsg = `<strong>${theirInput}</strong> <u>${isOrIsNot}</u>  a palindrome.`;

  const pElem = document.createElement("p");
  pElem.className = "user-input";
  pElem.innerHTML = resultMsg;
  resultContainer.appendChild(pElem);

  resultContainer.classList.remove("hidden");
}

const funFactPress = () => {
  resultContainer.replaceChildren();

  let funMsg = `The longest palindrome sentence in the English language is a phrase containing 74,633 letters arranged into 17,826 words!
  \n Starting with: "A man, a plan, a cameo", and ending with: "OEM, a canal, Panama!"`;

  const pFunFact = document.createElement("p");
  pFunFact.className = "fun-fact-p";
  pFunFact.innerHTML = funMsg;
  resultContainer.appendChild(pFunFact);

  resultContainer.classList.remove("hidden");
};

checkButton.addEventListener("click", () => {
  checkTheInput(userInput.value);
  userInput.value = "";
});

userInput.addEventListener("keydown", (key) => {
  if (key.key === "Enter") {
    checkTheInput(userInput.value);
    userInput.value = "";
  }
});

funFactButton.addEventListener("click", () => {
  funFactPress();
});
