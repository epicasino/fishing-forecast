export const getTides = async () => {
  const response = await fetch("http://localhost:3001/api/water/tides").then(
    (data) => data.json()
  );
  const anotherPotato = response.predictions;

  return anotherPotato;
};
