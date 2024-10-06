// Pounds to Kilograms
document.getElementById("convertButtonKP").addEventListener("click", () => {
    const poundsInput = document.getElementById("userInputedPounds");
    const kilogramsInput = document.getElementById("userInputedKilograms");
    if (poundsInput.value) {
        const pounds = parseFloat(poundsInput.value);
        const kilograms = (pounds * 0.453592).toFixed(2);
        kilogramsInput.value = kilograms;
    } else if (kilogramsInput.value) {
        const kilograms = parseFloat(kilogramsInput.value);
        const pounds = (kilograms * 2.20462).toFixed(2);
        poundsInput.value = pounds;
    } else {
        alert("Please enter a value to convert.");
    }
});

// Miles to Kilometers
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

