const favoriteSinger = {
    firstName : "Taylor",
    lastName: "Swift",
    email: "taylor13@gmail.com",
    bestSong: "my tears riccochet"
}

const herLastName = favoriteSinger['lastName'];
const herFirstName = favoriteSinger.firstName;
console.log(`her Full name: ${herFirstName} ${herLastName}`);

const {firstName:coolName, lastName:y} = favoriteSinger;
console.log(`her Full name with destructuring: ${coolName} ${y}`);
const superHeros = ["Superman", "SpiderMan", "Batman", "WonderWoman"];
const [,second,,four] = superHeros

console.log(second,four);
