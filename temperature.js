document.getElementById("convertButtonCF").addEventListener("click", () => {
  const celciusValue = document.getElementById("celciusText").value.trim();
  const fahrenheitValue = document.getElementById("fahrenheitText").value;

  if (celciusValue !== "") {
    // Convert Celsius to Fahrenheit
    const celcius = parseFloat(celciusValue);
    const fahrenheit = celcius * 1.8 + 32;
    document.getElementById("fahrenheitText").value = fahrenheit.toFixed(2);
  } else if (fahrenheitValue !== "") {
    // Convert Fahrenheit to Celsius
    const fahrenheit = parseFloat(fahrenheitValue);
    const celcius = (fahrenheit - 32) / 1.8;
    document.getElementById("celciusText").value = celcius.toFixed(2);
  } else {
    alert("Please enter a value to convert in one of the fields.");
  }
});

// Resets user input fields
document.getElementById("resetValues").addEventListener("click", () => {
  document.getElementById("celciusText").value = "";
  document.getElementById("fahrenheitText").value = "";
});
