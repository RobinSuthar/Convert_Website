document.getElementById("convertButtonMK").addEventListener("click", () => {
  const milesInput = document.getElementById("userInputedMiles");
  const kilometersInput = document.getElementById("userInputedKilometers");
  if (milesInput.value) {
    const miles = parseFloat(milesInput.value);
    const kilometers = (miles * 1.60934).toFixed(2);
    kilometersInput.value = kilometers;
  } else if (kilometersInput.value) {
    const kilometers = parseFloat(kilometersInput.value);
    const miles = (kilometers / 1.60934).toFixed(2);
    milesInput.value = miles;
  } else {
    alert("Please enter a value to convert.");
  }
});

document.getElementById("resetValues").addEventListener("click", () => {
  document.getElementById("userInputedMiles").value = "";
  document.getElementById("userInputedKilometers").value = "";
});
