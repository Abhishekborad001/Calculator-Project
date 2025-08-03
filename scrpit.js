document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".button");

  let expression = "";

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.textContent;

      if (value === "C") {
        expression = "";
      } else if (value === "=") {
        try {
          expression = eval(expression).toString();
        } catch {
          expression = "Error";
        }
      } else {
        expression += value;
      }

      display.value = expression;
    });
  });
});
