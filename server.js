// PokeAPI Link
// https://pokeapi.co/

// Documentation
// https://pokeapi.co/docs/v2

const axios = require("axios");

const express = require('express');
// Init Package
const app = express();

async function makeRequestFirstFunc() {
  // Configure request
  const config = {
    method: "get", // request method (get, post, ...)
    url: "https://pokeapi.co/api/v2/pokemon/pikachu", // API link

  };
  let resFirst = await axios(config);
  return resFirst.data;

  // console.log("Name 1 = ");
  // console.log(`Pokemon Name: ${res.data.name}`);
  // console.log("Order 1 = ");
  // console.log(`Pokemon Order: ${res.data.order}`);
}
makeRequestFirstFunc();

async function makeRequestSecondFunc() {
  // Configure request
  const config = {
    method: "get", // request method (get, post, ...)
    url: "https://pokeapi.co/api/v2/pokemon", // API link
  };
  let resSecond = await axios(config);
  return resSecond.data;
  // console.log("Name 2 = ");
  // console.log(`Pokemon Name: ${res.data.name}`);
  // console.log("Order 2 = ");
  // console.log(`Pokemon Order: ${res.data.order}`);
}
makeRequestSecondFunc();

async function makeRequestThirdFunc() {
  // Configure request
  const config = {
    method: "get", // request method (get, post, ...)
    url: "https://pokeapi.co/api/v2/berry-firmness", // API link
  };
  let resThird = await axios(config);
  return resThird.data;
  // console.log("Name 3 = ");
  // console.log(`Pokemon Name: ${res.data.name}`);
  // console.log("Order 3 = ");
  // console.log(`Pokemon Order: ${res.data.order}`);
}
makeRequestThirdFunc();

//Routes
app.get("/", (req, res) => {
  res.render("views.ejs", {
    title: "Home Page",
    poki: [
      {
        name: "${resFirst.data.name}",
        order: "${resFirst.data.order}",
      },
      {
        name: "${resSecond.data.name}",
        order: "${resSecond.data.order}",
      },
      {
        name: "${resThird.data.name}",
        order: "${resThird.data.order}",
      }
    ],
  });
});
app.listen(3000);

// note : I tried it, and I didn't come out with a result.