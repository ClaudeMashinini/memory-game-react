function shuffle(array) {
  const arrray = array.slice(0);
  for (k = 0; k < array.length - 1; k++) {
    let randomizer = Math.floor(Math.random() * (k + 1));
    let temp = arrray[k];
    arrray[k] = arrray[randomizer];
    arrray[randomizer] = temp;
  }
  return arrray;
}

export default function formStack() {
  let id = 0;
  const cards = [
    "audi",
    "bmw",
    "bugatti",
    "ferrari",
    "fiat",
    "lambo",
    "maybach",
    "mb",
    "mcLaren",
    "nissan",
    "opel",
    "porsche",
    "RR",
    "tesla",
    "vw",
  ].reduce((acc, type) => {
    acc.push({
      id: id++,
      type,
    });
    acc.push({
      id: id++,
      type,
    });
    return acc;
  }, []);
  return shuffle(cards);
}
