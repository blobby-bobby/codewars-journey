function cakes(recipe, available) {
  const canBake = Object.keys(recipe).every((key) => key in available);
  if (!canBake) return 0;

  let result = 0;

  for (let ingredient in recipe) {
    let possibleFromIngredient = available[ingredient] / recipe[ingredient];

    if (result === 0 || possibleFromIngredient < result) {
      result = possibleFromIngredient;
    }
  }

  return Math.floor(result);
}
