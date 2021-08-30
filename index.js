var dateInput = document.querySelector("#date-input");
var numberInput = document.querySelector("#number-input");
var CheckButton = document.querySelector("#check-button");
var displayText = document.querySelector("#display-text");
CheckButton.addEventListener("click", handleCheck);

function handleCheck() {
  var sum = 0;
  var dateNumber = dateInput.value.replaceAll("-", "");
  for (var i = 0; i < dateNumber.length; i++) {
    sum = sum + Number(dateNumber.charAt(i));
  }
  if (sum % numberInput.value == 0) {
    displayText.innerText = "Yay !Your birthday is lucky! 😁";
  } else {
    displayText.innerText = "Sorry! Your birthday is NOT lucky,😟";
  }
}
