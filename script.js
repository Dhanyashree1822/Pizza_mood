function generatePizza() {
  const mood = document.getElementById("moodSelect").value;
  const result = document.getElementById("pizzaResult");
  let pizza = "";

  switch (mood) {
    case "happy":
      pizza = "Pepperoni + Extra Cheese + Jalapeños";
      break;
    case "sad":
      pizza = "Mushroom + Olive + Extra Cheese";
      break;
    case "angry":
      pizza = "Spicy Chicken + Red Chili Flakes + Onion";
      break;
    case "romantic":
      pizza = "Tomato Basil + Mozzarella + Heart-shaped Pepperoni";
      break;
    default:
      pizza = "Classic Margherita";
  }

  result.innerHTML = <h2>Your Mood Pizza:</h2><p>${pizza}</p>;
}
