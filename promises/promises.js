console.log("start");
const brands = ["BMW", "Tesla", "Dacia"];
const models = {
  BMW: [525, 505, "i"],
  Tesla: ["S", "X", 3],
  Dacia: ["Logan", "Sandera", "Duster"],
};
const color = ["Green", "Red", "Blue"];

function getBrands() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true;
      //   if (error) {
      //     reject("An error was trown");
      //   }
      console.log("We got our data");
      resolve(brands);
    }, 1000);
  });
}

function getModel(brand) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("We got our model", brand);
      resolve(models[brand]);
    }, 1000);
  });
}

function getColors(model) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("The model is", model);
      resolve(color);
    }, 1000);
  });
}

// Promises ES6
// getBrands()
//   .then((brandsResponse) => {
//     console.log(brandsResponse);
//     return getModel(brandsResponse[1]);
//   })
//   .then((modelsResponse) => {
//     console.log(modelsResponse);
//     return getColors(modelsResponse[0]);
//   })
//   .then((colorsResponse) => {
//     console.log(colorsResponse);
//   })
//   .catch((err) => console.log(err));

// Promise All
// const brandsPromise = getBrands();

// const modelPromise = getModel("BMW");

// const colorPromise = getColors();

// Promise.all([brandsPromise, modelPromise, colorPromise])
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => console.log(err));

// Async Await ES7
async function selectCarOptions() {
  try {
    const brandsResponse = await getBrands();
    console.log(brandsResponse);
    const modelsResponse = await getModel(brandsResponse[0]);
    console.log(modelsResponse);
    const colorReponse = await getColors(modelsResponse[0]);
    console.log(colorReponse);
  } catch (err) {
    console.log(err);
  }
}
selectCarOptions();
console.log("end");
