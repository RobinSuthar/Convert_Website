document.getElementById("convertButtonMK").addEventListener("click", () => {
  const milesInput = document.getElementById("userInputedMiles");
  const kilometersInput = document.getElementById("userInputedKilometers");

  if (milesInput.value) {
    // Convert Miles to Kilometers
    const miles = parseFloat(milesInput.value);
    const kilometers = (miles * 1.60934).toFixed(2);
    kilometersInput.value = kilometers;
  } else if (kilometersInput.value) {
    // Convert Kilometers to Miles
    const kilometers = parseFloat(kilometersInput.value);
    const miles = (kilometers / 1.60934).toFixed(2);
    milesInput.value = miles;
  } else {
    alert("Please enter a value to convert.");
  }
});

// Resets user input fields
document.getElementById("resetValues").addEventListener("click", () => {
  document.getElementById("userInputedMiles").value = "";
  document.getElementById("userInputedKilometers").value = "";
});
