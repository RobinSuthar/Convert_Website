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

document.getElementById("convertButtonCF").addEventListener("click", () => {
    const celciusValue = document.getElementById("celciusText").value;
    const fahrenheitValue = document.getElementById("fahrenheitText").value;
  
    if (celciusValue !== "" && fahrenheitValue === "") {
      // Convert Celsius to Fahrenheit
      const celcius = parseFloat(celciusValue);
      const fahrenheit = (celcius * 1.8) + 32;
      document.getElementById("fahrenheitText").value = fahrenheit.toFixed(2);
    } else if (fahrenheitValue !== "" && celciusValue === "") {
      // Convert Fahrenheit to Celsius
      const fahrenheit = parseFloat(fahrenheitValue);
      const celcius = (fahrenheit - 32) / 1.8;
      document.getElementById("celciusText").value = celcius.toFixed(2);
    } else {
      alert("Please enter a value to convert in one of the fields.");
    }
  });