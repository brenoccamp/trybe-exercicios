// 3 - A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet , de forma que Marte seja impresso assincronamente, depois de 4 segundos.
const getPlanet = () => {
  setTimeout(() => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    console.log("Returned planet: ", mars);
  }, 4000);
};
// RESOLUÇÃO: Tudo o que foi feito foi colocar o corpo da função getPlanet dentro da função setTimeOut
getPlanet(); // imprime Marte depois de 4 segundos