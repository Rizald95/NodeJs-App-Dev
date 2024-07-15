const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["cake", "Pie", "Donut"];

const allFavorites = [favorites, others];

console.log(allFavorites);

const allSpreadFavorites = [...favorites, ...others];
console.log(allSpreadFavorites);

const obj1 = { firstName: 'Obi-wan', age: 20 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = {...obj1, ...obj2 };